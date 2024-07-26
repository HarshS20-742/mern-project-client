import React from 'react'
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import { FaUserSecret } from "react-icons/fa6";
import { RiContactsBook2Fill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useAuth } from '../../store/auth';
function AdminLayout() {
    const {userData, isLoading} = useAuth();
    console.log('admin-layout', userData);

    if(isLoading){
        return <h1>Loading...</h1>
    }

    if(!userData.isAdmin){
        return <Navigate to='/' />
    }
  return (
   <>
   <header>
    <div className="container">
        <nav>
            <ul>
                <li> <NavLink to='/admin/users'> <FaUserSecret />user</NavLink></li>
                <li><NavLink to='/admin/contacts'><RiContactsBook2Fill />Contact</NavLink></li>
                <li><NavLink to='/services'><GrServices/>service</NavLink></li>
                
                <li> <NavLink to='/'><FaHome />Home</NavLink></li>
            </ul>
        </nav>
    </div>
   </header>
   <Outlet />
   </>
  )
}

export default AdminLayout;