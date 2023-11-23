import { useEffect, useState } from "react";

const StateList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/statList.json");
      const data = await res.json();
      setList(data);
    })();
  }, []);
  return (
    <div className="py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="grid grid-cols-4 gap-10">
          {list.map((item) => (
            <div
              key={item.id}
              className=" shadow-lg rounded-lg flex items-center flex-col py-5 px-3"
            >
              <div className="w-20 h-20 bg-clight rounded-lg flex justify-center items-center">
                <i className={`${item?.icon} text-3xl`}></i>
              </div>
              <h3 className="font-bold text-xl p-3">{item?.num}</h3>
              <p className="px-3 text-xs font-semibold">{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StateList;
