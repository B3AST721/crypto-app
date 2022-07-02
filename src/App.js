import './App.css';
import { useState, useEffect } from 'react';
import Crypto from './components/Crypto';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCoins(data);
    })
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div className='search'>
        <h1 className='text'>Search a currency</h1>
        <form>
          <input onChange={handleSearch} type='text' placeholder='Search' className='input' />
        </form>
      </div>
    </div>
  );
}

export default App;
