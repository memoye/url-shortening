import Button from "./button";
import ProductOfferingCard from "./productOfferingCard";

const offerings = [
  {
    id: crypto.randomUUID().slice(0, 5),
    icon: "images/icon-brand-recognition.svg",
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    id: crypto.randomUUID().slice(0, 5),
    icon: "images/icon-detailed-records.svg",
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    id: crypto.randomUUID().slice(0, 5),
    icon: "images/icon-fully-customizable.svg",
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const ProductOfferingContainer = () => {
  return (
    <section id="features" className="scroll-mt-16">
      <div className="py-12">
        <div className="relative max-w-screen-lg gap-14 lg:gap-6 mx-auto mt-10 px-4 lg:px-0 flex flex-col lg:flex-row min-h-[19rem] items-center  lg:[&>*:last-child]:self-end lg:[&>*:first-child]:self-start before:content-[''] before:z-0 before:bg-primary before:absolute before:inset-y-0 before:w-2 before:left-1/2 max-md:before:-translate-x-1/2 lg:before:w-[unset] lg:before:inset-x-0 lg:before:top-1/2 lg:before:-translate-y-1/2 lg:before:h-2 ">
          {/* <div className="absolute"></div> */}
          {offerings.map((offer) => (
            <ProductOfferingCard key={offer.id} {...offer} />
          ))}
        </div>
      </div>
      <div className="bg-boost-mobile bg-no-repeat bg-cover bg-center md:bg-boost-desktop text-center p-4 py-8 bg-accent">
        <p className="font-bold text-2xl my-2 mb-4 text-white">
          Boost your links today
        </p>
        <a href="#link-shortening">
          <Button shape="round" fill="light" size="big">
            Get Started
          </Button>
        </a>
      </div>
    </section>
  );
};
export default ProductOfferingContainer;
