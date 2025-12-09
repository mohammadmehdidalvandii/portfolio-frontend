import { Badge } from '@components/ui/Badge'
import { Cart } from '@components/ui/cart'
import { SkillProps } from '../../../../types/skills';
import React, { useEffect, useState } from 'react'

const Skills:React.FC = ()=>{
      const [skills , setSkills] = useState<SkillProps[]>([]);
          useEffect(()=>{
              const fetchData = async()=>{
                  const res = await fetch('http://localhost:3000/api/skills');
                  if(res.ok){
                      const data = await res.json()
                      setSkills(data.data)
                  }
              };
              fetchData();
          },[])
  return (
    <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-InterBold font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h2>  
            <div className="grid md:grid-cols-2 gap-8">
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Frontend</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                       {skills
                         .filter(skill => skill.category === "Frontend")
                         .map(skill => (
                           <Badge key={skill._id} variant="success">{skill.name || 'empty   '}</Badge>
                         ))}
                     </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Backend</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                       {skills
                         .filter(skill => skill.category === "Backend")
                         .map(skill => (
                           <Badge key={skill._id} variant="success">{skill.name || 'empty'}</Badge>
                         ))}
                     </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Database</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                       {skills
                         .filter(skill => skill.category === "Database")
                         .map(skill => (
                           <Badge key={skill._id} variant="success">{skill.name || 'empty'}</Badge>
                         ))}
                     </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Tools &  DevOps</h3>
                    <div className="flex flex-wrap gap-4 mt-4">
                       {skills
                         .filter(skill => skill.category === "ToolDevops")
                         .map(skill => (
                           <Badge key={skill._id} variant="success">{skill.name || 'empty'}</Badge>
                         ))}
                     </div>
                </Cart>
            </div>
        </div>
    </section>
  )
}

export default Skills