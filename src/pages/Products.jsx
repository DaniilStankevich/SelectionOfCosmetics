import React from 'react'
import jsonData from '../serveraAnswer/products.json';
import ProductItem from '../components/poductItem/ProductItem';
import MyPagination from '../components/Pagination/Pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from '../components/poductItem/Skeleton';


export const Products = () => {

const [data, setData] = useState([]);
const [page, setPage] = useState(0)
const [load, setLoad] = useState(false)

const handlePageChange = (selectedPage) => {
  setPage(selectedPage.selected)
}


const fetchData = async () => {
  const randomTime = Math.floor(Math.random() * ( 500 - 1000 + 1)) + 1000; // Случайное время ответа от сервера в пределах от 0.5 до 1 сек.
  await new Promise(resolve => setTimeout(resolve, randomTime)); // Вызываем функцию "resolve" в setTimeout для завершения промиса
  
  setData(jsonData);
  setLoad(true)
};


// Делаем запрос на "cервер" при изменении номера страницы
useEffect(() => {
  setData([])
  setLoad(false)
  fetchData();
}, [page])



const produtsGet =  data.map((item, i) => (<ProductItem key={i}   image={item.image} title={item.title} price={item.price} oldPrice={item.oldPrice} />))
const skeleton = [ ...new Array(10)].map((_, i)  =>  <Skeleton key={i}/> )

return ( <>


    <div className="grid-container">

        { data.length === 0 ? skeleton : produtsGet  }
  
    </div>

   
    <MyPagination func={handlePageChange} page={page} />

  
    </>
)}
