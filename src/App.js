import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setCoins(data);
    })
  }, []);

  return (
    <div className="App">
      <ul>
        {coins.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
