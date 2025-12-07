import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const AdminLayout:React.FC = ()=>{
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(()=>{
      if(!token){
        alert('Sign in to access')
        navigate('/Login');
      }
  },[token , navigate])


  return (
    <div className="min-h-screen">
        <Outlet/>
    </div>
  )
}

export default AdminLayout