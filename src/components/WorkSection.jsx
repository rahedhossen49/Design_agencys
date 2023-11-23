import { useEffect, useState } from "react";

const WorkSection = () => {
  const [work, setWork] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/work.json");
      const data = await res.json();
      setWork(data);
    })();
  }, []);
  return (
    <div className="py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="uppercase text-cDark py-3 text-xs font-medium">
          work list
        </h2>
        <h1 className="font-bold text-2xl">
          We provide the Perfect Solution <br /> to your business growth
        </h1>
        <div className="flex mt-7 justify-between gap-10">
          {work.map((item) => (
            <div key={item.id} className="border py-5 px-3">
              <div className="w-20 h-20 bg-clight rounded-lg flex justify-center items-center">
                <i className={`${item?.icon} text-3xl`}></i>
              </div>
              <h3 className="font-bold text-xl p-3">{item?.title}</h3>
              <p className="px-3 text-sm">{item?.des}</p>
              <button className="px-4 py-2 flex flex-row items-center">
                Learn more <i className="fa-solid fa-arrow-right ms-3"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
