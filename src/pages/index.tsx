import React, { useState } from "react"
import styles from "../styles/Home.module.css"
import Image from 'next/image'
import fotoPeople from './images/foto2.png'
import vector from './images/logotip.png'
import { AiFillMessage } from 'react-icons/ai';
import { FaBlenderPhone } from 'react-icons/fa';
import { IoRocket } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineMessage } from 'react-icons/ai';
import Adabtivka from "@/widgets/adabtiv/Adabtivka";
import Modall from "@/widgets/modal/modal";

export default function Home() {
  const [open, setOpen] = useState(false)
  const [Modal, setModal] = useState(false)


  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const clickOpen = () => {
    setOpen(true)
  }
  const clickClose = () => {
    setOpen(false)
  }
  const mystyle = {
    left: `${open ? "0" : "150%"}`,
    transition: "all 0.3s ease",
  }
  console.log(mystyle);


  return (
    <>
      <div className={styles.home_content}>
        <div className={styles.home_cotegorie}>
          <div className={styles.block_logo}>
            <Image src={vector}
              alt="foto" />

          </div>

          <div className={styles.block_way}>
            <h3>Программы</h3>
            <h3>Партнеры</h3>
            <div>
              <button><h3 className={styles.block_way_h3}>Найти ментора</h3></button>
            </div>
            <h3>Войти</h3>
          </div>
          <div className={styles.block_burger_logo}>

            <RxHamburgerMenu onClick={clickOpen} style={{ fontSize: "25px" }} />
          </div>



        </div>
        <div className={styles.home_text}>
          <h1>Найди своего ментора</h1>
          <p>Только в мае — успейте купить популярные
            программы с менторами по максимальной скидке</p>
          <button className={styles.block_button_home}>
            <h5>Записаться к ментору</h5>
          </button>
        </div>
      </div>
      {open ?

        <div style={mystyle}>
          <Adabtivka onClose={clickClose} />
        </div>
        : null}

      <div className={styles.block_second}>
        <div className={styles.block_card}>
          <div className={styles.card_text}>
            <h2>Получи новые навыки по направлениям 1 на 1 с ментором:</h2>
          </div>
          <div className={styles.card_buttons}>
            <button><h3>JavaScript</h3></button>
            <button><h3>Python</h3></button>
            <button className={styles.card_buttons_button}><h3>Projeсt Management</h3></button>
            <button><h3>Все направления</h3></button>
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.block_big_card}>
        <div>
          {/* <h2>Занимайся с IT-специалистами в любое время суток</h2> */}
        </div>
        <div className={styles.in_card}>
          <div className={styles.in_card_text}>
            <h3>Python</h3>
            <span>
              <div>
              <AiFillMessage style={{ fontSize: "30px" }} />
              <h4>Чат</h4>
              </div>
              <div>

              <FaBlenderPhone style={{ fontSize: "30px", marginLeft: "30px" }} />
              <h4>6 х Созвоны</h4>
              </div>
              <div>

              <IoRocket style={{ fontSize: "30px", color: " #F27709", marginLeft: "30px" }} />
              <h4 className={styles.card_h4_in}>5 мест на стажировку</h4>
              </div>
            </span>


            <p>На Python пишут веб-приложения и нейросети,проводят
              научные вычисления и автоматизируют процессы. Язык
              просто выучить, даже если вы никогда не программировали.
              На курсе вы создадите Telegram бота, полноценный магазин
              и аналог популярной соцсети для портфолио, а Центр
              карьеры поможет найти работу Python разработчиком.</p>


            <div className={styles.div_display}>
              <h3 className={styles.in_card_text_h3}>100$/месяц</h3>
              <button><h6 className={styles.in_card_text_h}>ПОДРОБНЕЕ</h6></button>

            </div>
          </div>
          <div className={styles.in_card_profil}>
            <div className={styles.card_profil_person}>
              <div className={styles.card_name}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaElm88FWSTVXs5cN5McfaUWfHyA3lhbLQ5Q&usqp=CAU" alt="" />
                <span>
                  <h5>Bektur Aitbaev</h5>
                  <h6>Android Developer</h6>
                </span>
              </div>
              <div className={styles.card_name_company}>
                <li>

                  <AiOutlineMessage style={{ fontSize: "30px" }} />
                </li>
                <p>+5 лет</p>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdPzl_JUlvQGFyUihTgjTrOReyvLqb-onNSSiMqubxMkj7nDFy5BkCMsgwW9KveDsp00&usqp=CAU" alt="" />
                  <p>Банк “Бай Тушум”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://e7.pngegg.com/pngimages/182/86/png-clipart-beeline-ojsc-vimpelcom-kaspiytelekom-mts-logo-lao-miscellaneous-orange-thumbnail.png" alt="" />
                  <p>Банк “Beeline”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://icons-for-free.com/iconfiles/png/512/logo+microsoft+microsoft+logo+technology+windows+icon-1320167831167856453.png" alt="" />
                  <p>"Microsoft"</p>
                </div>
              </div>
            </div>
            <div className={styles.card_profil_person}>
              <div className={styles.card_name}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaElm88FWSTVXs5cN5McfaUWfHyA3lhbLQ5Q&usqp=CAU" alt="" />
                <span>
                  <h5>Bektur Aitbaev</h5>
                  <h6>Android Developer</h6>
                </span>
              </div>
              <div className={styles.card_name_company}>
                <li>

                  <AiOutlineMessage style={{ fontSize: "30px" }} />
                </li>
                <p>+5 лет</p>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdPzl_JUlvQGFyUihTgjTrOReyvLqb-onNSSiMqubxMkj7nDFy5BkCMsgwW9KveDsp00&usqp=CAU" alt="" />
                  <p>Банк “Бай Тушум”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://e7.pngegg.com/pngimages/182/86/png-clipart-beeline-ojsc-vimpelcom-kaspiytelekom-mts-logo-lao-miscellaneous-orange-thumbnail.png" alt="" />
                  <p>Банк “Beeline”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://icons-for-free.com/iconfiles/png/512/logo+microsoft+microsoft+logo+technology+windows+icon-1320167831167856453.png" alt="" />
                  <p>"Microsoft"</p>
                </div>
              </div>
            </div>
            <div className={styles.card_profil_person}>
              <div className={styles.card_name}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaElm88FWSTVXs5cN5McfaUWfHyA3lhbLQ5Q&usqp=CAU" alt="" />
                <span>
                  <h5>Bektur Aitbaev</h5>
                  <h6>Android Developer</h6>
                </span>
              </div>
              <div className={styles.card_name_company}>
                <li>

                  <AiOutlineMessage style={{ fontSize: "30px" }} />
                </li>
                <p>+5 лет</p>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdPzl_JUlvQGFyUihTgjTrOReyvLqb-onNSSiMqubxMkj7nDFy5BkCMsgwW9KveDsp00&usqp=CAU" alt="" />
                  <p>Банк “Бай Тушум”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://e7.pngegg.com/pngimages/182/86/png-clipart-beeline-ojsc-vimpelcom-kaspiytelekom-mts-logo-lao-miscellaneous-orange-thumbnail.png" alt="" />
                  <p>Банк “Beeline”</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>

                  <img src="https://icons-for-free.com/iconfiles/png/512/logo+microsoft+microsoft+logo+technology+windows+icon-1320167831167856453.png" alt="" />
                  <p>"Microsoft"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button>Еще 12 программ</button>
        </div>
      </div>
      <div className={styles.block_card_modalka}>
        <div className={styles.modal_cart}>
          <h1>30 бесплатных минут!</h1>
          <p>Получи полчаса бесплатных минут, чтобы познакомиться
            с наставником и обсудить график и план занятий.</p>
          <button onClick={openModal}><h3>Записаться к ментору</h3></button>
        </div>
      </div>
      <div>
        {Modal ?

          <Modall onCloseModal={closeModal} />

          : null}
      </div>
      <div className={styles.block_partnors}>
        <div className={styles.partnors_inBlock}>
          <div className={styles.content_text}>
            <h1>Хочешь стать партнером?</h1>
            <h4>Стань частью нашей команды и мы покажем тебе красивую жизнь, не пожалеешь</h4>
            <div>
              <button>Записаться к ментору</button>
            </div>
                                          
          </div>
          <div className={styles.block_foto}>
          <Image src={fotoPeople}
              alt="foto" />
          </div>

        </div>
      </div>


    </>
  )

}