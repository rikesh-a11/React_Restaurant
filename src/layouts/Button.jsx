import React from "react";

const Button = (props) => {
  return (
    <>
      <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </>
  );
};

export default Button;
