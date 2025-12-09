import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import { ProjectsProps } from '../../../../types/projects';
import React, { useState } from 'react'

interface EditProjectProps {
    handlerCancelEdit:React.MouseEventHandler,
    project:ProjectsProps
}

const EditProject:React.FC<EditProjectProps> = ({handlerCancelEdit , project})=>{
    const [formData , setFormData] = useState({
        title:project.title || '',
        description:project.description || '',
        tech:project.tech.join(',') || '',
        image:project.image || '',
        live:project.live || '',
        github:project.github || '',
    });
    const [selectedFile , setSelectedFile] = useState<File | null>(null);
    const [preview , setPreview] = useState<string>('');
    const handlerChangeFile = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const file = e.target.files?.[0];
        if(file){
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const handlerUpdateProject:React.FormEventHandler = async (e)=>{
        e.preventDefault();

        const fd = new FormData();
        fd.append('title', formData.title);
        fd.append('description', formData.description);
        fd.append('tech',formData.tech);
        fd.append('live',formData.live);
        fd.append('github', formData.github);

        if(selectedFile){
            fd.append('image', selectedFile);
        }else{
            fd.append('image', formData.image);
        }

        const res = await fetch(`http://localhost:3000/api/projects/update/${project._id}`,{
            method:"PATCH",
            body:fd
        });

        if(res.ok){
            alert('Updated project successfully')
        }

    } 


  return (
        <form action="" className='space-y-4 border p-4 border-slate-400 rounded' onSubmit={handlerUpdateProject}>
        <div>
            <Label>Title</Label>
            <Input type='text'
                value={formData.title}
                onChange={(e)=> setFormData({...formData, title:e.target.value})}
            />
        </div>
        <div>
            <Label>Description</Label>
            <Input type='text'
                value={formData.description}
                onChange={(e)=> setFormData({...formData, description:e.target.value})}
            />
        </div>
        <div>
            <Label>Technologies(comma-separated)</Label>
            <Input type='text'
                value={formData.tech}
            />
        </div>
        <div className="flex items-center gap-2">
                <img src={ preview || formData.image} alt="" className="w-40 h-40 rounded-full" />
            <div>
                <Label>Image File</Label>
                <Input type='file'
                    onChange={handlerChangeFile}
                />
            </div>
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
            <Input  type='text'
                value={formData.github}
                onChange={(e)=> setFormData({...formData, github:e.target.value})}
            />
        </div>
        <div className="flex gap-4">
            <button type='submit' className='admin_btn'>Save</button>
            <button className='btn_cancel' 
            onClick={handlerCancelEdit}
            >Cancel</button>
        </div>
    </form>
  )
}

export default EditProject