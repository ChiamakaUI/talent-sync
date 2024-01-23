const FeatureCard = ({ feature }) => {
  return (
    <div className="flex flex-col gap-y-4 font-inter">
      <img
        src={feature?.imgUrl}
        alt={feature?.title}
        className="w-[56px] h-[56px]"
      />
      <div className="flex flex-col gap-y-2">
        <p className="text-[#101828] font-semibold text-2xl">
          {feature?.title}
        </p>
        <p className="text-[#475467] text-lg">{feature?.subtitle}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
