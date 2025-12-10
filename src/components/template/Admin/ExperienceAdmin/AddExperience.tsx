import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React, { useState } from 'react'

interface AddExperienceProps{
    handlerCancelExp:React.MouseEventHandler
}

const AddExperience:React.FC<AddExperienceProps> = ({handlerCancelExp})=>{
    const [formData , setFormData] = useState({
        jobTitle:'',
        company:"",
        period:"",
        description:""
    });

    const handlerAddNewExperience:React.FormEventHandler = async (e)=>{
        e.preventDefault();
        
        if(!formData.jobTitle || !formData.company || !formData.period || !formData.description){
            alert('All felids is required ❌')
        }

        const res = await fetch('http://localhost:3000/api/experience/create',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData),
        })
        console.log("res", res)
        if(res.ok){
            alert('New Experience added ✅')
        }

    }


  return (
    <form action="#" className="space-y-3 p-4 border border-slate-700 rounded" onSubmit={handlerAddNewExperience}>
        <div>
            <Label>Job Title</Label>
            <Input type='text'
                value={formData.jobTitle}
                onChange={(e)=>setFormData({...formData, jobTitle:e.target.value})}
            />
        </div>
        <div>
            <Label>Company</Label>
            <Input type='text'
                value={formData.company}
                onChange={(e)=>setFormData({...formData, company:e.target.value})}
            />
        </div>
        <div>
            <Label>period(e.g.,2020-2022)</Label>
            <Input type='text'
                value={formData.period}
                onChange={(e)=>setFormData({...formData , period:e.target.value})}
            />
        </div>
        <div>
            <Label>Description</Label>
            <textarea rows={4} className='w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'
                value={formData.description}
                onChange={(e)=>setFormData({...formData, description:e.target.value})}
            />
        </div>
        <div className="flex gap-4">
            <button type='submit'  className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerCancelExp}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddExperience