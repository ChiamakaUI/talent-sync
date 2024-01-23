import { FaStar } from "react-icons/fa";
import Navbar from "./Navbar";
import video from "../assets/video.png";

const Bannner = () => {
  return (
    <div className="bg-[url('/bg.png')] w-screen pt-10 bg-cover box-border pb-14">
      <Navbar />
      <div className="flex flex-rol justify-between w-[88%] mx-auto mt-24 box-border">
        <div className="font-inter w-[48%] flex flex-col">
          <p className="text-5xl mb-3 text-[#1D2939] font-semibold">
            Uniting the world, one video call at a time
          </p>
          <p className="text-lg text-[#667085] font-medium">
            Experience the future of communication with ClearLink – where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="flex flex-row items-center gap-x-5 my-6">
            <button className="rounded-full bg-[#175CD3] text-white px-4 py-2.5 font-inter">
              Start your free trial{" "}
            </button>
            <div className="flex flex-row items-center gap-x-3">
              <img src="/bot.svg" alt="robot" />
              <p className="text-[#175CD3] font-semibold">
                Discover AI assistant
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-4">
            <img src="/avatar.png" alt="user-reviews" />
            <div className="flex flex-col gap-y-1">
              <div className="flex flex-row items-center gap-x-1">
                <FaStar className="text-[#FDB022]" />
                <FaStar className="text-[#FDB022]" />
                <FaStar className="text-[#FDB022]" />
                <FaStar className="text-[#FDB022]" />
                <FaStar className="text-[#FDB022]" />
                <p className="text-[#344054] font-semibold">5.0</p>
              </div>
              <p className="text-[#475467] font-medium">from 3,000+ reviews</p>
            </div>
          </div>
        </div>
        <img
          src={video}
          alt="video"
          className="w-[50%] object-cover h-[500px]"
        />
      </div>
    </div>
  );
};

export default Bannner;
