import { createContext, useState } from "react";
import { Link } from "../types";

type LinkProviderProps = {
  children: React.ReactNode;
};

type LinkProviderState = {
  links: Link[];
  addLink: (link: Link) => void;
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
};

const initialState: LinkProviderState = {
  links: [],
  addLink: () => null,
  setLinks: () => null,
};

export const LinkContext = createContext<LinkProviderState>(initialState);

export const LinksContextProvider = ({ children }: LinkProviderProps) => {
  const [links, setLinks] = useState<Link[]>([]);

  function addLink(link: Link) {
    setLinks(() => [link, ...links].slice(0, 3));
  }

  const value = {
    links,
    setLinks,
    addLink,
  };

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
};
