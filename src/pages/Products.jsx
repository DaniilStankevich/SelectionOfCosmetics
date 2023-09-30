import React from 'react'
import jsonData from '../serveraAnswer/products.json';
import ProductItem from '../components/poductItem/ProductItem';
import MyPagination from '../components/Pagination/Pagination';

import ReactPaginate from 'react-paginate';



//Бальзам от пигм.пятен для чув. кожи ISISPHARMA NEOTONE Sensitive 30мл


export const Products = () => {



return ( <>


    <div className="grid-container">

      {jsonData.map((item, i) => (
          <ProductItem key={i}   image={item.image}  title={item.title} price={item.price} oldPrice={item.oldPrice} /> 
      ))}

    </div>

   
    <MyPagination />

  
    </>
)}




/*
  <ContentLoader 
    speed={2}
    width={240}
    height={342}
    viewBox="0 0 240 342"
    backgroundColor="#e5e0e0"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-1" y="2" rx="7" ry="7" width="240" height="240" /> 
    <rect x="1" y="257" rx="0" ry="0" width="240" height="42" /> 
    <rect x="1" y="306" rx="0" ry="0" width="180" height="34" />
  </ContentLoader>

*/