import React from 'react'
import jsonData from '../serveraAnswer/products.json';
import ProductItem from '../components/poductItem/ProductItem';


//Бальзам от пигм.пятен для чув. кожи ISISPHARMA NEOTONE Sensitive 30мл


export const Products = () => {

let string = "Бальзам от пигм.пятен для чув. кожи ISISPHARMA NEOTONE Sensitive 30мл"
let stringSlice = "Бальзам от пигм.пятен для чув. кожи ISISPHARMF…"  // Длина 46 символов
//console.log('Бальзам от пигм.пятен для чув. кожи ISISPHARMA'.split("").length) 
//console.log(stringSlice.length)



//Функция аснхронного запроса




let test ="Пилинг энзиматический Dermedic HYDRAIN3 HIAL"


return (

    <div className="grid-container">

      {jsonData.map((item, i) => (
          <ProductItem key={i}   image={item.image}  title={item.title} price={item.price} oldPrice={item.oldPrice} /> 
      ))}

    </div>


)}




/* 
<div key={index} className='centr'> 

              <div  className="grid-item">

                <div  className="item_image  ">
        <img src={item.image} alt=""  className="fit-image"/>
                </div>

                <div className="item_title">
      <p>{item.title.length > 45 ? ellipses(item.title) : item.title}</p>
                </div>

                <div className='item_price'>
      <p>
      {item.price}
      </p>

                </div>

              </div>


          </div>
*/












//        <ProductItem  image={item.image} title={item.title}  price={item.price}  />


/*
<div key={index} className='centr'> 

      <div  className="grid-item">
        <div  className="image_item">
              <img src="../images/product-1.jpeg" alt=""  className="fit-image"/>
        </div>




      </div>

      </div>

          <img src="../images/product-1.jpeg"  className="fit-image" alt="Product 1" />


*/