import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import React, { useState } from 'react'


interface AddProjectProps {
    handlerCancelAddProject:React.MouseEventHandler
}

const AddProject:React.FC<AddProjectProps>= ({handlerCancelAddProject})=>{
    const [formData , setFormData] = useState({
        title:'',
        description:'',
        tech:'',
        image:'',
        live:'',
        github:'',
    });
    const [selectedFile , setSelectedFile] = useState<null  | File>(null);


    const handlerAddProject:React.FormEventHandler = async (e)=>{
        e.preventDefault();

        const fd = new FormData;
        fd.append('title', formData.title);
        fd.append('description', formData.description);
        fd.append('tech', formData.tech);
        fd.append('live', formData.live);
        fd.append('github', formData.github);

        if(selectedFile) fd.append('image', selectedFile);  

        const res = await fetch('http://localhost:3000/api/projects/create',{
            method:'POST',
            body:fd
        });

        if(res.ok){
            alert('Projected Add successfully');
            window.location.reload();
        }

    }


  return (
    <form action="#" className='space-y-4 border p-4 border-slate-400 rounded' onSubmit={handlerAddProject}>
        <div>
            <Label>Title</Label>
            <Input type='text'
                value={formData.title}
                onChange={(e)=>setFormData({...formData, title:e.target.value})}
            />
        </div>
        <div>
            <Label>Description</Label>
            <textarea rows={4} className='w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'
                value={formData.description}
                onChange={(e)=>setFormData({...formData, description:e.target.value})}
            />
        </div>
        <div>
            <Label>Technologies(comma-separated)</Label>
            <Input type='text'
                value={formData.tech}
                onChange={(e)=>setFormData({...formData, tech:e.target.value})}
            />
        </div>
        <div>
            <Label>Image File</Label>
            <Input type='file'
                onChange={(e)=>setSelectedFile(e.target.files?.[0] || null)}
            />
        </div>
        <div>
            <Label>Live URL (optional)</Label>
            <Input type='text'
                value={formData.live}
                onChange={(e)=>setFormData({...formData, live:e.target.value})}
            />
        </div>
        <div>
            <Label>GitHub URL (optional)</Label>
            <Input type='text'
                value={formData.github}
                onChange={(e)=>setFormData({...formData, github:e.target.value})}
            />  
        </div>
        <div className="flex gap-4">
            <button type='submit' className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerCancelAddProject}
            >Cancel</button>
        </div>
    </form>
  )
}

export default AddProject