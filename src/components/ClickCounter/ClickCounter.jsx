import React from 'react';
import { useState } from 'react';
import "./clickCounter.css";


function ClickCounter({stock}) {
    const [cantidad, setcantidad] = useState(1);
    
    function handleincrement (){
      if (cantidad< stock){
          setcantidad(cantidad +1);
          console.log("sumado del carrito")
      }    
    } 

    function handledecrement (){
      if (cantidad > 1){
        setcantidad(cantidad -1);
        console.log("restado del carrito")
      }
    } 

    function handleAddToCart(){
      console.log("Agragado al carrito")
    }

  return (
    <div>
        <div className='contador'>
            <button onClick={handledecrement}> - </button>
            <p> {cantidad} </p>
            <button onClick = {handleincrement}> + </button>
        </div>
        <button onClick={handleAddToCart}> Agregar al carrito</button>
    </div>
  )
}

export default ClickCounter;             