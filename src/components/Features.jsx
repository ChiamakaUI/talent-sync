import FeatureCard from "./FeatureCard";

const Features = () => {
  const offers = [
    {
      id: 1,
      title: "Crystal-clear HD video",
      subtitle:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
      imgUrl: "/video-feature.svg",
    },
    {
      id: 2,
      title: "Noise-canceling audio",
      subtitle:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
      imgUrl: "/audio-feature.svg",
    },
    {
      id: 1,
      title: "Scheduling made easy",
      subtitle:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
      imgUrl: "/calendar-feature.svg",
    },
    {
      id: 1,
      title: "Bank-grade security",
      subtitle:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
      imgUrl: "/lock-feature.svg",
    },
  ];
  return (
    <div className="py-20 font-inter">
      <div className="flex flex-col gap-y-20 w-[80%] mx-auto relative">
        <div className="flex flex-col gap-y-2">
          <p className="text-[#175CD3] font-semibold">
            The ClearLink Advantage
          </p>
          <p className="text-[#1D2939] text-3xl font-semibold">
            Why choose ClearLink?
          </p>
          <p className="text-[#667085] text-xl">
            In a world where connection is everything, ClearLink takes the lead.
            Our <br /> cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 w-[55%]">
            {offers.map((offer) => (
              <FeatureCard key={offer.id} feature={offer} />
            ))}
          </div>
          <div className="w-[42%]">
            <img
              src="/arrow.svg"
              alt="People"
              className="absolute top-5 z-50 "
            />
            <img src="/people.png" alt="People" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
