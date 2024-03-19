import Hero from "../components/hero";
import URLCardsContainer from "../components/urlCardsContainer";
import URLInputContainer from "../components/urlInputContainer";
import ProductOffering from "../components/productOfferingContainer";

const Home = () => {
  return (
    <main className="">
      <Hero />
      <div className="bg-neutral-100/20">
        <URLInputContainer />
        <URLCardsContainer />
        <section className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col gap-4 text-center mt-20">
          <h2 className="md:text-3xl leading-tight text-2xl text-neutral-300 font-bold">
            Advanced Statistics
          </h2>
          <p className="leading-loose text-sm max-w-[25rem] md:px-0 mx-auto px-4 text-neutral-200">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <ProductOffering />
      </div>
    </main>
  );
};
export default Home;
