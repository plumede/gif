import React from "react";

const GifItem = ({ url, title, id }) => {
  //   console.log(url);
  return (
    <figure>
      <img src={url} alt={title} className="mx-auto rounded-2xl" key={id} />
    </figure>
  );
};

export default GifItem;
