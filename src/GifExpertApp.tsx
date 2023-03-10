import { useState } from "react";
import { GifGrid, AddCategory} from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(["One Punch"]);

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return;
    setCategories((prev) => [newCategory, ...prev]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid category={category} key={category} />
      ))}
    </>
  );
};
