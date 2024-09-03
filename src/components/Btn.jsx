import React from 'react';

const Btn = ({ props }) => {
  return (
    <button className="bg-blue-400 p-2 ml-2 rounded-xl pl-4 pr-4">
      {props}
    </button>
  );
};

export default Btn;
