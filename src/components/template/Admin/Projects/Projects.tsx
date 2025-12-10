import { Edit2, Plus, Trash2 } from "lucide-react";
import React, { lazy, useEffect, useState } from "react";
import EditProject from "./EditProject";
import { ProjectsProps } from "../../../../types/projects";

const AddProject = lazy(
  () => import("@components/template/Admin/Projects/AddProject")
);

const Projects: React.FC = () => {
  const [isAddProject, setIsAddProject] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
    const [projects , setProjects] = useState<ProjectsProps[]>([]);
    const [selectedProject , setSelectedProject] = useState<ProjectsProps>()
  
        useEffect(()=>{
            const fetchData = async()=>{
                const res = await fetch('http://localhost:3000/api/projects');
                if(res.ok){
                    const data = await res.json()
                    setProjects(data.data)
                }
            };
            fetchData();
        },[]);


        const handlerDeleteProject = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, projectID:string)=>{
          e.preventDefault();
          if(!projectID){
            alert('ProjectID is required');
          }
          const res = await fetch(`http://localhost:3000/api/projects/delete/${projectID}`,{
            method:"DELETE"
          });

          if(res.status === 204){
            alert('Deleted Project successfully ✅');
          }
        }

  return (
    <div className="space-y-4">
      {!isAddProject && (
        <button
          className="admin_btn flex items-center justify-center font-InterBold font-b"
          onClick={() => setIsAddProject(true)}
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      )}
      {isAddProject && (
        <AddProject handlerCancelAddProject={() => setIsAddProject(false)} />
      )}

      {!isEditing && (
        projects.map((project)=>(
        <div className="space-y-3" key={project._id}>
          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-InterBold font-semibold text-lg text-white">
                 {project.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                    {project.description}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="p-2 text-blue-400 hover:bg-slate-700 rounded cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project)
                    setIsEditing(true)
                  }}
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 hover:bg-slate-700 rounded cursor-pointer"
                onClick={(e)=>handlerDeleteProject(e , project._id)}
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          </div>
        </div>
        ))
      )}
      {isEditing && (
        <EditProject handlerCancelEdit={() => setIsEditing(false)} project={selectedProject!} />
      )}
    </div>
  );
};

export default Projects;
