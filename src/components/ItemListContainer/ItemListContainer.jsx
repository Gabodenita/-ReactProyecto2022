import React, { useState, useEffect } from 'react'
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import ItemList from './ItemsList';
import getItemsFromAPI from '../../mockService/mockService';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    getItemsFromAPI(id).then((itemsDB) => {
      console.log(itemsDB);
      setProductsList(itemsDB);
    });
  }, []);

  return (
    <div>
      <FlexWrapper>
        <ItemList productsList={productsList}/>
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer  


// 55 minutos