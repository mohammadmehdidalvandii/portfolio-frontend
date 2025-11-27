import { Badge } from '@components/ui/Badge'
import { Cart } from '@components/ui/cart'
import React from 'react'

const Skills:React.FC = ()=>{
  return (
    <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-5xl font-InterBold font-bold mb-12 text-center bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h2>  
            <div className="grid md:grid-cols-2 gap-8">
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Frontend</h3>
                    <div className="flex flex-wrap gap-8 mt-4">
                    <Badge variant='success'>HTML</Badge>
                    <Badge variant='success'>CSS</Badge>
                    <Badge variant='success'>JAVASCRIPT</Badge>
                    <Badge variant='success'>REACT</Badge>
                    <Badge variant='success'>NEXT.JS</Badge>
                    <Badge variant='success'>TYPESCRIPT</Badge>
                    </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Backend</h3>
                    <div className="flex flex-wrap gap-8 mt-4">
                    <Badge variant='success'>NODE.JS</Badge>
                    <Badge variant='success'>EXPRESS.JS</Badge>
                    <Badge variant='success'>FASTIFY</Badge>
                    </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Database</h3>
                    <div className="flex flex-wrap gap-8 mt-4">
                    <Badge variant='success'>MONGODB</Badge>
                    <Badge variant='success'>MYSQL</Badge>
                    </div>
                </Cart>
                <Cart className='p-6'>
                    <h3 className="text-xl font-InterBold font-bold text-blue-400">Tools &  DevOps</h3>
                    <div className="flex flex-wrap gap-8 mt-4">
                    <Badge variant='success'>JEST</Badge>
                    </div>
                </Cart>
            </div>
        </div>
    </section>
  )
}

export default Skills