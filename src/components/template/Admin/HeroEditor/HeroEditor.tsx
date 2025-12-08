import { Input } from '@components/ui/Input'
import { Label } from '@components/ui/Label'
import { HeroProps } from '../../../../types/hero'
import React, { useEffect, useState } from 'react'

const HeroEditor:React.FC = ()=>{
    const [formData , setFormData] = useState<HeroProps>({
        _id:'',
        name:'',
        title:'',
        bio:'',
        email:'',
        github:'',
        linkedin:'',
        image:'',
    });

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [preview, setPreview] = useState<string>(''); 

    const handlerFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        setSelectedFile(file);
        setPreview(URL.createObjectURL(file)); 
    }
};


       useEffect(()=>{
            const fetchData = async()=>{
             const res = await fetch('http://localhost:3000/api/hero')
                if(res.ok){
                    const data = await res.json()
                    const hero = data.data[0]
                    setFormData({
                        _id:hero._id,
                        name:hero.name ||'',
                        title:hero.title || '',
                        bio:hero.bio || '',
                        email:hero.email || '',
                        github:hero.github || '',
                        linkedin:hero.linkedin || '',
                        image:hero.image || '', 
                    })
                }
            };
            fetchData();
        },[])
    
        const handlerUpdateHero:React.FormEventHandler = async (e)=>{
            e.preventDefault();

            const fd = new FormData();
            fd.append('name' , formData.name)
            fd.append('title' , formData.title)
            fd.append('bio' , formData.bio)
            fd.append('email' , formData.email)
            fd.append('github' , formData.github)
            fd.append('linkedin' , formData.linkedin);

            if(selectedFile){
                fd.append('image',selectedFile);
            }else{
                fd.append('image', formData.image);
            }

            const res = await fetch(`http://localhost:3000/api/hero/update/${formData._id}`,{
                method:'PATCH',
                body:fd
            });

            if(res.ok){
                alert('Updated Successfully ✅')
            }

        }



  return (
        <form action="#" className='space-y-4' onSubmit={handlerUpdateHero}>
            <div>
                <Label>Name</Label> 
                <Input type='text'
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
                />
            </div>
            <div>
                <Label>Title</Label> 
                <Input type='text'
                value={formData.title}
                onChange={(e)=>setFormData({...formData, title:e.target.value})}
                />
            </div>
            <div>
                <Label>Bio</Label> 
                <textarea rows={4}
                value={formData.bio}
                onChange={(e)=>setFormData({...formData, bio:e.target.value})}
                className='w-full px-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500'
                ></textarea>
            </div>
            <div>
                <Label>Email Link</Label> 
                <Input type='email'
                value={formData.email}
                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                />
            </div>
            <div>
                <Label>GitHub URL</Label> 
                <Input type='url'
                value={formData.github}
                onChange={(e)=>setFormData({...formData,github:e.target.value})}
                />
            </div>
            <div>
                <Label>Linkedin URL</Label> 
                <Input type='url'
                value={formData.linkedin}
                onChange={(e)=>setFormData({...formData, linkedin:e.target.value})}
                />
            </div>
            <div className='flex gap-2'>
                <img src={preview || formData.image} alt="hero img"  className='w-40 h-40 rounded-full'/>
                <div>
                <Label>Image </Label> 
                <Input type='file'
                    onChange={handlerFileChange}
                />
                </div>
            </div>
            <button type='submit' className='admin_btn'>Save Change</button>
        </form>
  )
}

export default HeroEditor