import { features } from "process";
import React, { useState } from "react";

const heroCarousalImages: string[] = ["/head1.webp", "/head2.webp"];
let count: number = 0; //faster when put here
export default function Slider() {
  // State for count
  const [currentIndex, setCurrentIndex] = useState(0);
  //let count: number = 0; //slower when put here
  const handlePreviousClick = () => {
    count = (count - 1) % heroCarousalImages.length;
    setCurrentIndex(count);
  };
  const handleNextClick = () => {
    count = (count + 1) % heroCarousalImages.length;
    setCurrentIndex(count);
  };
  return (
    <div className="w-full select-none relative">
      <img
        src={heroCarousalImages[currentIndex]}
        alt=""
        className="w-full max-h-96 object-cover"
      />
      <div
        className="flex justify-between items-center absolute w-full top-1/2 
      transform -translate-y-1/2 px-3"
      >
        <button onClick={handlePreviousClick}> Previous </button>
        <button onClick={handleNextClick}> Next </button>
      </div>
    </div>
  );
}
