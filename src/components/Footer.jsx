import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";

import logo from "../assets/logo.png";

const Footer = () => {
  const items = [
    {
      id: 1,
      heading: "Product",
      subtext: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
    },
    {
      id: 2,
      heading: "Company",
      subtext: ["About us", "Careers", "Press", "News", "Contact"],
    },
    {
      id: 3,
      heading: "Resources",
      subtext: ["Blog", "Events", "Help centre", "Tutorials", "Support"],
    },
    {
      id: 4,
      heading: "Legal",
      subtext: ["Terms", "Privacy", "Cookies", "Licenses", "Contact"],
    },
  ];
  return (
    <div className="pt-20 font-inter">
      <div className="flex flex-row justify-between w-[85%] mx-auto pb-10">
        <div className="flex flex-col gap-y-3 w-[33%]">
          <img src={logo} alt="logo" className="w-[150px] h-[30px]" />
          <p className="text-[#475467] text-lg">
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-8">
          {items.map((item) => (
            <div key={item.id} className="font-semibold flex flex-col gap-y-3">
              <p className="text-[#667085]">{item.heading}</p>
              <div className="flex flex-col gap-y-1.5">
                {item.subtext.map((text, i) => (
                  <p key={i} className="text-[#475467] text-lg">{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-[#004EEB] font-semibold">Get the app</p>
          <img src="/apple.svg" alt="Mockup" className="h-[40px]" />
          <img src="/google.svg" alt="Mockup" className="h-[40px]" />
        </div>
      </div>
      <div className="bg-[#F9FAFB] py-10">
        <div className="flex flex-row justify-between w-[85%] mx-auto">
          <p className="text-[#667085]">
            © 2023 ClearLink. All rights reserved.
          </p>
          <div className="text-[#98A2B3] flex flex-row items-center gap-x-3 text-xl">
          <FaLinkedin />
          <FaTwitter/>
          <FaFacebook/>
          <FaInstagram/>
          <FaGithub/>
          <FaYoutube/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
