import { Cart } from '@components/ui/cart'
import { Input } from '@components/ui/Input'
import { Lock } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin:React.FC = ()=>{
    const navigate = useNavigate()
    const [errorMessage , setErrorMessage] = useState<string>('')
    const [formData , setFormData] = useState({
        email:"",
        password:""
    });

    const handlerLoginAdmin:React.FormEventHandler = async (e)=>{
        e.preventDefault();

        const res = await fetch('http://localhost:3000/api/auth/login',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData),
        });

        if(res.status === 400 || res.status === 401){
            setErrorMessage('Password or Email is not valid')
            setTimeout(()=>{
                setErrorMessage('')
            }, 2500)
        }

        if(res.status === 200){
            const data = await res.json();
            localStorage.setItem('token', data?.data?.token);
            navigate('/Admin')
            alert(data.message)
        }
        
    }

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
        <Cart className='p-8 max-w-md w-full'>
            <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-linear-to-bt from-blue-500 to-purple-500 items-center justify-center">
                    <Lock className='w-8 h-8 text-white'/>
                </div>
            </div>
            <h2 className='text-3xl font-bold mb-2 text-center text-white'>Admin Panel</h2>
            <p className="text-slate-400 text-center mb-6">Enter Email and Password to access the admin panel</p>
            <form action="#" className="space-y-4" onSubmit={handlerLoginAdmin}>
                <div>
                    <Input type='email' placeholder='Email@gmail.com' 
                    value={formData.email}
                    onChange={(e)=>setFormData({...formData , email:e.target.value})}
                    />
                </div>
                <div>
                    <Input type='password' placeholder='***********' 
                    value={formData.password}
                    onChange={(e)=>setFormData({...formData , password:e.target.value})}
                    />
                </div>
                    <p className="mt-2 text-red-400 text-sm">{errorMessage}</p>  
                <button type='submit'
                className='w-full py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-InterBold font-semibold rounded-lg hover:opacity-90 transition-opacity cursor-pointer'
                >
                    Login
                </button>
            </form>
        </Cart>
    </div>
  )
}

export default Signin