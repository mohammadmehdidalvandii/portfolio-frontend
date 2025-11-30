import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React from 'react'

interface EditProjectProps {
    handlerCancelEdit:React.MouseEventHandler
}

const EditProject:React.FC<EditProjectProps> = ({handlerCancelEdit})=>{
  return (
        <form action="" className='space-y-4 border p-4 border-slate-400 rounded'>
        <div>
            <Label>Title</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Description</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Technologies(comma-separated)</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>Image File</Label>
            <Input type='file'/>
        </div>
        <div>
            <Label>Live URL (optional)</Label>
            <Input type='text'/>
        </div>
        <div>
            <Label>GitHub URL (optional)</Label>
            <Input/>
        </div>
        <div className="flex gap-4">
            <button className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerCancelEdit}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditProject