import { useLinks } from "../hooks/useLinks";
import URLCard from "./urlCard";

const URLCardsContainer = () => {
  const { links } = useLinks();

  return (
    <section
      id="resources"
      className="max-w-screen-lg mx-auto px-4 lg:px-0 flex flex-col gap-4 mt-5 scroll-mt-24"
    >
      {links.map(({ key, url, shrtlnk }) => (
        <URLCard key={key} url={url} shrtlnk={shrtlnk} />
      ))}
    </section>
  );
};
export default URLCardsContainer;
