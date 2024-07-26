import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {About} from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import { Navbar } from './components/NavBar';
import Error from './pages/Error';
import Footer from './components/Footer';
import { Logout } from './pages/LogOut';
import AdminLayout from './components/layouts/Admin-Layout';
import AdminUsers from './pages/Admin-Users';
import AdminContact from './pages/Admin-Contacts';
import AdminUpdateUser from './pages/Admin-Update';

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout/>} />
        <Route path='*' element={<Error />} />
        {/* creating admin routes for only admin access */}
        <Route path='/admin' element={<AdminLayout/>}>
        <Route path="/admin/users/:userId/edit" element={<AdminUpdateUser />} />
        <Route path='users' element={<AdminUsers />}  />
        <Route path='contacts' element={<AdminContact />}  />


        </Route>
      </Routes>
      <Footer />
    </BrowserRouter></>
  );
};

export default App;
