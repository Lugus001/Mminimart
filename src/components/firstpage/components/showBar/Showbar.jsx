import React, { useState } from "react";
import cloth from "/src/assets/cloth.png";
import cosmetic from "/src/assets/cosmetic.png";
import food from "/src/assets/food.png";
import tooth from "/src/assets/tooth.png";
import plug from "/src/assets/plug.png";
import workout from "/src/assets/workout.png";
import kid from "/src/assets/kid.png";
import drug from "/src/assets/drug.png";
import other from "/src/assets/other.png";

const ShowBar = () => {
  const [index, setIndex] = useState(0);

  const images = [
    { src: food, alt: "food", buttonText: "Food" },
    { src: cosmetic, alt: "cosmetic", buttonText: "Cosmetic" },
    { src: tooth, alt: "tooth", buttonText: "Tooth" },
    { src: cloth, alt: "cloth", buttonText: "Cloth" },
    { src: plug, alt: "plug", buttonText: "Plug" },
    { src: workout, alt: "workout", buttonText: "Workout" },
    { src: kid, alt: "kid", buttonText: "Kid" },
    { src: drug, alt: "drug", buttonText: "Drug" },
    { src: other, alt: "other", buttonText: "Other" },
  ];

  const length = images.length;
  const itemsPerPage = 4;

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - itemsPerPage + length) % length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerPage) % length);
  };

  const imagesToShow = images.slice(index, index + itemsPerPage);



  const handleClick = (imageAlt) => {
    console.log(`Clicked on ${imageAlt}`);
    // Add further actions here when an image button is clicked
  };

  return (
    <div className="w-full h-full bg-grey border-b-bgrey">
      <div className="flex justify-end items-center h-full pr-1 pt-5 space-x-2">
        {/* Previous Button */}
        <button onClick={handlePrevious}>
          <svg
            className="h-8 w-8 text-slate-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 8 8 12 12 16" />
            <line x1="16" y1="12" x2="8" y2="12" />
          </svg>
        </button>

        {/* Next Button */}
        <button onClick={handleNext}>
          <svg
            className="h-8 w-8 text-slate-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 16 16 12 12 8" />
            <line x1="8" y1="12" x2="16" y2="12" />
          </svg>
        </button>
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-4 gap-4 pt-4 pb-4">
        {imagesToShow.map((image, idx) => (
          <div
            key={idx}
            className="w-full h-40 flex justify-center items-center"
          >
            {/* Image as a button */}
            <button
              onClick={() => handleClick(image.alt)}
              className="w-full h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowBar;
