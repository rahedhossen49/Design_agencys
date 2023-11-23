import { useEffect, useState } from "react";

const HeroSection = () => {
  const [img, setImg] = useState([]);
  const [img2, setImg2] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/imagedata.json");
      const data = await res.json();
      setImg(data);
    })();
  });
  useEffect(() => {
    (async () => {
      const res = await fetch("/database/imagedata2.json");
      const data = await res.json();
      setImg2(data);
    })();
  });
  return (
    <div className="bg-clight py-5 ">
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="py-3 gap-6 flex items-center">
          <div className="w-1/2">
            <h1 className="text-6xl font-bold leading-none">
              Increase Your Customers Loyalty and Satisfaction
            </h1>
            <p className="text-[20px] py-3">
              We help businesses like yours earn more customers, standout from
              competitors, make more money
            </p>
            <button className="p-2 px-3 mt-4 bg-cDark rounded-lg text-white">
              Get Start
            </button>
          </div>
          <div className="w-1/2 ">
            <div className="flex w-full flex-wrap gap-4 my-3">
              <img className="h-auto max-w-full" src={img[0]?.img} alt="" />

              <img className="h-auto max-w-full" src={img[1]?.img} alt="" />
            </div>
            <div className="flex flex-wrap gap-4 my-3">
              <img src={img[2]?.img} alt="" />

              <img src={img[3]?.img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-clight2 ">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-between p-5">
            {img2.map((items) => (
              <img key={items.id} src={items.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
