import React, { useState, useEffect } from "react";
import ShowPricesCSS from './ShowPrices.css'
import Sidebar from "./components/Contractor/Sidebar";

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
    let blocks_date = data.blocks ? data.blocks.date : 'N/A';
    let sand_date = data.sand ? data.sand.date : 'N/A';
    let crush_date = data.crush ? data.crush.date : 'N/A';
    let marble_date = data.marble ? data.marble.date : 'N/A';





    return (
        <>
        <Sidebar />
        <center>
        <div className="all_prices">
        <h3>Cement Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Cement data...</span>
                </div>
            ) :
            <>
            <span>Prices last updated on {cement_date}</span>
             <table className="table-prices border">
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
                            <td><b>{company}</b></td>
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

            <h3>Blocks Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Blocks data...</span>
                </div>
            ) :
            <>
            <span>Prices last updated on {blocks_date}</span>
             <table className="table-prices border">
                <thead>
                    <tr>
                        <th>Block Category</th>
                        <th>Size (in Inches)</th>
                        <th>Quantity</th>
                        <th>Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.blocks || {}).map(([company, {price, size}]) => (
                        <>
                        {company!=="date" &&
                        <tr key={company}>
                            <td><b>{company === "solid 1200 PSI"? "Solid 1200 PSI":company}</b></td>
                            <td>{size}</td>
                            <td>1</td>
                            <td>{price}</td>
                        </tr>
                        }
                        </>
                    ))}
                </tbody>
            </table>
            </>
            }

<h3>Aluminum Windows Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Windows data...</span>
                </div>
            ) :            <>
            <span>Prices last updated on {alum_date}</span>
            <table className="table-prices border">
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
                            <td><b>{company}</b></td>
                            <td>Sq. ft</td>
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

            <h3>Labour Rates</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Labour data...</span>
                </div>
            ) :            <>
            <span>Prices last updated on {alum_date}</span>
             <table className="table-prices border">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Unit (Per)</th>
                        <th>Min Price (Rs.)</th>
                        <th>Max Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.labour || {}).map(([company, { min, max }]) => (
                        <>
                        {company!=="date" && 
                        <tr key={company}>
                            <td><b>{company}</b></td>
                            <td>Sq. ft covered area</td>
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
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Steel data...</span>
                </div>
            ) :                <div>
                    <span>Prices last updated on {steel_date}</span>
                    <table className="table-prices border">
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
                                            <td><b>{company}</b></td>
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

            <h3>Sand Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Sand data...</span>
                </div>
            ) :            <>
            <span>Prices last updated on {sand_date}</span>
             <table className="table-prices border">
                <thead>
                    <tr>
                        <th>Sand Category</th>
                        <th>Unit (Per)</th>
                        <th>Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.sand || {}).map(([company, {price}]) => (
                        <>
                        {company!=="date" &&
                        <tr key={company}>
                            <td><b>{company}</b></td>
                            <td>Cubic Ft</td>
                            <td>{price}</td>
                        </tr>
                        }
                        </>
                    ))}
                </tbody>
            </table>
            </>
            }

            <h3>Crush (Bajri) Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Crush data...</span>
                </div>
            ) :            <>
            <span>Prices last updated on {crush_date}</span>
             <table className="table-prices border">
                <thead>
                    <tr>
                        <th>Crush Category</th>
                        <th>Unit (Per)</th>
                        <th>Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.crush || {}).map(([company, {price}]) => (
                        <>
                        {company!=="date" &&
                        <tr key={company}>
                            <td><b>{company}</b></td>
                            <td>Cubic Ft</td>
                            <td>{price}</td>
                        </tr>
                        }
                        </>
                    ))}
                </tbody>
            </table>
            </>
            }



            <h3>Marble Prices</h3>
            {loading ? (
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <span>Loading Marble data...</span>
                </div>
            ) :            <>
            <span>Prices last updated on {marble_date}</span>
             <table className="table-prices border">
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Unit (Per)</th>
                        <th>Price (Rs.)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data.marble || {}).map(([company, { price }]) => (
                        <>
                        {company!=="date" && 
                        <tr key={company}>
                            <td><b>{company}</b></td>
                            <td>Sq. ft</td>
                            <td>{price}</td>
                        </tr>
                        }
                        </>
                    ))}
                </tbody>
            </table>
            </>
            }






        </div>
        
        </center>
        </>
    );
};

export default ShowPrices;
