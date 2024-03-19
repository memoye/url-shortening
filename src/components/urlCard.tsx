import { Link } from "../types/index";
import useClipboard from "../hooks/useClipboard";
import Button from "./button";

type URLCardProps = Link;

const URLCard: React.FC<URLCardProps> = ({ url, shrtlnk, ...props }) => {
  const urlStyle = "tracking-tight";

  const { copied, copyToClipboard } = useClipboard();

  function handleCopy() {
    copyToClipboard(shrtlnk);
  }

  return (
    <div
      key={props.key}
      className="flex flex-col md:flex-row justify-between items-center md:gap-4 bg-white rounded-md text-center md:text-left animate-drop"
    >
      <a
        className={`${urlStyle}  md:border-none border-b border-neutral-200/40 w-full md:max-w-[50%] truncate text-neutral-400 p-4 md:pl-6`}
        href={url}
        title={url}
        onClick={(e) => e.preventDefault()}
        aria-disabled
      >
        {url}
      </a>
      <div className="flex gap-4 flex-col md:flex-row items-center p-4 md:w-auto w-full">
        <a
          href={shrtlnk}
          target="_blank"
          className={`${urlStyle} text-primary relative`}
          title="Visit URL"
        >
          {shrtlnk}
          {
            <span
              className={`absolute left-1/2 duration-500 ease-in -translate-x-1/2 ${copied ? "transition-all opacity-0 scale-110 -translate-y-20 visible" : "transition-none invisible"}`}
            >
              {shrtlnk}
            </span>
          }
        </a>

        <Button
          className={`w-full md:w-fit overflow-hidden relative ${copied ? "hover:bg-opacity-100" : "hover:bg-opacity-60"}`}
          fill={copied ? "dark" : "light"}
          size="small"
          onClick={handleCopy}
        >
          <span
            className={`transition-all duration-200 inline-block ${copied ? "scale-[400%] ease-in opacity-0" : "scale-100 opacity-100"}`}
          >
            Copy
          </span>
          <span
            className={`transition-all duration-200 absolute left-1/2 -translate-x-1/2 ease-out inline-block ${!copied ? "scale-[400%] opacity-0" : "scale-100 opacity-100"}`}
          >
            Copied!
          </span>
        </Button>
      </div>
    </div>
  );
};

export default URLCard;
