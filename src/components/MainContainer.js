import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockData, setStockData] = useState([]);
  const [portfolioData, setPortfolioData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => {
        setStockData(data);
      });
  }, []);

  function handleAdd(stockObj) {
    setPortfolioData([...portfolioData, stockObj]);
  }
  //event e.target.name
  //if this one gets clicked, I add that one to porfolio. by changing the state?

  //I stopped here for dinner
  function handleDelete(stockObj){
    const filtered = portfolioData.filter(element => element !== stockObj)

    setPortfolioData(filtered)
  }
  
  const [isSorted, setIsSorted] = useState("")


  function handleSortSelect(e){
    setIsSorted(e.target.value)
  }

  let sortedData 
  if (isSorted === "Alphabetically") {
    sortedData = [...stockData].sort(( a, b ) => (a.name < b.name) ? -1 : 1);
  } else if (isSorted === "Price"){
    sortedData = [...stockData].sort((a, b) => a.price - b.price)
  } else {
    sortedData = stockData
  }

  const [isfilter, setIsFilter] = useState("")
  function handleFilterDropdown(e){
    setIsFilter(e.target.value)
  }

  const filteredStuff = isfilter ? sortedData.filter((data) => data.type === isfilter) : sortedData;


  
  return (
    <div>
      <SearchBar handleSortSelect={handleSortSelect} handleFilterDropdown={handleFilterDropdown}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={filteredStuff} handleAdd={handleAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioData={portfolioData} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
