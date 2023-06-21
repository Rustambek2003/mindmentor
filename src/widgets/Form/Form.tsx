import React from 'react'
import styles from '../../styles/Form.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Form = () => {

  return (
    <div className={styles.form}>
      <h1>Оставить заявку</h1>
      <div className={styles.form_content}>
        <h2>Имя</h2>
        <input type="text" placeholder="Введите свое имя" />
      </div>
      <div className={styles.form_content}>
        <h2>Номер телефона</h2>
        <input type="text" placeholder="+996 (***) ** **" />
      </div>
      <div className={styles.radio_block}>
        <h2>Выберите способ связи</h2>
        <FormControl style={{width:"100%"}}>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Telegram" />
            <FormControlLabel value="male" control={<Radio />} label="WhatsApp" />
            <FormControlLabel value="other" control={<Radio />} label="Звонок по телефону" />

          </RadioGroup>
        </FormControl>
        <input type="text" placeholder="@nickname" />
      </div>
      <div className={styles.radio}>
        <h2>Ваш уровень знаний</h2>
        <FormControl style={{width:"100%"}}>

          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Закончил(-а) курсы" />
            <FormControlLabel value="male" control={<Radio />} label="Закончил(-а) университет
" />
            <FormControlLabel value="other" control={<Radio />} label="Я новичок" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className={styles.block_consulting}>
        <h2>Что вы хотите получить от консультации?</h2>
        <input type="text"  placeholder='Какой ваш текущий уровень знаний и чего вы хотите достичь?'/>
      </div>
      <button><h3>Записаться к ментору</h3></button>

    </div>
  )
}

export default Form
