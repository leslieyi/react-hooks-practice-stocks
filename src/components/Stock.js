import React from "react";

function Stock({oneStock, handleAdd, handleDelete}) {
  return (
    <div>
      <div  className="card">
        <div className="card-body">
          <h3 className="card-title">{oneStock.name}</h3>
          <p className="card-text">{oneStock.ticker}:{oneStock.price}</p>
     
          {handleAdd? 
          <button onClick={()=>handleAdd(oneStock)}>Buy</button>
          :
          <button onClick={()=>handleDelete(oneStock)}>Sell</button>

          
        }
          
        </div>
      </div>
    </div>
  );
}
export default Stock;
