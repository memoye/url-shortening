export type Link = {
  key: string;
  url: string;
  shrtlnk: string;
};

export function isLink(value: any): value is Link {
  return value.key && value.url && value.shrtlnk;
}
