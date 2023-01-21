import { AddCategory } from "./component/AddCategory"
import { useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState<string[]>(["One Punch"]);

  const onAddCategory = (...values: string[]) => {
    setCategories(prev => [ ...values, ...prev]);
  };
  return (
    <>
      {/*Title*/}
      <h1>GifExpertApp</h1>
      {/*Search box*/}
      <AddCategory/> 
      {/*Gif list*/}
      <button onClick={() => onAddCategory('cat1', "cat2")}>Add</button>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
      {/*Gif item*/}
    </>
  );
};
