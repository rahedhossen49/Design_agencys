import { useEffect, useState } from "react";

const Teams = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/team.json");
      const data = await res.json();
      setTeam(data);
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
          Check our awesome team <br /> members
        </h1>
        <div className="flex gap-5 py-5 pt-10">
          {team.map((item, index) => (
            <div key={index} className="border relative rounded-2xl">
              <img className="relative" src={item?.img} alt="" />
              <div className="absolute w-[100px] border bottom-[150px]  left-1/2 translate-x-[-50%]  bg-white flex gap-4 px-3 rounded-xl">
                <i className="fa-brands fa-facebook-f leading-loose text-slate-600 "></i>
                <i className="fa-brands fa-twitter leading-loose text-slate-600 "></i>
                <i className="fa-brands  fa-instagram leading-loose text-slate-600 "></i>
              </div>
              <h2 className="py-5 px-3 font-bold text-2xl text-center">
                {item?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
