import React, { useState } from "react"
import ReactPaginate from "react-paginate"
import styles from "./pagination.module.scss"

const MyComponent = ({ func, page }) => {
  const pageCount = 13

  return (
    <div>
      <ReactPaginate
        previousLabel={""}
        nextLabel={""}
        breakLabel={
          <span className={styles.pagination}>
            <span className={styles.dots}>...</span>
            <span className={styles.pageNumber}>{pageCount}</span>
          </span>
        }
        pageCount={pageCount}
        marginPagesDisplayed={0}
        pageRangeDisplayed={3}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.page}
        pageLinkClassName={styles.page}
        onPageChange={func}
        forcePage={page}
      />
    </div>
  )
}

export default MyComponent
