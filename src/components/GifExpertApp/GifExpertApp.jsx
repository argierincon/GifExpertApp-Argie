import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

import "./GifExpertApp.css";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Anne"]);

  return (
    <section>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <div>
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </div>
    </section>
  );
};

export default GifExpertApp;
