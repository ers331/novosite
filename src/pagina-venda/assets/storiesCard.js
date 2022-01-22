import React from 'react'
import { DepoimentoPage2 } from '../pages/Depoimento2'
import { DepoimentoPage3 } from '../pages/Depoimento3'
import { DepoimentoPage4 } from '../pages/Depoimento4'
import { DepoimentoPage } from '../pages/DepoimentosPage'

export function StoreiesDepoimento() {
  return (
    <div className='d-flex'>
      <DepoimentoPage />
      <DepoimentoPage2 />
      <DepoimentoPage3 />
      <DepoimentoPage4 />
    </div>
  )
}
