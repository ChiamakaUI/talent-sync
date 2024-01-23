import FaqCard from "./FaqCard";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      title: "How many participants can join a ClearLink video conference?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 2,
      title: "Can I use ClearLink on multiple devices?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 3,
      title: "Is ClearLink compatible with other video conferencing platforms?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 4,
      title: "How does ClearLink ensure the security of my video conferences?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 5,
      title: "Do I need to download any software to use ClearLink?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      id: 6,
      title: "What kind of customer support does ClearLink provide?",
      subtext:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
  ];
  return (
    <div className="py-20 font-inter">
      <div className="flex flex-row justify-between w-[85%] mx-auto">
        <div className="w-[40%] flex flex-col gap-y-4">
          <p className="text-[#175CD3] font-semibold text-lg">Support</p>
          <p className="text-[#1D2939] text-4xl font-semibold">FAQs</p>
          <p className="text-[#667085] text-xl">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please chat to our friendly
            team.
          </p>
        </div>
        <div className="w-[55%]">
          {faqs.map((item) => (
            <FaqCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
