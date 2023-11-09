import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Signup from '../src/components/Signup';
import AboutUs from '../src/components/AboutUs';
import ContactUs from '../src/components/ContactUs';
import HelpCentre from '../src/components/HelpCentre';
import SellOn from '../src/components/SellOn';
import Payment from './components/home_comp/Payment';
import AdminLogin from "../src/components/admin/Login";
import AdminSignup from "../src/components/admin/Signup";
import AdminDashboard from "../src/components/admin/Dashboard";
import Insights from '../src/components/admin/ViewInsights';
import SellProducts from '../src/components/admin/SellProducts';
import AdminPage from '../src/components/admin/AdminPage';
import Cart from '../src/components/home_comp/Cart';
//import Navigation from '../src/components/Navigation';

import './App.css';

const App = () => {
  return (
    <div>
      {/* /*<Navigation /> */} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-centre" element={<HelpCentre />} />
        <Route path="sell-on-electropulse" element={<SellOn/>}/>
        <Route path="/payment" element={<Payment/>} />
        <Route path='/admin-auth-login' element={<AdminLogin/>}/>
        <Route path='/admin-auth-signup' element={<AdminSignup/>}/>
        <Route path='/dashboard'element={<AdminDashboard/>}/>
        <Route path='/insights' element={<Insights/>}/>
        <Route path='/sell-products' element={<SellProducts/>}/>
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
