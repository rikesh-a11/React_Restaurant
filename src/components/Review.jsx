import React from "react";
import pic1 from "../assets/Img/pic1.png";
import pic2 from "../assets/Img/pic2.png";
import pic3 from "../assets/Img/pic3.png";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  return (
    <div className=" min-h-screen mb-11 flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={pic1} name="Sophia Azura" />
        <ReviewCard img={pic2} name="John Deo" />
        <ReviewCard img={pic3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
