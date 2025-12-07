import { Badge } from '@components/ui/Badge';
import { Cart } from '@components/ui/cart';
import { ExperienceProps } from '../../../../types/experience';
import { Briefcase } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Experience:React.FC = ()=>{
      const [experience , setExperience] = useState<ExperienceProps[]>([]);
    
          useEffect(()=>{
              const fetchData = async()=>{
                  const res = await fetch('http://localhost:3000/api/experience');
                  if(res.ok){
                      const data = await res.json()
                      setExperience(data.data)
                  }
              };
              fetchData();
          },[])
  return (
    <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-InterBold font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Work Experience
            </h2>  
            <div className="space-y-6">
                {experience.map((exp)=>(
                <Cart className='p-6 relative' key={exp._id}>
                    <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-linear-b from-blue-500 to-transparent"></div>
                    <div className="flex gap-4">
                        <div className="shrink-0">
                            <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                                <Briefcase className='w-6 h-6 text-white'/>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flew-wrap items-center justify-between gap-2 mb-2">
                                <h3 className="text-2xl font-InterBlack font-black text-white">{exp.jobTitle}</h3>
                                <Badge variant='secondary'>Current</Badge>
                            </div>
                            <p className="text-blue-400 mb-2">{exp.company}</p>
                            <p className="text-slate-400 text-sm mb-3">{exp.period}</p>
                            <p className="text-slate-300 leading-relaxed">{exp.description}</p>
                        </div>
                    </div>
                </Cart>
                ))}

            </div>
        </div>
    </section>
  )
}

export default Experience