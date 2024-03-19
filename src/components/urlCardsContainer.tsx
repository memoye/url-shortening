import { useLinks } from "../hooks/useLinks";
import Button from "./button";
import URLCard from "./urlCard";

const URLCardsContainer = () => {
  const { links, clearLinks } = useLinks();

  return (
    <section
      id="resources"
      className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col gap-4 mt-5 scroll-mt-24 group"
    >
      {links.map(({ key, url, shrtlnk }) => (
        <URLCard key={key} url={url} shrtlnk={shrtlnk} />
      ))}
      {links.length > 0 && (
        <Button
          className={`invisible group-hover:visible font-normal ml-auto -mt-4 italic text-accent`}
          onClick={clearLinks}
        >
          Clear
        </Button>
      )}
    </section>
  );
};
export default URLCardsContainer;
