import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/testimonial.json");
      const data = await res.json();

      setTestimonial(data);
    })();
  });
  return (
    <div className="py-5">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="py-10">
          <h1 className="text-4xl font-bold py-5">Testimonial List</h1>
          <p>
            Home {">"} <span className="text-cDark">Testimonial List</span>
          </p>
        </div>
        <h2 className="uppercase text-cDark py-3 text-sm font-medium">
          Testimonial List
        </h2>
        <h1 className="font-bold text-3xl">
          Better Agency/SEO Solution At <br /> Your Fingertips
        </h1>
        <div className="grid grid-cols-3 gap-5 mt-8">
          {testimonial.map((item, i) => (
            <div
              key={i}
              className="border rounded-xl shadow-lg  flex flex-col items-center p-5 text-center"
            >
              <div className="py-3">
                <img src={item?.img} alt="" />
              </div>
              <p className="text-slate-600">{item?.des}</p>
              <h2 className="uppercase text-xl font-bold py-3">{item?.name}</h2>
              <h3 className="font-semibold">{item?.desig}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
