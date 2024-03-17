import React, { useState } from "react";

type Validations = {
  condition: boolean;
  error: string;
}[];

type TextInputProps = {
  validateFn: (value: string) => Validations;
  className?: string;
  placeholder?: string;
  name: string;
  // value: string;
  // setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput: React.FC<TextInputProps> = ({
  validateFn,
  className,
  name,
  placeholder,
  setError,
  error,
}) => {
  const [isTouched, setIsTouched] = useState(false);

  function handleValidate(value: string) {
    const validations = validateFn(value);

    setError("");
    validations.forEach(({ condition, error }) => {
      if (condition) {
        setError((prev) => (prev === error ? "" : error));
      }
    });
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    handleValidate(event.target.value);
  }

  function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
    setIsTouched(true);
    handleValidate(event.target.value);

    // if (!error) setError("");
  }

  return (
    <div
      key={name}
      className={`bg-white relative min-h-12 rounded-md ${className} ${error && isTouched ? "border-2 border-error" : ""}`}
    >
      <input
        type="url"
        name={name}
        onInput={handleChange}
        onBlur={handleBlur}
        className={`bg-transparent h-full w-full px-4 outline-primary rounded-md absolute inset-0`}
        placeholder={placeholder}
      />
      {error && isTouched && (
        <p className="text-error absolute -bottom-6 text-xs italic">{error}</p>
      )}
    </div>
  );
};
export default TextInput;
