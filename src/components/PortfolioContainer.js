import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ 
  portfolio, 
  handleDeleteStock }) {
  const myPortfolio = 
    portfolio.map(stock => 
     <Stock 
      key={stock.id} 
      stock={stock} 
      onClick={() => handleDeleteStock(stock.id)} 
    />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolio}
    </div>
  );
}

export default PortfolioContainer;
