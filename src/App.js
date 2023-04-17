import React from 'react'
import Home from './components/Home';
import Product from './components/Product';
import Admin from './components/Admin';
import Login from './components/Login';
import Registration from './components/Registration'
import Newproduct from './components/Newproduct';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Product"} element={<Product />} /> {/* Default */}
          <Route path={"/Admin"} element={<Admin />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/Registration"} element={<Registration />} />
          <Route path={"/Newproduct"} element={<Newproduct />} />
          <Route path={"/Update/:id"} element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App