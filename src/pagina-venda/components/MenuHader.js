import React from 'react'
import { Tooltip } from '@material-ui/core'

function MenuHader() {
  return (
    <div>
      <Tooltip arrow title='Menu'>
        <div className='borderRadios'>
          <svg
            viewBox='0 0 44 44'
            width='25px'
            height='25px'
            className='a8c37x1j mt-3'
          >
            <circle cx='7' cy='7' r='6'></circle>
            <circle cx='22' cy='7' r='6'></circle>
            <circle cx='37' cy='7' r='6'></circle>
            <circle cx='7' cy='22' r='6'></circle>
            <circle cx='22' cy='22' r='6'></circle>
            <circle cx='37' cy='22' r='6'></circle>
            <circle cx='7' cy='37' r='6'></circle>
            <circle cx='22' cy='37' r='6'></circle>
            <circle cx='37' cy='37' r='6'></circle>
          </svg>
        </div>
      </Tooltip>
    </div>
  )
}

export default MenuHader
