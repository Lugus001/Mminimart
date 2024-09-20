import React, { useState, useEffect } from 'react';
import cloth from '/src/assets/cloth.png';
import cosmetic from '/src/assets/cosmetic.png';
import drug from '/src/assets/drug.png';
import food from '/src/assets/food.png';
import kid from '/src/assets/kid.png';
import other from '/src/assets/other.png';
import plug from '/src/assets/plug.png';
import tooth from '/src/assets/tooth.png';
import workout from '/src/assets/workout.png';

const CategoryProduct = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 800);
    };

    handleResize(); // Check initial screen width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Cleanup listener on unmount
  }, []);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleCategoryClick = (index) => {
    setActiveCategoryIndex(index === activeCategoryIndex ? null : index);
  };

  const catatext = [
    { text: 'อาหารและเครื่องดื่ม' },
    { text: 'ของใช้ส่วนตัว' },
    { text: 'ของใช้ในบ้าน' },
    { text: 'เสื้อผ้า' },
    { text: 'อุปกรณ์อิเล็กทรอนิกส์' },
    { text: 'กีฬาและสันทนาการ' },
    { text: 'สินค้าสำหรับเด็ก' },
    { text: 'ยาและเวชภัณฑ์' },
    { text: 'สินค้าอื่นๆ' },
  ];

  const images = [
    { src: food, alt: 'Food' },
    { src: cosmetic, alt: 'Cosmetic' },
    { src: tooth, alt: 'Tooth' },
    { src: cloth, alt: 'Cloth' },
    { src: plug, alt: 'Plug' },
    { src: workout, alt: 'Workout' },
    { src: kid, alt: 'Kid' },
    { src: drug, alt: 'Drug' },
    { src: other, alt: 'Other' },
  ];

  const subCategories = [
    [
      { text: 'อาหารสด' },
      { text: 'อาหารแห้ง' },
      { text: 'เครื่องดื่ม' },
      { text: 'ขนม' },
    ],
    [
      { text: 'ผลิตภัณฑ์อาบน้ำ' },
      { text: 'เครื่องสำอาง' },
      { text: 'ผลิตภัณฑ์ดูแลเส้นผม' },
      { text: 'ผลิตภัณฑ์ดูแลผิว' },
    ],
    [
      { text: 'อุปกรณ์ทำความสะอาด' },
      { text: 'อุปกรณ์ครัว' },
      { text: 'อุปกรณ์ตกแต่งบ้าน' },
      { text: 'เครื่องใช้ไฟฟ้า' },
    ],
    [
      { text: 'เสื้อ' },
      { text: 'กางเกง' },
      { text: 'ชุดชั้นใน' },
      { text: 'ถุงเท้า' },
      { text: 'รองเท้า' },
      { text: 'เครื่องประดับ' },
    ],
    [
      { text: 'คอมพิวเตอร์' },
      { text: 'อุปกรณ์เสริม' },
    ],
    [
      { text: 'อุปกรณ์กีฬา' },
      { text: 'อุปกรณ์ออกกำลังกาย' },
      { text: 'ของเล่น' },
    ],
    [
      { text: 'เสื้อผ้าเด็ก' },
      { text: 'ของเล่นเด็ก' },
      { text: 'อุปกรณ์สำหรับเด็ก' },
      { text: 'อาหารเด็ก' },
    ],
    [
      { text: 'ยาสามัญประจำบ้าน' },
      { text: 'ยาสมุนไพร' },
      { text: 'อาหารเสริม' },
    ],
    [
      { text: 'สินค้าเบ็ตเตล็ด' },
      { text: 'เครื่องมือช่าง' },
      { text: 'สินค้าสำหรับสัตว์เลี้ยง' },
      { text: 'อุปกรณ์งาน DIY' },
    ],
  ];

  return (
    <div className='w-full bg-grey'>
      <div className='w-full bg-grey border border-bgrey'>
        <div className='flex items-center mt-3 pl-10'>
          <p className="font-prompt">หมวดหมู่สินค้า</p>
          <button type='button' onClick={handleButtonClick} className='ml-2'>
            <svg
              className="w-6 h-6 text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
      </div>

      {isContentVisible && (
        <div className='xl:ml-[12rem] xl:mr-[70%] md:ml-[12rem] md:mr-[30%] sm:ml-[12rem] sm:mr-[20%] phone:ml-[30%] phone:mr-[2%]'>
          <div className='w-full bg-white border border-grey-200 rounded-xl'>
            <div className='pl-4 pt-3 font-prompt text-sm md:text-lg'>
              หมวดหมู่ทั้งหมด
            </div>
            

            {images.map((image, index) => (
              <div key={index} className=" border-b border-grey-200">
                <div className='p-3 flex items-center'>
                  <div className='w-[50px] min-w-[50px]'>
                    <img src={image.src} alt={image.alt} className='w-full h-auto' />
                    </div>
                    <div className='ml-5 flex-1'>
                    <p className='font-prompt'>{catatext[index]?.text}</p>
                    </div>
                    <button type='button' onClick={() => handleCategoryClick(index)} className='ml-2'>
                     <svg
                      className="w-6 h-6 text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                      viewBox="0 0 14 8"
                      >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                    />
                    </svg>
                    </button>
                
                
                </div>
                {activeCategoryIndex === index && (
                  <div className='border-0 border-bgrey '>
                    {subCategories[activeCategoryIndex]?.map((subCategory, subIndex) => (
                      <div key={subIndex} className='p-[0.5rem] border border-bgrey'>
                        <p className='font-prompt text-md text-center'>{subCategory.text}</p>
                      </div>

                    ))}
                  </div>
                )}
              </div>
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
