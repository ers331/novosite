import React, { useState } from 'react'
import '../style/index.css'

import sibutramin3 from '../img/sibutramin3.png'
import jj from '../img/jj.jpg'
import { Modal, Box, Typography, Button } from '@material-ui/core'
import { CreditCard } from '@material-ui/icons'

export function DepoimentoPage4() {
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
          backgroundImage: `url(${sibutramin3})`,
        }}
        onClick={handleOpen}
      >
        <h4
          className='text-center'
          style={{ color: '#fff', textTransform: 'uppercase' }}
        >
          João Ricardo
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
            src={jj}
            alt='sibutramin emagrecedor'
            title='sibutramin'
            style={{ width: '300px', marginLeft: '25%', marginBottom: '8%' }}
          />
          <div className='d-flex'>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Nome: João Ricardo
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2, pl: 2 }}>
              Ide: 31 anos
            </Typography>
          </div>
          <Typography variant='body1' sx={{ mb: 5 }}>
            EU sempre fui gordinho mas quando resolvi parar de fumar acabei
            engordando mais ainda. Então aderi ao estilo de vida sibutramin
            aliado à atividades físicas e o resultado foi 43kg eliminados. Minha
            barriga sumiu e junto ficou o excesso de pele que foi retirada com a
            abdominoplastia que fiz recentemente.
          </Typography>
          <Button
            variant='contained'
            color='error'
            sx={{ width: 350, heigth: 120, ml: 15 }}
            className='pulse pulse-primary'
          >
            <CreditCard sx={{ mr: 2, fontSize: 45 }} /> Eu quero Testar Hoje!
          </Button>
        </Box>
      </Modal>
    </>
  )
}
