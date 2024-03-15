import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ portfolio, stocks, setStocks, onBuyStock, handleDeleteStock, filterBy, setFilterBy }) {

  const handleSortChange = (criteria) => {
   if (criteria === "Alphabetically") {
      setStocks([...stocks.sort((a, b) => a.ticker.localeCompare(b.ticker))]);
    } else if (criteria === "Price") {
      setStocks([...stocks.sort((a, b) => a.price - b.price)]);
    }
  };

function handleFilter(e) {
setFilterBy(e.target.value)
}

  return (
    <div>
      <SearchBar stocks={stocks} handleSortChange={handleSortChange} handleFilter={handleFilter} filterBy={filterBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onBuyStock={onBuyStock} filterBy={filterBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleDeleteStock={handleDeleteStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
