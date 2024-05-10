import React, { useEffect, useState } from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/Img/img1.jpg";
import img2 from "../assets/Img/img2.jpg";
import img3 from "../assets/Img/img3.jpg";
import img4 from "../assets/Img/img4.jpg";
import img5 from "../assets/Img/img5.jpg";
import img6 from "../assets/Img/img6.jpg";
const Dishes = () => {
  return (
    <>
      <div className="min-h-screen mb-3 flex flex-col justify-center items-center lg:px-32 px-5">
        <h1 className="font-semibold text-4xl text-center pt-24 pb-10">
          Our Dishes
        </h1>
        <div className="flex flex-wrap mb-6 gap-8 justify-center">
          <DishesCard img={img1} title="Sizzler" price="$10.99" />
          <DishesCard img={img2} title="Grill Chicken" price="$11.99" />
          <DishesCard img={img3} title="Pasta" price="$12.99" />
          <DishesCard img={img4} title="Corn dog" price="$7.99" />
          <DishesCard img={img5} title="Fried Rice" price="$5.99" />
          <DishesCard img={img6} title="Chops" price="$4.99" />
        </div>
      </div>
    </>
  );
};
export default Dishes;
