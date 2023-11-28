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

    # Extract data from the table and save it in a dictionary
    extracted_date = mydate
    data_table = soup.find('table')
    # date = soup.find('h2').text
    # date_regex = r'(\d{1,2}[a-z]{2} \w+ \d{4})'
    # match = re.search(date_regex, date, re.IGNORECASE)
    # if match and match.group(1):
    #     extracted_date = match.group(1)
    #     setDateForCement(extracted_date)
    # else:
    #     extracted_date = 'N/A'

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
        
        # Remove the "Rs." prefix and commas from the price
        # price_range = price_with_currency.replace("Rs.", "").replace(",", "").strip()

        # Split the price range into min and max values
        # min_price, max_price = map(float, price_range.split('-'))

            steel_data[name] = {'price': price_with_currency}

        # Inside the loop where you set the date in the fetch_and_scrape_steel function
        date_str = columns[4].text.strip()
        date_obj = datetime.strptime(date_str, '%d-%m-%Y')
        formatted_date = date_obj.strftime(f"%d{get_ordinal_suffix(date_obj.day)} %B %Y")

        steel_data["date"] = formatted_date
    return steel_data

@app.route('/get_prices')
def get_prices():
    urls = [
        {"url": "https://priceindex.pk/aluminum-windows-price-pakistan/", "fetch_func": fetch_and_scrape_aluminum},
        {"url": "https://priceindex.pk/cement-price-pakistan/", "fetch_func": fetch_and_scrape_cement},
        {"url": "https://mapia.pk/material-rates", "fetch_func": fetch_and_scrape_steel}
    ]

    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = list(executor.map(lambda url: url["fetch_func"](url["url"]), urls))

    aluminum_data = results[0]
    cement_data = results[1]
    steel_data = results[2]
    # Without concurrent processes
    # aluminum_data = fetch_and_scrape_aluminum(urls[0]["url"])
    # cement_data = fetch_and_scrape_cement(urls[1]["url"])
    # steel_data = fetch_and_scrape_steel(urls[2]["url"])
    
    return jsonify({'aluminum': aluminum_data, 'cement': cement_data, 'steel': steel_data})

if __name__ == '__main__':
    app.run(debug=True)