export const baseURL = import.meta.env.VITE_SHRTLNK_BASE_URL;
export const key = import.meta.env.VITE_SHRTLNK_API_KEY;

export const shrtlnkApiEndpoint = "/link";

export const createShortLink = async (
  url: string,
  { arg }: { arg: string }
) => {
  const response = await fetch(baseURL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": key,
      Accept: "application/json",
    },
    body: JSON.stringify({ url: arg }),
    redirect: "follow",
  });

  return response.json();
};
