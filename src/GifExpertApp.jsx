import { useState } from "react";
// import GifGrid from "./components/GifGrid";

// En lugar de importar como arriba, pasamos a:
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Pokemon']);

  // const onAddCategory = () => {
  //   setCategories([...categories, 'Valorant']);
  //   // Segunda forma:
  //   // setCategories((cat) => [...cat, 'Valorant']);
  // }

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((categories) => [newCategory,...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
