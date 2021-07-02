import React, { useState } from "react";
import SearchGif from "./components/SearchGif";
import GifGrid from "./components/GifGrid";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState(["programming"]);
  return (
    <>
      <header className="header">
        App De Gifs By{" "}
        <a className="link" target="_blank" href="https://t.me/arcodez">
          Arcodez
        </a>{" "}
        and{" "}
        <a className="link" target="_blank" href="https://t.me/plumede">
          Plumede
        </a>
      </header>
      <SearchGif setCategory={setCategory} category={category} />
      <main>
        {category.map((el) => {
          return <GifGrid el={el} />;
        })}
      </main>
    </>
  );
};

export default App;
