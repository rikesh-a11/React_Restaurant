import React, { useEffect, useState } from "react";
import Dishes from "./Dishes";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/Img/Home.jpg')] bg-cover bg-no-repeat">
        <div className="w-full lg:w-2/3 space-y-5">
          <h1 className="text-backgroundColor font-semibold text-5xl ">
            Welcome!
          </h1>
          <h1 className="text-backgroundColor font-semibold text-5xl ">
            Let's Dine Together
          </h1>
          <p className="text-blue-200 mr-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            consequuntur, magnam quam aut eaque, perferendis eum corporis
            sapiente eius ad deserunt laudantium.
          </p>
        </div>
      </div>
      <Dishes />
      <Review />
    </>
  );
};

export default Home;
