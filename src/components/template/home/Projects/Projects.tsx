import { Badge } from '@components/ui/Badge'
import { Cart } from '@components/ui/cart'
import { ProjectsProps } from '../../../../types/projects'
import { ExternalLink, Github } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const Projects:React.FC = ()=>{
  const [projects , setProjects] = useState<ProjectsProps[]>([]);

      useEffect(()=>{
          const fetchData = async()=>{
              const res = await fetch('http://localhost:3000/api/projects');
              if(res.ok){
                  const data = await res.json()
                  setProjects(data.data)
              }
          };
          fetchData();
      },[])


  return (
    <section className="py-20 px-6" id='projects'>
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-InterBold font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
               {projects && projects.map((project)=>(
              <Cart className='overflow-hidden group' key={project._id}>
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image || "/assets/project.jpg"} alt="project" 
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-30"></div>
                </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-InterBold font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech[0].split(',').map((t: string) => (
                         <Badge key={t} variant="primary">{t}</Badge>
                       ))}
                    </div>
                    <div className="flex gap-4">
                      <Link to={`${project.live}`} target='_blank'
                      className='glass_btn px-4 py-2 flex items-center gap-2'>
                      <ExternalLink className='w-4 h-4'/>
                      <span>Live Demo</span>
                      </Link>
                      <Link to={`${project.github}`} target='_blank'
                      className='glass_btn px-4 py-2 flex items-center gap-2'>
                      <Github className='w-4 h-4'/>
                      <span>Code</span>
                      </Link>
                    </div>
                  </div>
              </Cart>
              ))}
              {/* <Cart className='overflow-hidden group'>
                <div className="relative h-48 overflow-hidden">
                  <img src="/assets/project.jpg" alt="project" 
                  className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-30"></div>
                </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-InterBold font-bold mb-3 text-white">E-Commerce Platform</h3>
                    <p className="text-slate-400 mb-4">Full-featured e-commerce platform with payment integration and admin dashboard</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant='primary'>React</Badge>
                      <Badge variant='primary'>Node.js</Badge>
                      <Badge variant='primary'>PostgreSQL</Badge>
                      <Badge variant='primary'>Stripe</Badge>
                    </div>
                    <div className="flex gap-4">
                      <Link to=''target='_blank'
                      className='glass_btn px-4 py-2 flex items-center gap-2'>
                      <ExternalLink className='w-4 h-4'/>
                      <span>Live Demo</span>
                      </Link>
                      <Link to=''target='_blank'
                      className='glass_btn px-4 py-2 flex items-center gap-2'>
                      <Github className='w-4 h-4'/>
                      <span>Code</span>
                      </Link>
                    </div>
                  </div>
              </Cart> */}
            </div>
            <button className='glass_btn px-4 py-2 flex mx-auto mt-8'>Show More</button>
        </div>
    </section>
  )
}

export default Projects