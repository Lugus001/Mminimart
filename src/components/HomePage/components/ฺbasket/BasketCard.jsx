import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext"; 
import basket from "/src/assets/basket.png";
import basketData from "./context/BasketData";

function BasketCard() {
  const { addToCart } = useCart();
  const [index, setIndex] = useState(0);
  const [quantities, setQuantities] = useState([0, 0, 0, 0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  
  

  const length = basketData.length;
  const itemsPerPage = 4;
  const imagesToShow = basketData.slice(index, index + itemsPerPage);

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

  const handleAddToCartClick = (item) => {
    addToCart(item, quantities[item.id]);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-full bg-grey border-b-bgrey">
      <div className="mb-2">
        <p className="font-prompt text-sm">สินค้าพิเศษสำหรับคุณ</p>
      </div>

      <div className="inline-flex items-center space-x-10">
        <p className="font-prompt text-sm sm:text-lg md:text-x">
          คัดสรรมาเพื่อตอบโจทย์
          <span className="font-prompt text-sm sm:text-lg md:text-x text-orange ml-auto">
            "ทุกความต้องการ"
          </span>
          ของคุณ
        </p>
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
        {imagesToShow.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-1/4">
            <img
              src={item.imgSrc}
              className="w-full object-cover border-b-2 border-bgrey"
              alt={item.name}
            />
            <div className="bg-white p-5">
              <p className="font-prompt text-sm sm:text-lg md:text-x phone:text-xs">
                {item.name}
              </p>
              <div className="text-right">
                <p className="text-sm sm:text-lg md:text-xl font-bold">
                  ฿{item.actual_price.toFixed(2)}
                </p>
              </div>
              <div>
                <div className="flex flex-row items-center">
                  <button
                    type="button"
                    onClick={() => handleDecrement(idx)}
                    aria-label="Decrement quantity"
                    className="bg-white border border-grey-200 rounded-l-lg w-full focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantities[idx]}
                    onChange={(e) => handleInputChange(e, idx)}
                    className="bg-white border border-grey-200 text-center text-black text-sm block w-full py-0.5"
                  />
                  <button
                    type="button"
                    onClick={() => handleIncrement(idx)}
                    aria-label="Increment quantity"
                    className="bg-white border border-grey-200 rounded-r-lg w-full focus:outline-none"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAddToCartClick(item)}
                    className="ml-2"
                  >
                    <img
                      src={basket}
                      alt="Add to cart"
                      className="w-full"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasketCard;
