import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';



const MyComponent = () => {
  const pageCount = 13;

const handlePageChange = (selectedPage) => {
  console.log(selectedPage.selected + 1);
}


  return (
    <div>
      {/* Ваш контент здесь */}
      <ReactPaginate
       previousLabel={''}
       nextLabel={''}
       breakLabel={<span className={styles.pagination}> 
         <span className={styles.dots}>...</span>
  <span className={styles.pageNumber}>{pageCount}</span>
       
       
       </span>}
       pageCount={pageCount}
       marginPagesDisplayed={0}
       pageRangeDisplayed={3} 
       containerClassName={styles.pagination}
       activeClassName={styles.active}
       pageClassName={styles.page}
       pageLinkClassName={styles.page}
       onPageChange={handlePageChange}
    
      />
    </div>
  );
};

export default MyComponent;




/*
      <ReactPaginate
       previousLabel={''}
       nextLabel={''}
       breakLabel={<span className={styles.pagination}>...{pageCount}</span>}
       pageCount={pageCount}
       marginPagesDisplayed={0}
       pageRangeDisplayed={3} 
       containerClassName={styles.pagination}
       activeClassName={styles.active}
       pageClassName={styles.page}
       pageLinkClassName={styles.page}
      //  previousLinkClassName={styles.page}
      //  nextLinkClassName={styles.page}
      />

*/