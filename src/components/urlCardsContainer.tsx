import URLCard from "./urlCard";

const dummyData = Object.freeze([
  {
    url: "https://www.google.com/search?q=how+to+shorten+links+on+shortly+api",
    shortened: `https://rel.ink/${crypto.randomUUID().slice(0, 5)}`,
  },
  {
    url: "https://www.twitter.com/shortly?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    shortened: `https://rel.ink/${crypto.randomUUID().slice(0, 5)}`,
  },
  {
    url: "https://www.facebook.com/shortly",
    shortened: `https://rel.ink/${crypto.randomUUID().slice(0, 5)}`,
  },
]);

const URLCardsContainer = () => {
  return (
    <section
      id="resources"
      className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col gap-4 mt-5"
    >
      {dummyData.map(({ url, shortened }) => (
        <URLCard key={url} url={url} shortened={shortened} />
      ))}
    </section>
  );
};
export default URLCardsContainer;
