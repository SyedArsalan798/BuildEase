import concurrent.futures
from flask import Flask, jsonify
from bs4 import BeautifulSoup
import requests
import re
from datetime import datetime

# Block, sand, Crush --- Mapia
app = Flask(__name__)
mydate = ""

def setDateForCement(date):
    global mydate
    mydate = date

def getDateForCement():
    return mydate


def fetch_and_scrape_aluminum(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract data from the table and save it in a dictionary
    extracted_date = ""
    data_table = soup.find('table')
    date = soup.find('h2').text
    date_regex = r'(\d{1,2}[a-z]{2} \w+ \d{4})'
    match = re.search(date_regex, date, re.IGNORECASE)
    if match and match.group(1):
        extracted_date = match.group(1)
        setDateForCement(extracted_date)
    else:
        extracted_date = 'N/A'

    rows = data_table.find_all('tr')[1:]  # Skip the header row

    data = {}
    for row in rows:
        columns = row.find_all('td')
        company = columns[0].text.strip()
        price_with_currency = columns[1].text.strip()
        
        # Remove the "Rs." prefix and commas from the price
        price_range = price_with_currency.replace("Rs.", "").replace(",", "").strip()

        # Split the price range into min and max values
        min_price, max_price = map(int, price_range.split('-'))

        data[company] = {'min': min_price, 'max': max_price}
        data["date"] = extracted_date


    return data

def fetch_and_scrape_cement(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    extracted_date = mydate
    data_table = soup.find('table')


    rows = data_table.find_all('tr')[1:]  # Skip the header row

    data = {}
    for row in rows:
        columns = row.find_all('td')
        company = columns[0].text.strip()
        price_with_currency = columns[1].text.strip()
        
        # Remove the "Rs." prefix and commas from the price
        price_range = price_with_currency.replace("Rs.", "").replace(",", "").strip()

        # Split the price range into min and max values
        min_price, max_price = map(int, price_range.split('-'))

        data[company] = {'min': min_price, 'max': max_price}
        data["date"] = extracted_date

    return data



def get_ordinal_suffix(day):
    if 4 <= day <= 20 or 24 <= day <= 30:
        suffix = "th"
    else:
        suffix = ["st", "nd", "rd"][day % 10 - 1]
    return suffix


def fetch_and_scrape_steel(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract data from the steel table and save it in a dictionary
    # extracted_date = ""
    # data_table = soup.find('table')
    # date_element = soup.find('td', {'class': 'orange-span'})
    # if date_element:
    #     date = date_element.text.strip()
    #     extracted_date = date
    data_table = soup.find('table')


    rows = data_table.find_all('tr')[1:]  # Skip the header row

    steel_data = {}
    for row in rows:
        columns = row.find_all('td')
        original_name = columns[1].text.strip()
        if 'Steel' in original_name:
            name = columns[1].text.strip().replace("Steel-Bar ", "").replace("60-Grade ", "")  # Remove unnecessary words
            name+=" 60-Grade"
            price_with_currency = columns[2].text.strip()

            steel_data[name] = {'price': price_with_currency}

    #Setting any one of the cell's date, that is what we wanted
    date_str = columns[4].text.strip()
    date_obj = datetime.strptime(date_str, '%d-%m-%Y')
    formatted_date = date_obj.strftime(f"%d{get_ordinal_suffix(date_obj.day)} %B %Y")

    steel_data["date"] = formatted_date
    return steel_data


def fetch_and_scrape_blocks(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extract data from the blocks table and save it in a dictionary

    karachi_tab_content = soup.find('div', {'id': 'karachiTabContent'})

    # Check if karachi_tab_content is found
    if karachi_tab_content:
        # Extract data from the blocks table and save it in a dictionary
        data_table = karachi_tab_content.find('table')
    
    rows = data_table.find_all('tr')[1:]  # Skip the header row

    blocks_data = {}
    for row in rows:
        columns = row.find_all('td')
        original_name = columns[1].text.strip()
        if 'Blocks' in original_name:
            name = original_name.replace("Blocks-", "").split("PSI")[0].strip() + " PSI"  # Remove unnecessary words
            pattern = r'(\d+"-\d+"x \d+"x \d+")'
            match = re.search(pattern, original_name)
            if match:
                dimensions = match.group(1)

            price_with_currency = columns[2].text.strip()

            blocks_data[name] = {'price': price_with_currency, 'size': dimensions}


    # Extract date and format it
    date_str = columns[4].text.strip()
    date_obj = datetime.strptime(date_str, '%d-%m-%Y')
    formatted_date = date_obj.strftime(f"%d{get_ordinal_suffix(date_obj.day)} %B %Y")
    blocks_data["date"] = formatted_date


    return blocks_data

def fetch_and_scrape_sand(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the karachiTabContent div
    karachi_tab_content = soup.find('div', {'id': 'karachiTabContent'})

    # Check if karachi_tab_content is found
    if karachi_tab_content:
        # Extract data from the sand table and save it in a dictionary
        data_table = karachi_tab_content.find('table')

        rows = data_table.find_all('tr')[1:]  # Skip the header row

        sand_data = {}
        for row in rows:
            columns = row.find_all('td')
            original_name = columns[1].text.strip()
            if 'Sand' in original_name:
                name = original_name.strip()  # Remove unnecessary words
                price_with_currency = columns[2].text.strip()

                sand_data[name] = {'price': price_with_currency}


        # Extract date and format it
        date_str = columns[4].text.strip()
        date_obj = datetime.strptime(date_str, '%d-%m-%Y')
        formatted_date = date_obj.strftime(f"%d{get_ordinal_suffix(date_obj.day)} %B %Y")
        sand_data["date"] = formatted_date


        return sand_data
    else:
        return {'error': 'karachiTabContent not found'}

def fetch_and_scrape_crush(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the karachiTabContent div
    karachi_tab_content = soup.find('div', {'id': 'karachiTabContent'})

    # Check if karachi_tab_content is found
    if karachi_tab_content:
        # Extract data from the crush table and save it in a dictionary
        data_table = karachi_tab_content.find('table')

        rows = data_table.find_all('tr')[1:]  # Skip the header row

        crush_data = {}
        for row in rows:
            columns = row.find_all('td')
            original_name = columns[1].text.strip()
            if 'Crush' in original_name:
                name = original_name.strip()  # Remove unnecessary words
                price_with_currency = columns[2].text.strip()

                crush_data[name] = {'price': price_with_currency}

        # Extract date and format it
        date_str = columns[4].text.strip()
        date_obj = datetime.strptime(date_str, '%d-%m-%Y')
        formatted_date = date_obj.strftime(f"%d{get_ordinal_suffix(date_obj.day)} %B %Y")
        crush_data["date"] = formatted_date

        return crush_data
    else:
        return {'error': 'karachiTabContent not found'}


@app.route('/get_prices')
def get_prices():
    urls = [
        {"url": "https://priceindex.pk/aluminum-windows-price-pakistan/", "fetch_func": fetch_and_scrape_aluminum},
        {"url": "https://priceindex.pk/cement-price-pakistan/", "fetch_func": fetch_and_scrape_cement},
        {"url": "https://mapia.pk/material-rates", "fetch_func": fetch_and_scrape_steel},
        {"url": "https://mapia.pk/material-rates", "fetch_func": fetch_and_scrape_blocks},  # Add the new function
        {"url": "https://mapia.pk/material-rates", "fetch_func": fetch_and_scrape_sand},  # Add the new function
        {"url": "https://mapia.pk/material-rates", "fetch_func": fetch_and_scrape_crush}



    ]

    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = list(executor.map(lambda url: url["fetch_func"](url["url"]), urls))

    aluminum_data = results[0]
    cement_data = results[1]
    steel_data = results[2]
    blocks_data = results[3]
    sand_data = results[4]
    crush_data = results[5]


    # Without concurrent processes
    # aluminum_data = fetch_and_scrape_aluminum(urls[0]["url"])
    # cement_data = fetch_and_scrape_cement(urls[1]["url"])
    # steel_data = fetch_and_scrape_steel(urls[2]["url"])
    
    return jsonify({'aluminum': aluminum_data, 'cement': cement_data, 'steel': steel_data, 'blocks': blocks_data, 'sand': sand_data, 'crush': crush_data})



if __name__ == '__main__':
    app.run(debug=True)