// import React, { useState, useEffect } from "react";
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context with initial empty data
const ShowPricesDataContext = createContext({ data: {}, loading: false, updateData: () => {} });

// Create a provider component to wrap your application
export const ShowPricesDataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  // Function to update data
  const updateData = newData => {
    setData(newData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/get_prices");
        const newData = await response.json();
        setData(newData);
        setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ShowPricesDataContext.Provider value={{ data, loading, updateData }}>
      {children}
    </ShowPricesDataContext.Provider>
  );
};

// Create a custom hook to use the context
export const useShowPricesData = () => useContext(ShowPricesDataContext);
