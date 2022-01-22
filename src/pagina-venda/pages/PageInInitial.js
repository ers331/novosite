import React from 'react'
import { StoreiesDepoimento } from '../assets/storiesCard'
import Conteudo from './Conteudo'

export function PageInitial() {
  return (
    <>
      <h2 className='p-4'>Depoimentos Sibutramin Emagrecedor</h2>
      <div className='storeisdp mb-5'>
        <StoreiesDepoimento />
      </div>

      <Conteudo />
    </>
  )
}
