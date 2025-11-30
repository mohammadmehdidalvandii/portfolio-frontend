import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React from 'react'

interface EditExperienceProps{
    handlerCancelEditExp:React.MouseEventHandler
}

const EditExperience:React.FC<EditExperienceProps> = ({handlerCancelEditExp})=>{
  return (
        <form action="#" className="space-y-3 p-4 border border-slate-700 rounded">
        <div>
            <Label>Job Title</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Company</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>period(e.g.,2020-2022)</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Description</Label>
            <textarea rows={4} className='w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'/>
        </div>
        <div className="flex gap-4">
            <button className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerCancelEditExp}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditExperience