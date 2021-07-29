import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioData , handleDelete}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioData.map(port=> 
        <Stock key={Math.random()} oneStock={port} handleDelete={handleDelete}/>
        )} 

    </div>
  );
}

export default PortfolioContainer;

//oneSto
