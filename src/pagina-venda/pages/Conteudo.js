import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { Typography } from '@material-ui/core'
import ConteudoTexto from '../assets/ConteudoTexto'
import Pulse from '../components/pulse'

function Conteudo() {
  return (
    <div className='container'>
      <Card>
        <CardHeader>
          <div className='d-flex justify-content-between'>
            <Typography variant='h2' sx={{ fonSize: '35px' }}>
              Sibutramin
            </Typography>

            <Pulse />
          </div>
        </CardHeader>
        <CardBody>
          <div
            className='d-flex justify-content-center'
            style={{ width: '100%' }}
          >
            <img
              src={`https://eletivafis.com.br/storage/2021/02/sibutramin_efeito.png`}
              alt='sibutramin emagrecedor'
              title='Sibutramin Emagrecedor'
              style={{ width: '380px' }}
            />
          </div>
          <ConteudoTexto />
        </CardBody>
      </Card>
    </div>
  )
}

export default Conteudo
