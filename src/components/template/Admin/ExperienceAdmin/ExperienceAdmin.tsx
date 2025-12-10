import { Edit2, Plus, Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import AddExperience from './AddExperience';
import EditExperience from './EditExperience';
import { ExperienceProps } from '../../../../types/experience';

const ExperienceAdmin:React.FC = ()=>{  
    const [isAddExperience , setIsExperience] = useState(false);
    const [isEditExperience , setIsEditExperience] = useState(false);
    const [experience , setExperience] = useState<ExperienceProps[]>([]);
    const [editExperience , setEditExperience] = useState<ExperienceProps>();

        useEffect(()=>{
            const fetchData = async()=>{
                const res = await fetch('http://localhost:3000/api/experience');
                if(res.ok){
                    const data = await res.json()
                    setExperience(data.data)
                }
            };
            fetchData();
        },[])

  return (
    <div className="space-y-4">
        {!isAddExperience && (
        <button className="admin_btn flex justify-center items-center gap-2"
            onClick={()=>setIsExperience(true)}
        >
            <Plus className='w-5 h-5'/>
            Add Experience
        </button>
        )}
        {isAddExperience && (<AddExperience
        handlerCancelExp={()=>setIsExperience(false)}
        />)}
        <div className="space-y-3">
            {!isEditExperience && (
                experience.map((exp)=>(
                    <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700" key={exp._id}>
                        <div className="flex justify-between items-center">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-InterBold font-bold text-white text-xl">{exp.jobTitle}</h3>
                                </div>
                                <p className="text-lg text-blue-400 mt-1">{exp.company}</p>
                                <p className="text-lg text-slate-400 mt-1">{exp.period}</p>
                                <p className="text-lg text-white mt-1">{exp.description}</p>
                            </div>
                                <div className="flex gap-2 ml-4">
                                <button className="p-2 text-blue-400 hover:bg-slate-700 rounded cursor-pointer"
                                onClick={()=>{
                                    setEditExperience(exp)
                                    setIsEditExperience(true)
                                }}
                                >
                                    <Edit2 className='w-4 h-4'/>
                                </button>
                                <button className="p-2 text-red-400 hover:bg-slate-700 rounded cursor-pointer">
                                    <Trash2 className='w-4 h-4'/>
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            )}
            {isEditExperience && (<EditExperience
            experience={editExperience!}
            handlerCancelEditExp={()=>setIsEditExperience(false)}/>)}

        </div>
    </div>
  )
}

export default ExperienceAdmin