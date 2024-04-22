import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import SearchForm from './components/SearchForm'
import Search from './pages/Search'

function App() {
 

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar/>
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/products/:id/info' element={<Info/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/company' element={<Navigate to='/about'/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
