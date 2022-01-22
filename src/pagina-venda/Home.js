import React from 'react'
import { TopnavBar } from './pages/TopnavBar'
import { formatDate } from '../utils/formatDate'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import { Tooltip } from '@material-ui/core'
import { PageInitial } from '../pagina-venda/pages/PageInInitial'

export function Home() {
  return (
    <>
      <div>
        <TopnavBar />
        <PageInitial />
        <footer className='footer d-flex '>
          <div>
            <a href='/'>Sibutramin Emagrecedor</a>
            {formatDate(new Date().toISOString())} - © Todos os direitos
            reservados
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
      </div>
    </>
  )
}
