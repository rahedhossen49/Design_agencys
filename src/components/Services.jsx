import { useEffect, useState } from "react";

const Services = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/service.json");
      const data = await res.json();
      setService(data);
    })();
  }, []);
  return (
    <div>
      <div className="py-5">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="py-10">
            <h1 className="text-4xl font-bold py-5">Our Service</h1>
            <p>
              Home {">"} <span className="text-cDark">Service</span>
            </p>
          </div>
          <h2 className="uppercase text-cDark py-3 text-sm font-medium">
            Our All Services
          </h2>
          <h1 className="font-bold text-3xl">
            We Provide BestWeb design <br /> services
          </h1>
          <div className="grid grid-cols-2 gap-10 py-5 pt-10">
            {service.map((items, index) => (
              <div key={index} className="border p-6 rounded-lg">
                <h2 className="text-2xl py-2 font-bold">{items?.title}</h2>
                <p className="text-sm font-medium text-slate-600">
                  {items?.des}
                </p>
                <div className="grid grid-cols-2 items-center justify-start">
                  {items.img.map((item, i) => (
                    <img key={i} src={item} alt="" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
