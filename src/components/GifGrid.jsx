import React, { useEffect, useState } from "react";
import GifItem from "./GifItem";

const GifGrid = ({ el }) => {
  const [gifs, setGifs] = useState([]);

  const KEY_API = "INBYS428FGU4";

  const getGif = async (gifName) => {
    const url = `https://g.tenor.com/v1/search?key=${KEY_API}&limit=9&q=${encodeURI(
      gifName
    )}`;
    const res = await fetch(url);
    const { results } = await res.json();
    console.log(results);

    const gifs = results.map((gif) => {
      return {
        title: gif.title,
        url: gif.media[0].gif.url,
        id: gif.id,
      };
    });

    return gifs;
  };

  useEffect(() => {
    getGif(el).then((data) => setGifs(data));
  }, [el]);

  return (
    <section className="grid grid-cols-1 gap-2 m-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:mx-24 sm:my-8 ">
      {gifs.map((gif) => {
        return <GifItem {...gif} />;
      })}
    </section>
  );
};

export default GifGrid;
