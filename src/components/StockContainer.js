import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onBuyStock, filterBy}) {
  

  const mapStocks = stocks
  .filter(stock => filterBy === "" || stock.type.toUpperCase() === filterBy.toUpperCase())
  .map(stock => 
     <Stock 
       key={stock.id} 
       stock={stock} 
       onClick={() => onBuyStock(stock.id)} 
     />
     )

  return (
    <div>
      <h2>Stocks</h2>
      {mapStocks}
    </div>
  );
}

export default StockContainer;
