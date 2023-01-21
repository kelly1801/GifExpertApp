import { useState } from "react";

interface Props {
  onNewCategory: (inputValue: string) => void
}
export const AddCategory = ({ onNewCategory }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;


    setInputValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputValue.trim().length >= 1 && onNewCategory(inputValue.trim())
     
    setInputValue('')
  };
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
