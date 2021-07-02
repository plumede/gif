import React, { useState } from "react";

const SearchGif = ({ setCategory, category }) => {
  const [name, setName] = useState("");

  const handleInputChange = ({ target: { value } }) => {
    setName(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setCategory([name, ...category]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative px-4">
        <input
          type="text"
          onChange={handleInputChange}
          className="flex-1 block w-full px-4 py-2 mx-auto text-base placeholder-gray-400 border-transparent rounded-lg shadow-sm appearance-none sm:w-2/5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent "
          name="name"
          value={name}
          placeholder="Your Gif"
        />
      </div>
    </form>
  );
};

export default SearchGif;
