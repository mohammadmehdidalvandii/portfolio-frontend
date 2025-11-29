import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React from 'react'

const HeroEditor:React.FC = ()=>{
  return (
        <form action="#" className='space-y-4'>
            <div>
                <Label>Name</Label> 
                <Input type='text'/>
            </div>
            <div>
                <Label>Title</Label> 
                <Input type='text'/>
            </div>
            <div>
                <Label>Bio</Label> 
                <textarea rows={4}
                className='w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'
                ></textarea>
            </div>
            <div>
                <Label>Email Link</Label> 
                <Input type='email'/>
            </div>
            <div>
                <Label>GitHub URL</Label> 
                <Input type='url'/>
            </div>
            <div>
                <Label>Linkedin URL</Label> 
                <Input type='url'/>
            </div>
            <div>
                <Label>Image </Label> 
                <Input type='file'/>
            </div>
            <button type='submit' className='admin_btn'>Save Change</button>
        </form>
  )
}

export default HeroEditor