import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'
import ftadabtiv from '../../pages/images/foto.png'
import { TfiClose } from 'react-icons/tfi';
import Image from 'next/image'
import vector from '../../pages/images/logotip.png'

const Adabtivka = ({onClose}:{onClose:()=>void}) => {
    return (
        <div> 
            <div className={styles.block_adaptivka}>
                <div className={styles.block_adaptivka_foto}>
                    <Image style={{ marginLeft: "0", width: "140px", height: "30px" }} src={vector}
                        alt="foto" />
                    < TfiClose style={{ marginRight: "0" }} onClick={onClose}/>
                </div>
                <div>
                    <Image style={{width:190}} src={ftadabtiv}
                        alt="foto" />

                </div>
                <div className={styles.block_adabtivka_text}>
                    <h3>Программы</h3>
                    <h3>Партнеры</h3>
                    <h3>Найти ментора</h3>
                    <h3>Войти</h3>
                </div>
            </div>
        </div>
    )
}

export default Adabtivka
