import TextInput from "./textInput";
import Button from "./button";
import { useState } from "react";

type URLInputContainerProps = React.ComponentPropsWithoutRef<"div">; //& {};

const URLInputContainer: React.FC<URLInputContainerProps> = ({
  className,
  ...props
}) => {
  const [error, setError] = useState("");

  async function handleSubmit(
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    var formData = new FormData(event.target as HTMLFormElement);

    // output as an object
    const values = Object.fromEntries(formData);

    const fields = Object.keys(values);

    fields.forEach((field) => {
      const inputField = document.querySelector(
        `input[name='${field}']`
      ) as HTMLInputElement;

      inputField.focus();
      inputField.blur();
    });

    if (error || values.url === "") {
      if (values.url === "") {
        setError("Please add a link");
        return console.error(`Error: Please add a link`);
      }
      return console.error(`Error: ${error}`);
    }

    console.log(values);
  }

  return (
    <form
      id="link-shortening"
      onSubmit={handleSubmit}
      className=" px-4 h-28 md:h-14 scroll-mt-40"
    >
      <div
        className={`-translate-y-20 md:-translate-y-[3.65rem]  gap-8 bg-center max-w-screen-lg bg-accent rounded-lg p-8 lg:px-10 mx-auto flex flex-col md:flex-row justify-center items-start md:gap-4 bg-shorten-mobile md:bg-shorten-desktop bg-no-repeat bg-cover box-border ${className}`}
        {...props}
      >
        <TextInput
          name="url"
          error={error}
          setError={setError}
          validateFn={(value: string) => [
            {
              condition: !value.match(
                /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
              ),
              error: "Please add a valid link",
            },
            { condition: value === "", error: "Please add a link" },
          ]}
          className="self-stretch flex-1 h-12 md:min-h-[unset]"
          placeholder=""
        />
        <Button
          shape="square"
          fill="light"
          size={"big"}
          type="submit"
          className="self-stretch"
          disabled={error !== ""}
        >
          Shorten It!
        </Button>
      </div>
    </form>
  );
};
export default URLInputContainer;
