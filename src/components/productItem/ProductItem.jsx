import { ReactComponent as Heart } from "../../images/icons/heart.svg"
import React, { useState } from "react"
import styles from "./productItem.module.scss"

const ProductItem = ({ image, title, price, oldPrice }) => {

  // Для интерактивности я добавил имитацию добавления товара в "изрбанное"
  const [heartActive, setHeartAcrive] = useState(false)

  function AddProduct() {
    setHeartAcrive(!heartActive)
  }

  // Формирование многоточия в конце текста, на случай
  // если название длиннее, чем может вместить контейнер
  function ellipses(inputString) {
    return inputString.slice(0, 45).slice(0, -1) + "…"
  }

  return (
    <div className={styles.centr}>
      <div className={styles.item}>
        <div className={styles.image}>
          <button onClick={AddProduct}>
            <Heart
              className={`${styles.icon}  ${heartActive && styles.iconAdd}`}
            />{" "}
          </button>
          <img
            src={image}
            alt=""
            className={styles.fitImage}
          />
        </div>

        <div className={styles.title}>
          <p>{title.length > 46 ? ellipses(title) : title}</p>
        </div>

        <div className={styles.priceContainer}>
          {oldPrice && <span className={styles.oldPrice}>{price}</span>}
          <span className={styles.price}>
            {price} <span>руб.</span>
          </span>
        </div>
      </div>
    </div>
  )
}
export default ProductItem
