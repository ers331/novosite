import {
  FormGroup,
  Tooltip,
  Typography,
  TextField,
  InputAdornment,
} from '@material-ui/core'
import {
  AccountCircleOutlined,
  Email,
  Facebook,
  Instagram,
  Twitter,
  WhatsApp,
  YouTube,
} from '@material-ui/icons'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { StoreiesDepoimento } from '../assets/storiesCard'
import { TopnavBar } from './TopnavBar'

function Contato() {
  return (
    <>
      <TopnavBar />
      <h2 className='p-4'>Depoimentos Sibutramin Emagrecedor</h2>
      <div className='storeisdp mb-5'>
        <StoreiesDepoimento />
      </div>
      <div className='container'>
        <FormGroup>
          <Card>
            <CardHeader>
              <div className='d-flex justify-content-between'>
                <Typography variant='h2' sx={{ fonSize: '35px' }}>
                  Contato
                </Typography>
              </div>
            </CardHeader>
            <CardBody>
              <Typography variant='body2' sx={{ fontSize: 20 }}>
                Está em duvida sobre Sibutramin Emagrecedor por favor entra em
                contato com nosco atraves das redes socias ou mesmo manda
                mensagem.
              </Typography>
              <Typography variant='h4' sx={{ mb: 1, mt: 5 }}>
                Redes Socias
              </Typography>
              <FormGroup
                row
                sx={{
                  maxWidth: '1136px',
                  mb: 5,
                  justifyContent: 'space-around',
                }}
              >
                <Tooltip title='WhatsApp'>
                  <WhatsApp
                    sx={{ fontSize: 50, cursor: 'pointer' }}
                    color='success'
                  />
                </Tooltip>
                <Tooltip title='Instagram'>
                  <Instagram
                    sx={{ fontSize: 50, cursor: 'pointer' }}
                    color='error'
                  />
                </Tooltip>
                <Tooltip title='Facebook'>
                  <Facebook
                    sx={{ fontSize: 50, cursor: 'pointer' }}
                    color='primary'
                  />
                </Tooltip>
                <Tooltip title='Youtube'>
                  <YouTube
                    sx={{ fontSize: 50, cursor: 'pointer' }}
                    color='error'
                  />
                </Tooltip>
                <Tooltip title='Twitter'>
                  <Twitter
                    sx={{ fontSize: 50, cursor: 'pointer' }}
                    color='primary'
                  />
                </Tooltip>
              </FormGroup>
              <hr />
              <div style={{ marginTop: '16px', maxWidth: '100%' }}>
                <FormGroup row sx={{ justifyContent: 'space-between' }}>
                  <div className='d-flex' style={{ flexDirection: 'column' }}>
                    <label>Nome</label>
                    <TextField
                      variant='outlined'
                      placeholder='Seu nome'
                      size='medium'
                      sx={{ width: '250' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountCircleOutlined />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className='d-flex' style={{ flexDirection: 'column' }}>
                    <label>WhatsApp</label>
                    <TextField
                      variant='outlined'
                      placeholder='(99)99999999'
                      size='medium'
                      sx={{ width: '250' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <WhatsApp />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className='d-flex' style={{ flexDirection: 'column' }}>
                    <label>Email</label>
                    <TextField
                      variant='outlined'
                      placeholder='Seu Email'
                      size='medium'
                      sx={{ width: '250' }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </FormGroup>
              </div>
              <div className='mt-5 d-flex flex-column'>
                <label>Assunto</label>

                <textarea rows={5}></textarea>
              </div>
              <div className='mt-5' style={{ width: '100%' }}>
                <button
                  className='btn btn-lage btn-block btn-primary'
                  type='submit'
                  style={{ width: '100%' }}
                >
                  Enviar
                </button>
              </div>
            </CardBody>
          </Card>
        </FormGroup>
      </div>

      <footer className='footer d-flex '>
        <div>
          <a href='/'>Sibutramin Emagrecedor</a> {new Date().getFullYear()} - ©
          Todos os direitos reservados
        </div>
        <div className='socialIcon'>
          <Tooltip arrow title='Twitter'>
            <Twitter sx={{ cursor: 'pointer' }} />
          </Tooltip>
          <Tooltip arrow title='Facebook'>
            <Facebook sx={{ cursor: 'pointer' }} />
          </Tooltip>
          <Tooltip arrow title='Instagram'>
            <Instagram sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </div>
      </footer>
    </>
  )
}

export default Contato
