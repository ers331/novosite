import { Button } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import React from 'react'

export default function Pulse() {
  return (
    <>
      <Button
        variant='contained'
        color='error'
        className='logo'
        sx={{ width: 450, height: 75 }}
      >
        <ShoppingCart sx={{ fontSize: '60px', mr: 3 }} />
        Testar Sibutramin Agora!
      </Button>
    </>
  )
}
