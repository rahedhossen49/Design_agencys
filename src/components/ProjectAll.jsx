import { useEffect, useState } from "react";

const ProjectAll = () => {
  const [allProject, setAllProject] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/ProjectAll.json");
      const data = await res.json();
      setAllProject(data);
    })();
  });
  return (
    <div className="py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="py-10">
          <h1 className="text-4xl font-bold py-5">Team</h1>
          <p>
            Home {">"} <span className="text-cDark">Team</span>
          </p>
        </div>
        <h2 className="uppercase text-cDark py-3 text-sm font-medium">
          Our Team Member
        </h2>
        <h1 className="font-bold text-3xl">
          Better Agency/SEO Solution At <br /> Your Fingertips
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {allProject.map((pro, i) => (
            <div key={i} className="p-3 border rounded-lg shadow-lg">
              <img className="w-full" src={pro?.img} alt="" />
              <h1 className="text-2xl py-3 font-bold">{pro?.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAll;
