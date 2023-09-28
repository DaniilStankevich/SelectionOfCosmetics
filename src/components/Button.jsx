import React from 'react'
import styles from './button.module.scss'

//import styles from './Search.module.scss'

export const Button = ( {children, funProps} ) => {   

console.log(children)


  return (
    <button className={`${styles.root} ${children === 'Назад' ? styles.white : styles.blue}`} onClick={() => funProps()}>{children}</button>
  )



}
