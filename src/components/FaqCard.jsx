import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const FaqCard = ({ item }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div
      className={`p-5 font-inter ${
        showContent
          ? "bg-[#F9FAFB] border border-[#EAECF0] rounded-md"
          : "bg-white border-b border-[#EAECF0]"
      }`}
    >
      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-[#101828] text-xl font-semibold">{item?.title}</p>
          <div>
          {showContent ? (
            <FiMinusCircle
              onClick={() => setShowContent(!showContent)}
              className="cursor-pointer text-lg text-[#98A2B3]"
            />
          ) : (
            <FiPlusCircle
              onClick={() => setShowContent(!showContent)}
              className="cursor-pointer text-lg text-[#98A2B3]"
            />
          )}  
          </div>
        </div>
        {showContent && (
          <p className="text-[#475467] text-base">{item?.subtext}</p>
        )}
      </div>
    </div>
  );
};

export default FaqCard;
