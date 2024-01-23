const Showcase = () => {
  const companies = [
    {
      id: 1,
      name: "Shopify",
      imgUrl: "/shopify.svg",
    },
    {
      id: 2,
      name: "Coinbase",
      imgUrl: "/coinbase.svg",
    },
    {
      id: 3,
      name: "Dropbox",
      imgUrl: "/dropbox.svg",
    },
    {
      id: 4,
      name: "Intercom",
      imgUrl: "/intercom.svg",
    },
    {
      id: 5,
      name: "Marvel",
      imgUrl: "/marvel.svg",
    },
    {
      id: 6,
      name: "Automattic",
      imgUrl: "/automattic.svg",
    },
  ];
  return (
    <div className="py-20">
      <p className="font-inter text-[#475467] text-center font-medium mb-6 text-xl">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className="flex flex-row items-center justify-between w-[85%] mx-auto">
        {companies.map((company) => (
          <img key={company.id} src={company.imgUrl} alt={company.name} />
        ))}
      </div>
    </div>
  );
};

export default Showcase;
