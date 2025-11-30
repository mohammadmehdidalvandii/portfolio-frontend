import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React from 'react'

interface AddSkillProps {
    handlerAddSkillCancel:React.MouseEventHandler
}

const AddSkill:React.FC<AddSkillProps> =({handlerAddSkillCancel})=>{
  return (
    <form action="#" className="space-y-4 border p-4 border-slate-400 rounded">
        <div>
            <Label>Skill Name</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Category</Label>
            <select className='w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'>
                <option value="">Frontend</option>
                <option value="">Backend</option>
                <option value="">Database</option>
                <option value="">Tools&Devops</option>
            </select>
        </div>
                <div className="flex gap-4">
            <button className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerAddSkillCancel}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddSkill