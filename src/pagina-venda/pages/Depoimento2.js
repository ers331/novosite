import React, { useState } from 'react'
import '../style/index.css'

import sibutramin2 from '../img/sibutramin2.png'
import { Modal, Box, Typography, Button } from '@material-ui/core'
import { CreditCard } from '@material-ui/icons'

export function DepoimentoPage2() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => setOpen(false)
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '1px solid #cccc',
    p: 4,
  }

  return (
    <>
      <div
        className='storiesCard'
        style={{
          backgroundImage: `url(${sibutramin2})`,
        }}
        onClick={handleOpen}
      >
        <h4
          className='text-center'
          style={{ color: '#fff', textTransform: 'uppercase' }}
        >
          João Alfredo
        </h4>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
          ></Typography>
          <img
            src={`https://sibutramin.com.br/wp-content/uploads/2020/09/depo_sibutramina3-1.jpg`}
            alt='sibutramin emagrecedor'
            title='sibutramin'
            style={{ width: '300px', marginLeft: '25%', marginBottom: '8%' }}
          />
          <div className='d-flex'>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Nome: João Alfredo
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2, pl: 2 }}>
              Ide: 38 anos
            </Typography>
          </div>
          <Typography variant='body1' sx={{ mb: 5 }}>
            Tive ótimos resultados com o sibutramin, estou usando para auxiliar
            no meu emagrecimento, pois meu organismo é muito lento ele caiu do
            céu para me ajudar. Usava numero 50 e hoje uso 42. Eu Comprei um kit
          </Typography>
          <Button
            variant='contained'
            color='error'
            sx={{ width: 350, heigth: 120, ml: 15 }}
            className='pulse pulse-primary'
          >
            <CreditCard sx={{ mr: 2, fontSize: 45 }} /> Comrpar kit
          </Button>
        </Box>
      </Modal>
    </>
  )
}
