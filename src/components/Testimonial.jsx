import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="bg-[#F9FAFB] py-20 font-inter">
      <div className="flex flex-row items-center justify-between w-[85%] mx-auto">
        <div className="flex flex-col gap-y-6 w-[46%]">
          <img src="/shopify.svg" alt="People" className="w-[100px]" />
          <div className="flex flex-row items-center gap-x-1">
            <FaStar className="text-[#FDB022]" />
            <FaStar className="text-[#FDB022]" />
            <FaStar className="text-[#FDB022]" />
            <FaStar className="text-[#FDB022]" />
            <FaStar className="text-[#FDB022]" />
          </div>
          <p className="text-[#101828] text-4xl font-medium">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </p>
          <div className="flex flex-row gap-x-4 self-stretch">
            <img src="/shopify-manager.png" alt="People" className="w-[50px] h-[50px]" />
            <div>
              <p className="text-[#101828] text-lg font-semibold">Sarah Thompson</p>
              <p className="text-[#475467] text-base">Project Manager, Shopify</p>
            </div>
            <div className="flex flex-row gap-x-5">
              <img src="/arrow-left.svg" alt="People" className="w-[50px] h-[50px]" />
              <img src="/arrow-right.svg" alt="People" className="w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
        <img src="/content.png" alt="People" className="w-[48%]" />
      </div>
    </div>
  );
};

export default Testimonial;
