const NextSteps = () => {
  const items = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Peronalized onboarding",
  ];
  return (
    <div className="py-20 font-inter">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-y-5 ml-auto w-[35%]">
          <p className="text-[#101828] font-semibold text-3xl">
            Ready to clear the path to perfect communication?
          </p>
          <div className="flex flex-col gap-y-2">
            {items.map((item, i) => (
              <div key={i} className="flex flex-row items-center gap-x-2">
                <img src="/check.svg" alt="Checkmark" className="h-[25px]" />
                <p className="text-[#475467] text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <button className="rounded-full border-[#98A2B3] px-4 py-2.5 font-inter bg-white border text-[#101828] font-semibold">
              Talk to sales
            </button>
            <button className="rounded-full bg-[#175CD3] text-white px-4 py-2.5 font-inter font-semibold">
              Start your free trial
            </button>
          </div>
        </div>
        <img src="/mockup.png" alt="Mockup" className="h-[450px]" />
      </div>
    </div>
  );
};

export default NextSteps;
