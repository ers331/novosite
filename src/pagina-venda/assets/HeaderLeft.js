import React from 'react'
import sibutramin from '../img/sibutramin.png'
import sibutraminlogo from '../img/sibutraminlogo.svg'

export function HeaderLeaft() {
  return (
    <>
      <div className='logo'>
        <img
          src={sibutramin}
          alt='Sibutramin Emagrecedor'
          title='Sibutramin Emagrecedor'
        />
      </div>
      <div className='logo2'>
        <img
          src={sibutraminlogo}
          title='Sibutramin Emagrecedor'
          alt='Sibutramin Emagrecer'
        />
      </div>
    </>
  )
}
