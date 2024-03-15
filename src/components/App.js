import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filterBy, setFilterBy] = useState('')

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then(setStocks)
    .catch((err) => alert(err))
  }, [])

  function handleBuyStock(id) { 
    const stockToBuy = stocks.find(stock => stock.id === id);
      setPortfolio([stockToBuy, ...portfolio]);
      setStocks(stocks.filter(stock => stock.id !== id));
  }

  function handleDeleteStock(stockIdToRemove) {
    setPortfolio((prev) => prev.filter((stock) => stock.id !== stockIdToRemove
    ));
  }

  return (
    <div>
      <Header />
      <MainContainer stocks={stocks} setStocks={setStocks} portfolio={portfolio} onBuyStock={handleBuyStock} handleDeleteStock={handleDeleteStock} filterBy={filterBy} setFilterBy={setFilterBy}/>
    </div>
  );
}

export default App;
