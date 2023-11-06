import React from 'react'
import Header from './Components/Header/Header';
import SingleProduct from './Components/Product/Product'
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PageTransition from './Pagetransition/Pagetransition';
import Productlist from './Components/Productlist/Productlist';
const App = () => {
  return (
    <>
      <Router>   
        <Header />
        <Routes>
        <Route path='/' element={<PageTransition><Home/></PageTransition>}/>
        <Route path='/:id' element={<PageTransition><SingleProduct/></PageTransition> }/>
        <Route path='/shop' element={<PageTransition><Productlist/></PageTransition>}/>
      </Routes>
      <Footer />
      </Router>  
    </>
  )
}

export default App