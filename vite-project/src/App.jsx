import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  const [carbonData, setCarbonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY = 'RnqzyslpQBxuBk53fSyonQ';
        const url = 'https://www.carboninterface.com/api/v1/auth';

        const headers = {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        };


        const requestData = {
          type: 'electricity',
          electricity_unit: 'mwh',
          electricity_value: 42,
          country: 'us',
          state: 'fl',
        };

        const response = await axios.get(url, { params, headers });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs once after the initial render


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className="carbon-data">
          <h2>Carbon Data:</h2>
          <pre>{JSON.stringify(carbonData, null, 2)}</pre>
        </div>
    </>
  )
}

export default App
