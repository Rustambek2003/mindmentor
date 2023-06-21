import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from '../Form/Form';
import styles from '../../styles/Modal.module.css'
import { Hidden } from '@mui/material';
import { IoClose } from 'react-icons/io5';

const style = {
  width:800,
  '@media(max-width: 812px)' : {
    width: '100%'
  },
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  borderRadius:8,
  p: 4,
  '@media(max-width: 333px)' : {
    p:1,
  },

};




const Modall = ({onCloseModal}:{onCloseModal:()=>void}) => {
 const open=true
  return (
    <>
        <Modal open={open}
        sx={{
          overflowY:"scroll"
        }}
      >
        <Box sx={style}>
          <IoClose onClick={onCloseModal} style={{fontSize:"27px",marginTop:"-20px"}}/>
          <Form/>
        </Box>
      </Modal>
    
    </>
  )
}
export default Modall
