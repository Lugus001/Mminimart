import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import SideBarWith from '../../sideBar/sideBarWith';
import SideBarPhone from '../../sideBar/sideBarPhone';
import Navlog from '../Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';

const OrderList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [filter, setFilter] = useState('all');
  const [orders, setOrders] = useState([
   
  ]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleFilterChange = (status) => {
    setFilter(status);
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter(order => order.status === filter);

  return (
    <section>
      <Navlog />

      {isMobile ? (
        <div className='w-full bg-grey pb-[100%]'>
          <div className='flex bg-white'>
            <SideBarPhone />
            <div className='w-full bg-white border border-bgrey p-3 overflow-y-auto'>
              <div className='flex'>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.0627 3.52495H16.5002V3.14995C16.5002 2.28745 15.8252 1.61245 15.0002 1.61245H12.8627V1.49995C12.8627 1.04995 12.4877 0.637451 12.0002 0.637451C11.5502 0.637451 11.1377 1.01245 11.1377 1.49995V1.61245H9.0002C8.1752 1.61245 7.5002 2.28745 7.5002 3.14995V3.52495H6.9377C5.7377 3.52495 4.7627 4.53745 4.7627 5.73745V21.1124C4.7627 22.35 5.7377 23.325 6.9377 23.325H17.1002C18.3002 23.325 19.2752 22.3125 19.2752 21.1124V5.73745C19.2377 4.49995 18.2627 3.52495 17.0627 3.52495ZM9.1877 3.29995H14.8127V4.34995V5.39995H9.1877V3.29995ZM17.5502 21.1124C17.5502 21.4125 17.3252 21.6375 17.0627 21.6375H6.9377C6.6752 21.6375 6.4502 21.4125 6.4502 21.1124V5.73745C6.4502 5.43745 6.6752 5.21245 6.9377 5.21245H7.5002V5.58745C7.5002 6.44995 8.1752 7.12495 9.0002 7.12495H15.0002C15.8252 7.12495 16.5002 6.44995 16.5002 5.58745V5.21245H17.1002C17.3627 5.21245 17.5877 5.43745 17.5877 5.73745V21.1124H17.5502Z" fill="#111928" />
                </svg>
                <p className="font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-xl pr-[10%] pb-3">รายการคำสั่งซื้อ</p>
              </div>

              <div className='flex flex-col'>
                <div className="flex overflow-x-auto whitespace-nowrap space-x-5 pb-2">
                  <button type='button' onClick={() => handleFilterChange('all')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'all' ? 'border-b-2 border-orange' : ''}`}
                  >
                    <p className="font-prompt phone:text-xs sm:text-xs md:text-2xl">ที่ต้องชำระเงิน</p>
                  </button>
                  <button type='button' onClick={() => handleFilterChange('preparing')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'preparing' ? 'border-b-2 border-orange' : ''}`}>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">กำลังเตรียมพัสดุ</p>
                  </button>
                  <button type='button' onClick={() => handleFilterChange('shipped')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'shipped' ? 'border-b-2 border-orange' : ''}`}>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">กำลังจัดส่ง</p>
                  </button>
                  <button type='button' onClick={() => handleFilterChange('delivered')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'delivered' ? 'border-b-2 border-orange' : ''}`}>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">จัดส่งสำเร็จ</p>
                  </button>
                  <button type='button' onClick={() => handleFilterChange('history')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'history' ? 'border-b-2 border-orange' : ''}`}>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">ประวัติการสั่งซื้อ</p>
                  </button>
                </div>
                <div className='border border-bgrey'></div>
              </div>

              <div className='flex flex-col pt-[2%]'>
                {filteredOrders.map((order, index) => (
                  <div key={index} className="flex justify-between">
                    <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">{order.date}</p>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">{order.description}</p>
                    <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">{order.amount}</p>
                    <Button className='bg-green rounded-2xl w-[15%] h-[10%]'>
                      <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">Success</p>
                    </Button>
                    <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">{order.balance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
         
        </div>
      ) : (
        <div className=''>
          <div className='w-full bg-grey pr-[5%] pb-[19%]'>
            <div className='flex pt-[2%]'>
              <SideBarWith />
              <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                <div className='flex'>
                  <svg width="24" height="24" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#111928" />
                  </svg>
                  <p className="font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-xl pr-[10%] pb-3">รายการคำสั่งซื้อ</p>
                </div>

                <div className='flex flex-col'>
                  <div className="flex  whitespace-nowrap space-x-20 pb-2">
                    <button type='button' onClick={() => handleFilterChange('all')}className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'all' ? 'border-b-4 border-orange' : ''}`}>
                      <p className="font-prompt phone:text-xs sm:text-xs md:text-2xl">ที่ต้องชำระเงิน</p>
                    </button>
                    <button type='button' onClick={() => handleFilterChange('preparing')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'preparing' ? 'border-b-4 border-orange' : ''}`}>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">กำลังเตรียมพัสดุ</p>
                    </button>
                    <button type='button' onClick={() => handleFilterChange('shipped')}  className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'shipped' ? 'border-b-4 border-orange' : ''}`}>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">กำลังจัดส่ง</p>
                    </button>
                    <button type='button' onClick={() => handleFilterChange('delivered')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'delivered' ? 'border-b-4 border-orange' : ''}`}>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">จัดส่งสำเร็จ</p>
                    </button>
                    <button type='button' onClick={() => handleFilterChange('history')} className={`font-prompt phone:text-xs sm:text-xs md:text-2xl ${filter === 'history' ? 'border-b-4 border-orange' : ''}`}>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">ประวัติการสั่งซื้อ</p>
                    </button>
                  </div>
                  <div className='border border-bgrey'></div>
                </div>

                <div className='w-full  pr-[5%] pb-[24%] '>
                  {filteredOrders.map((order, index) => (
                    <div key={index} className="flex justify-between">
                      <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">{order.date}</p>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">{order.description}</p>
                      <p className="font-prompt phone:text-xs sm:text-md md:text-2xl">{order.amount}</p>
                      <Button className='bg-green rounded-2xl w-[15%] h-[10%]'>
                        <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">Success</p>
                      </Button>
                      <p className="font-prompt phone:text-xs sm:text-sm md:text-2xl">{order.balance}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
           
          </div>
         
        </div>
      )}
       <Footer />
    </section>
  );
};

export default OrderList;
