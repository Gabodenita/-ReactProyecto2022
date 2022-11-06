import React from 'react'
import Item from '../../Item/Item';
import FlexWrapper from '../FlexWrapper/FlexWrapper';




function ItemListContainer(props) {
  return (
        // <h1>{props.greeting}</h1>
        <div>
          <FlexWrapper>
            <Item
           price = {5000} 
           title = "Producto 1" 
           imgurl="/img/07-news-of-the-world-gr.jpg"
           detail= "lorem ipsum"
           />
           
          <Item 
          price = {5100} 
          title = "Producto 2" 
          imgurl="/img/00105112648315____1__640x640.webp"
          detail= "lorem ipsum"
          />
          
          <Item 
          price = {4000} 
          title = "Producto 3" 
          imgurl="/img/A-Kind-Of-Magic-Queen.jpg"
          detail= "lorem ipsum"
          />
          
          <Item 
          price = {5900} 
          title = "Producto 4" 
          imgurl="/img/D_NQ_NP_893016-MLA42875729611_072020-W.jpg"
          detail= "lorem ipsum"
          />
          </FlexWrapper>
          
          
        </div>
    ); 
}

export default ItemListContainer