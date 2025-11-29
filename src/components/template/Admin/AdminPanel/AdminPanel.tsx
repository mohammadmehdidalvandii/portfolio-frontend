import { Cart } from '@components/ui/cart'
import { Award, Briefcase, Code, Key, User, X } from 'lucide-react'
import React, { useState } from 'react'

const AdminPanel:React.FC = ()=>{
    const [activeTab , setActiveTab] = useState('hero');

    const tabs = [
        {id:'hero', label:'Hero Section' , icon:User},
        {id:'projects', label:'Projects' , icon:Briefcase},
        {id:'skills' , label:'Skills' , icon:Code},
        {id:'experience' , label:'Experience' , icon:Award},
        {id:'settings' , label:'Settings' , icon:Key},
    ]

  return (
    <section className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="min-h-screen py-8 px-6">
            <div className="max-w-4xl mx-auto">
                <Cart className='p-6'>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-3xl font-InterBold font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Admin Panel</h2>
                        <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                            <X className='w-6 h-6 text-slate-400'/>
                        </button>
                    </div>
                    <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                        {tabs.map((tab)=>(
                            <button
                            key={tab.id}
                            onClick={()=>setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-InterBold font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                                activeTab === tab.id 
                                ?'bg-linear-to-r from-blue-500 to-purple-500 text-white'
                                :'bg-slate-800/50 text-slate-400 hover:text-white'
                            }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="bg-slate-800/30 p-6 rounded-lg">
                        {activeTab === 'hero' && (<h1>tabs hero</h1>)}
                        {activeTab === 'projects' && (<h1>tabs projects</h1>)}
                        {activeTab === 'skills' && (<h1>tabs skills</h1>)}
                        {activeTab === 'experience' && (<h1>tabs experience</h1>)}
                        {activeTab === 'settings' && (<h1>tabs settings</h1>)}
                    </div>
                </Cart>
            </div>
        </div>
    </section>
  )
}

export default AdminPanel