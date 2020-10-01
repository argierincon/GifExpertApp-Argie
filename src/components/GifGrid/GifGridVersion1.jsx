import React, { useEffect, useState } from "react";
import GifGridItem from "../GifGridItem/GifGridItem";
import { getGifs } from "../../helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category).then(setGifs);
  }, [category ]);

  return (
    <div>
      <h3>{category}</h3>

      {gifs.map((gif) => (
        <GifGridItem {...gif} key={gif.id} />
      ))}
    </div>
  );
};

export default GifGrid;

// const apiKey = 'CgPiOlDWJgWEGDo70vyz4ACQAac30Raj';

// const getHTTP = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// getHTTP.then( resp => {
//   resp.json().then(data => {
//     console.log(data)
//   })
// })
// .catch(console.warn);
