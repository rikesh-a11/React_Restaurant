import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const DishesCard = (props) => {
  return (
    <>
      <div className="w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg dish-card-container transition duration-100 hover:scale-105 hover:bg-blue-100">
        <img className=" rounded-xl" src={props.img} alt="img" />
        <div className="space-y-4">
          <h3 className="font-semibold text-center mt-4">{props.title}</h3>
          <div className="flex flex-row justify-center">
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarFill className="text-brightColor" />
            <BsStarHalf />
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <h3 className="font-semibold text-lg">{props.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishesCard;
