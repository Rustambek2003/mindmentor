import Link from 'next/link'
import React from 'react'
import { Box } from "@mui/material"
import styles from  '../../styles/Home.module.css'
import {GiHamburgerMenu } from 'react-icons/gi';
import { render } from 'react-dom';








const Header = () => {
 
 
  return (
    <div className={styles.wrapperheader}>
      <div className={styles.block_text}>
        <h3>Скидка до 70%</h3>
        <h4>на первый урок</h4>
      </div>
      <div className={styles.block_text}>
      <h3>Осталось</h3>
      <h4>5 дней 16:10:32</h4>
      </div>
      <div>
        <button className={styles.block_text_button}>
           <h5>Записаться к ментору</h5>
        </button>
       
      </div>
    </div>
  )
}

export default Header
