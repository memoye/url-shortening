import { useCallback, useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text).then(
        () => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        },
        () => {
          setCopied(false);
        }
      );
    },
    [setCopied]
  );

  return { copied, copyToClipboard };
};

export default useClipboard;
