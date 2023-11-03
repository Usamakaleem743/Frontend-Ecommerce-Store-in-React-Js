import React from 'react'
import Header from './Components/Header/Header';
import SingleProduct from './Components/Product/Product'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <>
      <Router>   
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<SingleProduct/>}/>
      </Routes>
      <Footer />
      </Router>  
    </>
  )
}

export default App