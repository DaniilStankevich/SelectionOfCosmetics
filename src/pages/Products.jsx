import React from 'react'
import jsonData from '../serveraAnswer/products.json';
import ProductItem from '../components/productItem/ProductItem';
import MyPagination from '../components/Pagination/Pagination';
import { useEffect } from 'react';
import { useState } from 'react';
import Skeleton from '../components/productItem/Skeleton';


 const Products = () => {

const [data, setData] = useState([]);       // Тут храним товары полученные с "сервера" 
const [page, setPage] = useState(0)         // Изменение номера страницы вызывает повторно асинхронную функцию

const handlePageChange = (selectedPage) => {
  setPage(selectedPage.selected)
}


const fetchData = async () => {
  const randomTime = Math.floor(Math.random() * ( 600 - 1000 + 1)) + 1000; // Случайное время ответа от "сервера" в пределах от 0.6 до 1 сек.
  await new Promise(resolve => setTimeout(resolve, randomTime)); // Вызываем функцию "resolve" в setTimeout для завершения промиса

  setData(jsonData);
};


// Делаем запрос на "cервер" при изменении номера страницы
useEffect(() => {
  setData([]) 
  fetchData();
}, [page])



const produtsGet =  data.map((item, i) => (<ProductItem key={i}   image={item.image} title={item.title} price={item.price} oldPrice={item.oldPrice} />))
const skeleton = [ ...new Array(10)].map((_, i)  =>  <Skeleton key={i}/> )

return ( 
  <>
    <div className="grid-container">
        {data.length === 0  ? skeleton : produtsGet  }
    </div>

    <MyPagination func={handlePageChange} page={page} />
  </>
)}

export default Products 