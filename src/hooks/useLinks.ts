import { useContext } from "react";
import useSWRMutation from "swr/mutation";
import { LinkContext } from "../context/links-provider";
import { createShortLink, shrtlnkApiEndpoint } from "../api/shrtlnkApi";
import { Link, isLink } from "../types";
import { toast } from "react-hot-toast";

export const useLinks = () => {
  const { links, addLink, setLinks } = useContext(LinkContext);

  const {
    trigger: shortenLink,
    data,
    error: shortenLinkError,
    isMutating,
    reset,
  } = useSWRMutation(shrtlnkApiEndpoint, createShortLink, {
    onSuccess: (data: Link | { message: string }) => {
      if (isLink(data)) {
        addLink(data);
        return;
      }
      toast.error(data.message);
    },
    onError: (error: { message: string }) => {
      toast.error(error.message);
      console.error(`ERROR SHORTENING LINK: ${error.message}`);
    },
  });

  function clearLinks() {
    setLinks([]);
  }

  return {
    links,
    shortenLink,
    data,
    shortenLinkError,
    isMutating,
    clearLinks,
    reset,
  };
};
