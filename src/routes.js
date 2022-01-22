import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home } from './pagina-venda/Home'
import Contato from './pagina-venda/pages/Contato'
import PoliticaPrivacidade from './pagina-venda/pages/PoliticaPrivacidade'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/politica-privacidade' element={<PoliticaPrivacidade />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas
