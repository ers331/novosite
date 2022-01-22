import React from 'react'
import { HeaderLeaft } from '../assets/HeaderLeft'
import { HeaderRigth } from '../assets/headerRigth'
import '../style/index.css'

export function TopnavBar() {
  return (
    <>
      <div className='d-flex position-static justify-content-between header'>
        <HeaderLeaft />
        <HeaderRigth />
      </div>
    </>
  )
}
