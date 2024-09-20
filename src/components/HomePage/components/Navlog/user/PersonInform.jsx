import React, { useEffect, useState } from 'react';
import Navlog from '../Navlog';
import SideBar from '../../sideBar';
import Button from '@mui/material/Button';

const PersonInform = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section>
        <Navlog/>
      
  
        {!isMobile && (
          <div className='w-full bg-grey  pr-[5%]'>
            <div className='flex  pt-[2%]'>
              <SideBar/>
            <div className='w-full bg-white border border-bgrey rounded-2xl p-6 '>
              <div className='flex' >
                <svg width="24" height="24" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#111928"/>
                  <path d="M11.8313 18V6H12.6091V18H11.8313ZM9 16.8V7.2H12.5569C13.2462 7.2 13.8168 7.3125 14.269 7.5375C14.7211 7.75938 15.0594 8.06094 15.2839 8.44219C15.5084 8.82031 15.6206 9.24688 15.6206 9.72187C15.6206 10.1219 15.5463 10.4594 15.3977 10.7344C15.2491 11.0062 15.0499 11.225 14.8001 11.3906C14.5535 11.5531 14.2816 11.6719 13.9844 11.7469V11.8406C14.3069 11.8562 14.6215 11.9594 14.9282 12.15C15.238 12.3375 15.4941 12.6047 15.6965 12.9516C15.8988 13.2984 16 13.7203 16 14.2172C16 14.7078 15.883 15.1484 15.6491 15.5391C15.4182 15.9266 15.061 16.2344 14.5772 16.4625C14.0935 16.6875 13.4754 16.8 12.7229 16.8H9ZM10.4654 15.5578H12.5806C13.2825 15.5578 13.7852 15.4234 14.0888 15.1547C14.3923 14.8859 14.544 14.55 14.544 14.1469C14.544 13.8438 14.4666 13.5656 14.3117 13.3125C14.1567 13.0594 13.9354 12.8578 13.6477 12.7078C13.3631 12.5578 13.0248 12.4828 12.6328 12.4828H10.4654V15.5578ZM10.4654 11.3531H12.4289C12.7577 11.3531 13.0533 11.2906 13.3157 11.1656C13.5813 11.0406 13.7916 10.8656 13.9465 10.6406C14.1046 10.4125 14.1836 10.1438 14.1836 9.83438C14.1836 9.4375 14.0429 9.10469 13.7615 8.83594C13.4801 8.56719 13.0486 8.43281 12.4668 8.43281H10.4654V11.3531Z" fill="#111928"/>
                </svg>
                <p className="font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-xl  pl-2  pb-2">ยอดเงินคงเหลือ</p>
                <div>
                <Button  
                  onClick={() => console.log("Continue shopping button clicked")} // Fix onClick handler
                  color="primary"   
                  sx={{
                    width: '100%',
                    border: '1px solid black',
                    borderRadius: '1rem',
                    fontFamily: 'Prompt',
                    color: 'black', 
                    '&:hover': {
                      backgroundColor: '#e5e5e5',
                    },
                  }}>
                  เลือกสินค้าต่อ
                </Button>

                </div>
                <div>
                <Button 
                  onClick={() => console.log("Payment button clicked")} // Fix onClick handler
                  sx={{
                    width: '100%',
                    border: '1px none',
                    borderRadius: '1rem',
                    color: 'black',
                    fontFamily: 'Prompt',
                    backgroundColor: '#FFC51B',
                  }}>
                  ชำระเงิน
                </Button>
              </div>
             
              </div>
              
                <div className='flex justify-between pb-3'>
                  
                  <p className='font-prompt md:text-2xl xl:text-2xl font-bold'>฿99999</p>
                </div>
                <div className='border border-bgrey'></div>
                <div className='pt-5'>
                  <p className="font-prompt phone:text-sm sm:text-xl  md:text-2xl xl:text-2xl font-bold pb-3">ยอดสุทธิ</p>
                  <p className="font-prompt phone:text-sm sm:text-sm md:text-xl xl:text-xl">(ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)</p>
                </div>
              </div>
            </div>
          </div>
          
           
       
         
        )}
     
    </section>
  )
}

export default PersonInform