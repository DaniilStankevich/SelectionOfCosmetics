import React from "react"
import styles from "./header.module.scss"

const Header = ({ mainTitle, subTitle }) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.maintitle}>{mainTitle}</h1>
      <h2 className={styles.subtitle}>{subTitle}</h2>
    </div>
  )
}

export default Header
