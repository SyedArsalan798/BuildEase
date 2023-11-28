import React, { useState, useEffect } from "react";

const ShowPrices = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch("/get_prices"); // Updated endpoint
                const data = await response.json();
                setData(data);
                setLoading(false)
            } catch (error) {
                setLoading(true)
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    let alum_date = data.aluminum ? data.aluminum.date : 'N/A';
    let cement_date = data.cement ? data.cement.date : 'N/A';
    let steel_date = data.steel ? data.steel.date : 'N/A';



    return (
        <>
        <div>
            <h3>Aluminum Prices</h3>
            {loading ? "Loading..." :  
            <>
            <span>Prices last updated on {alum_date}</span>
            <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Unit (Per)</th>
                        <th>Min Price (Rs.)</th>
                        <th>Max Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.aluminum || {}).map(([company, { min, max }]) => (
                        <>
                        {company!=="date" && 
                        <tr key={company}>
                            <td>{company}</td>
                            <td>sq. ft</td>
                            <td>{min}</td>
                            <td>{max}</td>
                        </tr>
                        }
                        </>
                        
                    ))}
                </tbody>
            </table>
            </>
            }

            <h3>Cement Prices</h3>
            {loading ? "Loading..." :
            <>
            <span>Prices last updated on {cement_date}</span>
             <table>
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Unit (Per)</th>
                        <th>Min Price (Rs.)</th>
                        <th>Max Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.cement || {}).map(([company, { min, max }]) => (
                        <>
                        {company!=="date" && 
                        <tr key={company}>
                            <td>{company}</td>
                            <td>{company === "Maple Leaf White Cement (40KG)" ? "40Kg" : "50Kg"}</td>
                            <td>{min}</td>
                            <td>{max}</td>
                        </tr>
                        }
                        </>
                    ))}
                </tbody>
            </table>
            </>
            }

            <h3>Steel Prices</h3>
            {loading ? "Loading..." :
                <div>
                    <span>Prices last updated on {steel_date}</span>
                    <table>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Unit (Per)</th>
                                <th>Price (Rs.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(data.steel || {}).map(([company, { price }]) => (
                                <>
                                    {company !== "date" &&
                                        <tr key={company}>
                                            <td>{company}</td>
                                            <td>1Kg</td>
                                            <td>{price}</td>
                                            
                                        </tr>
                                    }
                                </>
                            ))}
                        </tbody>
                    </table>
                </div>
            }

        </div>
        
        </>
    );
};

export default ShowPrices;
