import Button from "./button";

const Hero = () => {
  return (
    <div className="bg-white pb-28 md:pb-20 max-w-[1349px] mx-auto">
      <section
        id="about"
        className="flex py-2 md:flex-row flex-col-reverse overflow-hidden items-center lg:ml-32 pt-6"
      >
        <div className="max-w-lg px-4 text-center md:text-left">
          <h1 className="text-3xl lg:text-6xl text-neutral-300 font-bold lg:leading-tight">
            More than just shorter links
          </h1>
          <p className="leading-relaxed md:text-lg md:max-w-[90%]  md:px-0 px-6 text-neutral-200">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a href="#link-shortening">
            <Button
              className="mt-6 md:mt-8 hover:bg-opacity-60"
              shape="round"
              fill="light"
              size="big"
            >
              Get started
            </Button>
          </a>
        </div>

        <figure className="py-8">
          <img
            className="w-full lg:scale-105 translate-x-8 md:translate-x-14 "
            src="images/illustration-working.svg"
            alt="illustration of person working on a desktop computer"
          />
        </figure>
      </section>
    </div>
  );
};
export default Hero;
