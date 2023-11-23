import { useEffect, useState } from "react";

const FutureProjects = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/database/futureProject");
      const data = await res.json();
      setFeature(data);
    })();
  });
  return (
    <div className="py-5 bg-clight3">
      <div className="max-w-screen-xl mx-auto px-5">
        <h2 className="uppercase text-cDark py-3 text-xs font-medium">
          Featured Project
        </h2>
        <h1 className="font-bold text-2xl">
          We provide the Perfect Solution <br /> to your business growth
        </h1>
        <div className="flex gap-5 py-8">
          <div className="w-1/2">
            <img src={feature[0]?.img} alt="" />
            <div className="py-3">
              <p className="text-slate-700 text-xs font-semibold py-1">
                {feature[0]?.title} - {feature[0]?.date}
              </p>
              <h1 className="font-bold text-2xl">{feature[0]?.name}</h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-1/2">
            {feature.slice(1).map((item) => (
              <div key={item.id} className="">
                <img className="" src={item?.img} alt="" />
                <div className="py-3">
                  <p className="text-slate-700 text-xs font-semibold py-1">
                    {item?.title} - {item?.date}
                  </p>
                  <h1 className="font-bold text-xl">{item?.name}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureProjects;
