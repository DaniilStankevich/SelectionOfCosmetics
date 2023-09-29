import { ReactComponent as Heart}  from '../../images/icons/heart.svg';
import React, { useState } from 'react';
import styles from './productItem.module.scss'; // Подключаем модульные стили






const ProductItem = ({ image, title, price, oldPrice }) => {


// Сдесь, конечно же должна, распологаться функция отправки товара в хранилище 
// со всеми товарами. Но добавил состояние для интерактивности
const [ heartActive, setHeartAcrive ] = useState(false)

// Добавление товара в "избранное"
function AddProduct () {
  setHeartAcrive(!heartActive)
}

// Формирование многоточие в конце текста, на случай
// если название длинне, чем может вместить контейнер
function ellipses (inputString) {
    return inputString.slice(0, 45).slice(0, -1) + '…';
}




  return (

        <div  className={styles.centr}> 
              <div  className={styles.item}>


                  <div  className={styles.image}>
                      <button onClick={AddProduct}  ><Heart className={`${styles.icon}  ${heartActive && styles.iconAdd}`}/>   </button>
                      <img src={image} alt=""  className={styles.fitImage}/>
                  </div>

                  <div className={styles.title}>
                      <p>{title.length > 46 ? ellipses(title) : title}</p>
                  </div>

                  <div className={styles.priceContainer}> 
                      {oldPrice &&  <span className={styles.oldPrice} >{price}</span> } 
                      <span className={styles.price}>{price} <p>руб.</p></span>
                  </div>


              </div>
        </div>
  )



}
export default ProductItem;
