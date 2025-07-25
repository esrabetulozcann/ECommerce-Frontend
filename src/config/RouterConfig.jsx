import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetail from '../components/productDetail/ProductDetail';
import FavoritesPages from '../pages/FavoritesPages';
import Basket from '../pages/Basket';
import UserProfilePage from '../pages/UserProfilePage';
import Payment from '../pages/Payment';
import LoginRegisterPage from '../pages/LoginRegisterPage';
import SearchResults from '../components/header/SearchResult'; 


function RouterConfig() {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/product.details/:id' element = {<ProductDetail/>} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/favorites' element={<FavoritesPages />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<LoginRegisterPage />} />
        <Route path="/search" element={<SearchResults />} />


    </Routes>
  )
}

export default RouterConfig 