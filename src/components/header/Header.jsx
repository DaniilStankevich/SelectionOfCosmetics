import React from 'react';
import styles from './header.module.scss'



const Header = ( { mainTitle, subTitle}) => {


// Пропсы:
// MaitTitle h1
// SubTittle h2

  return (
<div className={styles.root}>
        <h1 className={styles.maintitle}>{mainTitle}</h1>
        <h2 className={styles.subtitle}>{subTitle}</h2>       
    </div> 
  )
}


export default Header

/*     <div className={styles.root}>
        <h1 className={styles.maintitle}>Онлайн-подбор средств для лица</h1>
        <h2 className={styles.subtitle}>Пройдите короткий тест и получите список наиболее
          подходящих для вас косметических продуктов</h2>       
    </div> */

    /*
    .root {

    height: 115px;
    background-color: aqua;

}


.maintitle {
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
    padding: 0; 
    margin-bottom: 21px ;
    
}

.subtitle {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
    width: 583px;
}
    */