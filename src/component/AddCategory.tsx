import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState<string>("Video Games");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setInputValue(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault()

  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Look for gifs"
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};
