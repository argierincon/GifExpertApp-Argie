import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

import "./GifExpertApp.css";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Anne"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
