import React from "react"
import ContentLoader from "react-content-loader"
import styles from "./productItem.module.scss"

const Skeleton = () => (
  <div className={styles.centr}>
    <ContentLoader
      speed={2}
      width={240}
      height={342}
      viewBox="0 0 240 342"
      backgroundColor="#e5e0e0"
      foregroundColor="#ecebeb"
    >
      <rect
        x="-1"
        y="2"
        rx="7"
        ry="7"
        width="240"
        height="240"
      />
      <rect
        x="1"
        y="257"
        rx="7"
        ry="7"
        width="240"
        height="42"
      />
      <rect
        x="1"
        y="306"
        rx="7"
        ry="7"
        width="180"
        height="35"
      />
    </ContentLoader>
  </div>
)

export default Skeleton
