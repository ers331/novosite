import React, { useState } from 'react'
import '../style/index.css'

import sibutramin1 from '../img/sibutramin1.png'
import { Modal, Box, Typography, Button } from '@material-ui/core'
import { CreditCard } from '@material-ui/icons'

export function DepoimentoPage() {
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
          backgroundImage: `url(${sibutramin1})`,
        }}
        onClick={handleOpen}
      >
        <h4
          className='text-center'
          style={{ color: '#fff', textTransform: 'uppercase' }}
        >
          Adriana Godói
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
            src={`https://sibutramin.com.br/wp-content/uploads/2020/09/depo_sibutramina2-1.jpg`}
            alt='sibutramin emagrecedor'
            title='sibutramin'
            style={{ width: '300px', marginLeft: '25%', marginBottom: '8%' }}
          />
          <div className='d-flex'>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Nome: Adriana Godói
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2, pl: 2 }}>
              Ide: 29 anos
            </Typography>
          </div>
          <Typography variant='body1' sx={{ mb: 5 }}>
            Nada melhor que poder vestir a roupa que quiser sem se sentir feia
            com tudo apertando e saindo do lugar, o sibutramin me fez muito bem
            perdi cerca de 12kg. Nunca em minha vida esperava o resultado tão
            incrível em tão pouco tempo.
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
