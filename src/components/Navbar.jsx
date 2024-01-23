import logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="flex flex-row border border-[#D0D5DD] rounded-full bg-[#F2F4F7] box-border w-[88%] mx-auto px-8 py-3 justify-between items-center">
      <img src={logo} alt="logo" className="w-[150px] h-[30px]" />
      <div className="flex flex-row items-center font-inter gap-x-10 font-semibold">
        <div className="flex flex-row items-center gap-x-0.5">
          <p className="text-lg text-[#667085]">Products</p>
          <FaAngleDown className="text-[#667085] text-sm" />
        </div>
        <div className="flex flex-row items-center gap-x-0.5">
          <p className="text-lg text-[#667085]">Solutions</p>
          <FaAngleDown className="text-[#667085] text-sm" />
        </div>
        <div className="flex flex-row items-center gap-x-0.5">
          <p className="text-lg text-[#667085]">Resources</p>
          <FaAngleDown className="text-[#667085] text-sm" />
        </div>
        <div className="flex flex-row items-center gap-x-0.5">
          <p className="text-lg text-[#667085]">Pricing</p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-x-2">
        <button className="rounded-full border-[#98A2B3] px-4 py-2.5 font-inter bg-white border text-[#101828] font-semibold">
          Talk to sales
        </button>
        <button className="rounded-full bg-[#175CD3] text-white px-4 py-2.5 font-inter font-semibold">
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
