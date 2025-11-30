import { Badge } from '@components/ui/Badge';
import { Edit2, Plus, Trash2 } from 'lucide-react'
import React, { lazy, useState } from 'react'
import EditProject from './EditProject';

const AddProject = lazy(()=>import('@components/template/Admin/Projects/AddProject'))



const Projects:React.FC = ()=>{
    const [isAddProject , setIsAddProject]= useState(false);
    const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-4">
        {!isAddProject && (
        <button className='admin_btn flex items-center justify-center font-InterBold font-b'
        onClick={()=>setIsAddProject(true)}
        >
            <Plus className='w-5 h-5'/>
            Add Project
        </button>
        )}
        {isAddProject && (<AddProject
        handlerCancelAddProject={()=>setIsAddProject(false)}
        />)}

        {!isEditing && (
        <div className="space-y-3">
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className="font-InterBold font-semibold text-lg text-white">E-Commerce Platform</h3>
                    <p className="text-sm text-slate-400 mt-1">Full-featured e-commerce platform with payment integration and admin dashboard</p>
                    <Badge variant='primary' className='w-fit mt-2'>Featured</Badge>
                </div>
                <div className="flex gap-2">
                    <button 
                    className='p-2 text-blue-400 hover:bg-slate-700 rounded cursor-pointer'
                    onClick={()=>setIsEditing(true)}
                    >
                        <Edit2 className='w-4 h-4'/>
                    </button>
                    <button
                    className='p-2 text-red-400 hover:bg-slate-700 rounded cursor-pointer'
                    >
                        <Trash2/>
                    </button>
                </div>
            </div>
            </div>
        </div>
        )}
        {isEditing && (<EditProject 
        handlerCancelEdit={()=>setIsEditing(false)}
        />)}
    </div>
  )
}

export default Projects