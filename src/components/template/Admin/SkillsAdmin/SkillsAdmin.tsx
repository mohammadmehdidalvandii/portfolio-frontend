import { Edit2, Plus, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddSkill from "./AddSkill";
import EditSkill from "./EditSkill";
import { SkillProps } from "../../../../types/skills";

const SkillsAdmin: React.FC = () => {
  const [isAddSkill, setIsAddSkill] = useState(false);
  const [isEditSkill, setIsEditSkill] = useState(false);
  const [skills, setSkills] = useState<SkillProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/skills");
      if (res.ok) {
        const data = await res.json();
        setSkills(data.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-4">
      {!isAddSkill && (
        <button
          className="admin_btn flex items-center justify-center gap-2"
          onClick={() => setIsAddSkill(true)}
        >
          <Plus className="w-5 h-5" />
          Add Skill
        </button>
      )}
      {isAddSkill && (
        <AddSkill handlerAddSkillCancel={() => setIsAddSkill(false)} />
      )}

      <div className="space-y-3">
        {!isEditSkill && (
            skills.map((skill)=>(
          <div className="bg-slate-800/50 p-4 rounded-lg" key={skill._id}>
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <h3 className="font-InterBold font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              <div className="flex gap-2 ml-4">
                <button
                  className="p-2 text-blue-400 hover:bg-slate-700 rounded cursor-pointer"
                  onClick={() => setIsEditSkill(true)}
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="p-2 text-red-400 hover:bg-slate-700 rounded cursor-pointer">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
            ))
        )}
      </div>
      {isEditSkill && (
        <EditSkill handlerEditSkillCancel={() => setIsEditSkill(false)} />
      )}
    </div>
  );
};

export default SkillsAdmin;
