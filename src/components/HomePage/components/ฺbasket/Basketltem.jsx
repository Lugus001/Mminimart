import React, { useEffect, useState } from 'react';
import { useCart } from './context/CartContext';

function BasketItem({ onDelete, item, index }) {
    const previousCount = JSON.parse(localStorage.getItem(`cartCount_${index}`)) || 1;
    const [count, setCount] = useState(previousCount);
    const { setTotalPrice } = useCart();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

    useEffect(() => {
        localStorage.setItem(`cartCount_${index}`, JSON.stringify(count));
        setTotalPrice(item.actual_price * count);
    }, [count, index, item.actual_price, setTotalPrice]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleIcrCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDcrCount = () => {
        if (count > 1) {
            setCount(prevCount => prevCount - 1);
        } else {
            alert("You can't select 0 items");
        }
    };

    const handleCountChange = (e) => {
        const newCount = Math.max(1, parseInt(e.target.value, 10)); // Ensure count is at least 1
        setCount(newCount);
    };

    return (
        <div className="add-to-card card mb-1">
            {isMobile ? (
                <div className="card-body p-[10%] bg-grey ">
                    <div className="card-img flex justify-content-between align-items-center">
                        <img src={item.imgSrc} alt="card image" className="w-full object-cover " />
                    </div>
        
                        <p className="font-prompt text-sm p-2  ">
                            {item.name}
                        </p>
                        <div className="text-right p-3">
                            <p className=" font-prompt text-sm  font-bold">
                                {item.actual_price} บาท {/* ราคาปกติ */}
                            </p>
                        </div>
                        <div className='flex'>
                            <button
                                type="button"
                                onClick={handleDcrCount}
                                aria-label="Decrement quantity"
                                className="bg-white border border-grey-200 rounded-s-lg w-[2rem] h-[20%] focus:outline-none"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={count}
                                onChange={handleCountChange}
                                className="bg-white border border-grey-200 text-center text-black text-sm block   w-[2rem] "
                            />
                            <button
                                type="button"
                                onClick={handleIcrCount}
                                aria-label="Increment quantity"
                                className="bg-white border border-grey-200 rounded-e-lg w-[2rem]  h-[20%]   focus:outline-none"
                            >
                                +
                            </button>
                        </div>
                   
                </div>
                
            ) : (
                <div className="card-body flex  border border-bgrey p-5">
                    <div className="card-img  justify-content-between align-items-center">
                        <img src={item.imgSrc} alt="card image" className="w-full object-cover p-2"/>
                    </div>
                    <div className='title'>
                        <p className="font-prompt text-md sm:text-lg md:text-x ">
                            {item.name}
                        </p>
                        <p className="text-sm sm:text-lg md:text-xl font-bold">
                            {item.actual_price} บาท {/* ราคาปกติ */}
                        </p>
                        
                    </div>
                    
                    
                    <div className='flex pl-[10%] pt-[5%]'>
                            <button
                                type="button"
                                onClick={handleDcrCount}
                                aria-label="Decrement quantity"
                                className="bg-white border border-grey-200 rounded-s-lg w-[20%] h-[20%] focus:outline-none"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                value={count}
                                onChange={handleCountChange}
                                className="bg-white border border-grey-200 text-center text-black text-sm block w-[20%]  h-[20%]  py-0.5"
                            />
                            <button
                                type="button"
                                onClick={handleIcrCount}
                                aria-label="Increment quantity"
                                className="bg-white border border-grey-200 rounded-e-lg w-[20%]   h-[20%] focus:outline-none"
                            >
                                +
                            </button>
                        </div>
                </div>
            )}
        </div>
    );
}

export default BasketItem;
