import { Cart } from '@components/ui/cart'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Github, Linkedin, Mail} from 'lucide-react'
import { HeroProps } from '../../../../types/hero';

const Hero:React.FC = () =>{
    const [hero , setHero] = useState<HeroProps>();


    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch('http://localhost:3000/api/hero');
            if(res.ok){
                const data = await res.json()
                setHero(data.data[0])
            }
        };
        fetchData();
    },[])


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-ping"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/30 rounded-full filter blur-3xl animate-pulse delay-700"></div>
            </div>
        </div>
                <div className="relative z-10 max-w-4xl w-full">
                    <Cart className='p-12 text-center'>
                        <img src={hero?.image || "/assets/user.png"} alt="user" className='block mx-auto mb-8 rounded-full w-[250px] h-[250px]' />
                        <h1 className="text-4xl md:text-5xl font-InterBlack font-black mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {hero?.name}
                        </h1>
                        <h2 className="text-2xl  md:text-3xl text-slate-300 mb-6 ">{hero?.title}</h2>
                        <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                            {hero?.bio}
                        </p>
                        <div className="flex justify-center gap-6">
                            <Link to={`${hero?.email}`} className='glass_btn p-4 hover:scale-110 transition-transform' 
                            target='_blank'
                            >
                            <Mail className='w-6 h-6'/>
                            </Link>
                            <Link to={`${hero?.github}`} className='glass_btn p-4 hover:scale-110 transition-transform' 
                            target='_blank'
                            >
                            <Github className='w-6 h-6'/>
                            </Link>
                            <Link to={`${hero?.linkedin}`}className='glass_btn p-4 hover:scale-110 transition-transform' 
                            target='_blank'
                            >
                            <Linkedin className='w-6 h-6'/>
                            </Link>
                        </div>   
                    </Cart>
                </div>
    </section>
  )
}

export default Hero