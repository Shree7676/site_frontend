import React from 'react';
import Btn from './Btn';

const Card = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={item.Photo} alt={item.Title} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.Title}</h2>
        <p className="text-gray-700 mb-4">{item.Desc}</p>
        <a href={item.Video} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Watch Video
        </a>
      </div>
      <Btn props={"Explore"}></Btn>
    </div>
  );
};

export default Card;
