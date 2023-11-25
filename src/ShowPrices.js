// src/App.js
import React, { useEffect } from 'react';
// import runPuppeteer from './Pricelist';

function ShowPrices() {
  useEffect(() => {
    async function fetchData() {
      // await runPuppeteer();
    }
    fetchData();
  }, []);

  return (
    <div className="">
      {/* Your React components */}
    </div>
  );
}

export default ShowPrices;
