import React from "react";
import Stock from "./Stock";

function StockContainer({stockData, handleAdd}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockData.map(oneStock=> 
        <Stock key={oneStock.id} oneStock={oneStock} handleAdd={handleAdd}/>
        )}
    </div>
  );
}

export default StockContainer;
