import React, { useState } from 'react'
import { IconButton, Typography } from '@material-ui/core'
import { MenuOpen } from '@material-ui/icons'

export default function Indece() {
  const [indice, setIndice] = useState(false)
  console.log(indice)

  const handleOpen = () => {
    setIndice(true)
  }

  const handleClose = () => {
    setIndice(false)
  }

  return (
    <div>
      {!indice ? (
        <div
          className='d-flex'
          style={{
            width: '120px',
            border: '1px solid black',
            paddingLeft: '20px',
          }}
        >
          <p className='pt-3'>Indice</p>
          <IconButton
            onClick={() => {
              handleOpen()
            }}
          >
            <MenuOpen />
          </IconButton>
        </div>
      ) : (
        <>
          <div
            style={{
              width: '480px',
              border: '1px solid black',
              paddingLeft: '5px',
            }}
          >
            <div className='d-flex justify-content-between'>
              <p className='pt-3'>Indice</p>
              <IconButton
                onClick={() => {
                  handleClose()
                }}
              >
                <MenuOpen />
              </IconButton>
            </div>
            <Typography variant='h6' className='indice-content'>
              1º O que é Sibutramin Emagrecedor?
            </Typography>
            <Typography variant='h6' className='indice-content'>
              2º O produto é aprovado pela ANVISA?
            </Typography>
            <Typography variant='h6' className='indice-content'>
              3º Sibutramin Emagrecedor funciona?
            </Typography>
            <Typography variant='h6' className='indice-content'>
              4º Depoimentos
            </Typography>
            <Typography variant='h6' className='indice-content'>
              5º Benefícios
            </Typography>
            <Typography variant='h6' className='indice-content'>
              6º Sibutramin Emagrecedor no Mercado Livre?
            </Typography>
            <Typography variant='h6' className='indice-content'>
              7º Sibutramin Emagrecedor tem efeitos colaterais?
            </Typography>
            <Typography variant='h6' className='indice-content'>
              8º Onde Comprar?
            </Typography>
          </div>
        </>
      )}
    </div>
  )
}
