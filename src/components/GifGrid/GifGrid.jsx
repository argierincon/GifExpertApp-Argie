import React from "react";

import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifGridItem from "../GifGridItem/GifGridItem";

import './GifGrid.css'


// CUSTOM HOOKS: SECCIÓN 6. VIDEO 78, 79.

export const GifGrid = ({ category }) => {
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && "Loading..."}
      <div className="gif-category">
        {gifs.map((gif) => (
          <GifGridItem {...gif} key={gif.id} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
