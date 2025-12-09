import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import { SkillProps } from '../../../../types/skills';
import React, { useState } from 'react'

interface EditSkillProps {
    handlerEditSkillCancel:React.MouseEventHandler,
    skill:SkillProps
}

const EditSkill:React.FC<EditSkillProps> = ({handlerEditSkillCancel , skill})=>{
    const [formData , setFormData] = useState({
        name:skill.name || '',
        category:skill.category || '',
    })

    const handlerUpdateSkill:React.FormEventHandler = async (e)=>{
        e.preventDefault();
        if(formData.category === '1'){
            alert('category is not valid ❌')
        }

        const res = await fetch(`http://localhost:3000/api/skills/update/${skill._id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData),
        });

        if(res.ok){
            alert('Updated skills successfully ✅')
        }
    }


  return (
    <form action="#" className="space-y-4 border p-4 border-slate-400 rounded" onSubmit={handlerUpdateSkill}>
        <div>
            <Label>Skill Name</Label>
            <Input type='text'
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
            />
        </div>
        <div>
            <Label>Category</Label>
            <select className='w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'
                value={formData.category}
                onChange={(e)=>setFormData({...formData, category:e.target.value})}
            >
                <option value="1">Category</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
                <option value="ToolDevops">Tools&Devops</option>
                <option value="NetworkSecurity">Tools&Devops</option>
            </select>
        </div>
                <div className="flex gap-4">
            <button type='submit' className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerEditSkillCancel}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditSkill