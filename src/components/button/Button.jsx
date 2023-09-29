import React from 'react'
import styles from './button.module.scss'

const Button = ( {children, funProps} ) => {   
  return (
    <button className={`${styles.root} ${children === 'Назад' ? styles.white : styles.blue}`} onClick={() => funProps()}>{children}</button>
  )

}

export default Button
