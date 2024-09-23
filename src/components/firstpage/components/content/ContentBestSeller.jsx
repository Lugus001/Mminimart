import React, { useEffect, useState } from "react";
import basket from "/src/assets/basket.png";
import p1 from "/src/assets/p1.png";
import p2 from "/src/assets/p2.png";
import p3 from "/src/assets/p3.png";
import p4 from "/src/assets/p4.png";

const Content = () => {
  const [index, setIndex] = useState(0);
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const images = [
    { src: p1, alt: "Special product1" },
    { src: p2, alt: "Special product2" },
    { src: p3, alt: "Special product3" },
    { src: p4, alt: "Special product4" },
  ];

  const length = images.length;
  const itemsPerPage = 4; // Show only 4 images at a time

  // Get the current set of images to show
  const imagesToShow = images.slice(index, index + itemsPerPage);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - itemsPerPage + length) % length);
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + itemsPerPage) % length);
  };

  const handleDecrement = (productIndex) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, idx) =>
        idx === productIndex ? Math.max(quantity - 1, 0) : quantity
      )
    );
  };

  const handleIncrement = (productIndex) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, idx) =>
        idx === productIndex ? quantity + 1 : quantity
      )
    );
  };

  const handleInputChange = (e, productIndex) => {
    const value = Math.max(0, parseInt(e.target.value) || 0);
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, idx) =>
        idx === productIndex ? value : quantity
      )
    );
  };

  const handleAddToBasket = (productIndex) => {
    console.log(
      `Adding product ${productIndex} with quantity ${quantities[productIndex]} to the basket`
    );
    // Implement basket logic here
  };

  return (
    <div className="w-full h-full bg-grey border-b-bgrey">
      <div className="mb-2">
        <p className="font-prompt text-sm">สินค้าพิเศษสำหรับคุณ</p>
      </div>

      <div className="inline-flex items-center space-x-10">
        {" "}
        <p className="font-prompt text-sm sm:text-lg md:text-x">
          {" "}
          คุ้มเกินคุ้ม{" "}
          <span className="font-prompt text-sm sm:text-lg md:text-x text-orange ml-auto">
            {" "}
            "สินค้าขายดี"{" "}
          </span>
          ราคาพิเศษ{" "}
        </p>{" "}
      </div>

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

      <div className="flex justify-center space-x-1 overflow-hidden w-full">
        {imagesToShow.map((image, idx) => (
          <div key={idx} className="flex-shrink-0 w-1/4">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover border-b-2 border-bgrey"
            />
            <div className="bg-white p-5">
              <p className="font-prompt text-sm sm:text-lg md:text-x phone:text-xs">
                น้ำยาล้างจาน ซันไลเลม่อน แบบถุง 500 มล.
              </p>
              <div className="text-right">
                <p className="text-sm sm:text-lg md:text-xl font-bold">
                  ฿99.00
                </p>
              </div>

              <div>
                <div className="flex flex-row  items-center  ">
                  <div className="flex items-center ">
                    <div></div>
                    <button
                      type="button"
                      onClick={() => handleDecrement(idx)}
                      aria-label="Decrement quantity"
                      className="bg-white border border-grey-200 rounded-s-lg  w-full  focus:outline-none"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={quantities[idx]}
                      onChange={(e) => handleInputChange(e, idx)}
                      className="bg-white border border-grey-200  text-center text-black text-sm block w-full py-0.5 "
                    />
                    <button
                      type="button"
                      onClick={() => handleIncrement(idx)}
                      aria-label="Increment quantity"
                      className="bg-white border border-grey-200 rounded-e-lg  w-full  focus:outline-none"
                    >
                      +
                    </button>

                    {!isMobile && (
                      <div>
                        <img
                          src={basket}
                          alt="basket"
                          className="w-full "
                          type="button"
                          onClick={() => handleAddToBasket(idx)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {isMobile && (
                <div className="flex flex-col">
                  <img
                    src={basket}
                    alt="basket"
                    className="w-full "
                    type="button"
                    onClick={() => handleAddToBasket(idx)}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
