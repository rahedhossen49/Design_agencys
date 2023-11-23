import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto py-5">
        <div className="flex justify-around">
          <div className="">
            <h1 className="text-white uppercase text-2xl font-bold">
              Web blog
            </h1>
            <p className="text-white">
              Some footer text about the <br /> Agency. Just a little
              description to <br /> help people understand you better
            </p>
            <div className="">
              <ul className="flex gap-2 mt-5">
                {" "}
                <li className="bg-cDark h-[30px] w-[30px] rounded-full text-center">
                  <i className="fa-brands fa-facebook-f leading-loose text-white"></i>
                </li>
                <li className="bg-cDark h-[30px] w-[30px] rounded-full text-center">
                  <i className="fa-brands fa-twitter leading-loose text-white"></i>
                </li>
                <li className="bg-cDark h-[30px] w-[30px] rounded-full text-center">
                  <i className="fa-brands fa-linkedin-in leading-loose text-white"></i>
                </li>
                <li className="bg-cDark h-[30px] w-[30px] rounded-full text-center">
                  <i className="fa-brands  fa-instagram leading-loose text-white"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-white">
            <h2>Quick Link</h2>
            <ul>
              <li className="py-1">
                <Link to="/service">Service</Link>
              </li>
              <li className="py-1">
                <Link to="/team">Team</Link>
              </li>
              <li className="py-1">
                <Link to="/project">Project</Link>
              </li>
              <li className="py-1">
                <Link to="/testimonial">Testimonial</Link>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2>Address</h2>
            <p>
              Design Agency Head Office. <br />
              Airport Road <br />
              United Arab Emirate
            </p>
          </div>
        </div>
        <p className="text-white mt-5">Copyright Design Agency 2023</p>
      </div>
    </div>
  );
};

export default Footer;
