import React, { useEffect, useState } from 'react';
import SideBarPhone from '../../sideBar/sideBarPhone';
import SideBarWith from '../../sideBar/sideBarWith';
import Navlog from '../Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';



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

        {isMobile &&(
          <div>
            <div className='w-full bg-grey pb-[100%]'>
                <div className='flex  bg-white '>
                  <SideBarPhone/>
                <div className='w-full  bg-white border border-bgrey p-3  '>
                <div className='flex ' >
                <svg width="24" height="18" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0625 15.9375C18.6562 14.25 16.875 13.0781 14.9062 12.4687C16.875 11.4375 18.1875 9.375 18.1875 6.98437C18.1875 3.5625 15.4219 0.75 11.9531 0.75C8.48438 0.75 5.76563 3.60937 5.76563 7.03125C5.76563 9.375 7.07813 11.4375 9.04688 12.5156C7.07813 13.125 5.34375 14.2969 3.89062 15.9844C1.82812 18.4219 0.65625 21.7969 0.609375 25.5C0.609375 25.9219 0.84375 26.2969 1.17187 26.4375C2.4375 27.0937 7.03125 29.1562 11.9531 29.1562C17.2969 29.1562 21.5625 27.0469 22.7812 26.3906C23.1094 26.2031 23.3438 25.8281 23.3438 25.4531C23.2969 21.7969 22.125 18.4219 20.0625 15.9375ZM12 2.95312C14.25 2.95312 16.125 4.78125 16.125 7.07812C16.125 9.375 14.2969 11.2031 12 11.2031C9.70312 11.2031 7.875 9.375 7.875 7.07812C7.875 4.78125 9.75 2.95312 12 2.95312ZM12 27.0937C8.10937 27.0937 4.3125 25.5937 2.76563 24.8437C2.95313 21.8906 3.89063 19.2656 5.53125 17.2969C7.21875 15.2813 9.51562 14.1562 12 14.1562C14.4844 14.1562 16.7812 15.2813 18.4687 17.2969C20.1094 19.2188 21.0937 21.8906 21.2344 24.8437C19.7813 25.5937 16.2187 27.0937 12 27.0937Z" fill="#111928"/>
                </svg>

                  <p className="font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-xl  pr-[10%]  pb-2">ข้อมูลส่วนตัว</p>
                    <div className='pl-[25%]'>
                      <button type='button' className='flex '>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3248 4.46248C23.3248 4.16248 23.2123 3.86248 22.9873 3.63748C22.5373 3.18748 22.0873 2.73748 21.6748 2.28748C21.2623 1.87498 20.8873 1.46248 20.4748 1.08748C20.2873 0.86248 20.0623 0.71248 19.7623 0.67498C19.4248 0.63748 19.1248 0.71248 18.8623 0.93748L16.3123 3.48748H3.0373C1.7623 3.48748 0.674805 4.53748 0.674805 5.84998V21C0.674805 22.275 1.7248 23.3625 3.0373 23.3625H18.2248C19.4998 23.3625 20.5873 22.3125 20.5873 21V7.68748L23.0248 5.24998C23.2123 5.02498 23.3248 4.76248 23.3248 4.46248ZM12.2998 13.5C12.2623 13.5375 12.2623 13.5375 12.2248 13.5375L9.52481 14.4375L10.4248 11.7375C10.4248 11.7 10.4623 11.7 10.4623 11.6625L17.2123 4.91248L19.0873 6.74998L12.2998 13.5ZM18.8623 21C18.8623 21.375 18.5623 21.675 18.1873 21.675H3.0373C2.6623 21.675 2.3623 21.375 2.3623 21V5.81248C2.3623 5.43748 2.6623 5.13748 3.0373 5.13748H14.5873L9.26231 10.5C9.07481 10.6875 8.88731 10.95 8.81231 11.25L7.42481 15.45C7.3123 15.75 7.38731 16.0125 7.53731 16.275C7.64981 16.425 7.87481 16.65 8.28731 16.65H8.43731L12.7498 15.225C13.0123 15.15 13.2748 14.9625 13.4623 14.775L18.8623 9.37498V21ZM20.2498 5.58748L18.3748 3.74998L19.5373 2.58748C19.8373 2.88748 21.0748 4.12498 21.3748 4.46248L20.2498 5.58748Z" fill="#111928"/>
                        </svg>
                          <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>แก้ไขข้อมูล</p>
                      </button>

                    </div>
                      
                </div>
                
                  <div className=' p-4'>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>ชื่อร้าน :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>ร้านทศกัณ</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>ชื่อเจ้าของร้าน :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>นายทศกัณ มานะ</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>เบอร์โทร :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>067-456-7894</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>วันที่สมัคร :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>16 ก.ค. 2567</p>
                    </div>
                   
                  </div>

                  <div>
                    <div className='flex '>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.625 6.26245C17.625 3.14995 15.1125 0.637451 12 0.637451C8.8875 0.637451 6.375 3.14995 6.375 6.26245C6.375 9.07495 8.4375 11.4 11.1375 11.8125V22.4999C11.1375 22.9499 11.5125 23.3624 12 23.3624C12.45 23.3624 12.8625 22.9874 12.8625 22.4999V11.8125C15.525 11.4 17.625 9.07495 17.625 6.26245ZM12 10.2C9.825 10.2 8.0625 8.43745 8.0625 6.26245C8.0625 4.08745 9.825 2.32495 12 2.32495C14.175 2.32495 15.9375 4.08745 15.9375 6.26245C15.9375 8.43745 14.175 10.2 12 10.2Z" fill="#111928"/>
                        <path d="M12.9749 3.1875C11.8124 3.1875 10.8374 4.125 10.8374 5.325C10.8374 6.525 11.7749 7.4625 12.9749 7.4625C14.1749 7.4625 15.1124 6.525 15.1124 5.325C15.1124 4.125 14.1374 3.1875 12.9749 3.1875ZM12.9749 5.7375C12.7499 5.7375 12.5249 5.55 12.5249 5.2875C12.5249 5.025 12.7124 4.8375 12.9749 4.8375C13.2374 4.8375 13.4249 5.025 13.4249 5.2875C13.4249 5.55 13.1999 5.7375 12.9749 5.7375Z" fill="#111928"/>
                      </svg>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>ที่อยู่ร้านค้า</p>
                    </div>
                    <div className='ml-5 mt-1'>
                      <p  className='font-prompt phone:text-xs sm:text-md md:text-xl '>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ 
                    ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</p>
                    </div>
                    
                    

                    
                  </div>  
                      
                </div>
                
                </div>
                
              </div>

          </div>
              
          

        )}
      
  
        {!isMobile && (
          <div className=''>
            <div className='w-full bg-grey  pr-[5%] pb-[24%]'>

            <div className='flex  pt-[2%]'>
              <SideBarWith/>
            <div className='w-full bg-white border border-bgrey rounded-2xl p-6  '>
              <div className='flex ' >
              <svg width="25" height="25" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.0625 15.9375C18.6562 14.25 16.875 13.0781 14.9062 12.4687C16.875 11.4375 18.1875 9.375 18.1875 6.98437C18.1875 3.5625 15.4219 0.75 11.9531 0.75C8.48438 0.75 5.76563 3.60937 5.76563 7.03125C5.76563 9.375 7.07813 11.4375 9.04688 12.5156C7.07813 13.125 5.34375 14.2969 3.89062 15.9844C1.82812 18.4219 0.65625 21.7969 0.609375 25.5C0.609375 25.9219 0.84375 26.2969 1.17187 26.4375C2.4375 27.0937 7.03125 29.1562 11.9531 29.1562C17.2969 29.1562 21.5625 27.0469 22.7812 26.3906C23.1094 26.2031 23.3438 25.8281 23.3438 25.4531C23.2969 21.7969 22.125 18.4219 20.0625 15.9375ZM12 2.95312C14.25 2.95312 16.125 4.78125 16.125 7.07812C16.125 9.375 14.2969 11.2031 12 11.2031C9.70312 11.2031 7.875 9.375 7.875 7.07812C7.875 4.78125 9.75 2.95312 12 2.95312ZM12 27.0937C8.10937 27.0937 4.3125 25.5937 2.76563 24.8437C2.95313 21.8906 3.89063 19.2656 5.53125 17.2969C7.21875 15.2813 9.51562 14.1562 12 14.1562C14.4844 14.1562 16.7812 15.2813 18.4687 17.2969C20.1094 19.2188 21.0937 21.8906 21.2344 24.8437C19.7813 25.5937 16.2187 27.0937 12 27.0937Z" fill="#111928"/>
                </svg>
                <p className="font-prompt phone:text-sm sm:text-xl  md:text-xl xl:text-xl  pr-[45%]  pb-2">ข้อมูลส่วนตัว</p>
                <div className=' flex'>
                  <div className='pr-5'>
                  <div >
                      <button type='button' className='flex '>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3248 4.46248C23.3248 4.16248 23.2123 3.86248 22.9873 3.63748C22.5373 3.18748 22.0873 2.73748 21.6748 2.28748C21.2623 1.87498 20.8873 1.46248 20.4748 1.08748C20.2873 0.86248 20.0623 0.71248 19.7623 0.67498C19.4248 0.63748 19.1248 0.71248 18.8623 0.93748L16.3123 3.48748H3.0373C1.7623 3.48748 0.674805 4.53748 0.674805 5.84998V21C0.674805 22.275 1.7248 23.3625 3.0373 23.3625H18.2248C19.4998 23.3625 20.5873 22.3125 20.5873 21V7.68748L23.0248 5.24998C23.2123 5.02498 23.3248 4.76248 23.3248 4.46248ZM12.2998 13.5C12.2623 13.5375 12.2623 13.5375 12.2248 13.5375L9.52481 14.4375L10.4248 11.7375C10.4248 11.7 10.4623 11.7 10.4623 11.6625L17.2123 4.91248L19.0873 6.74998L12.2998 13.5ZM18.8623 21C18.8623 21.375 18.5623 21.675 18.1873 21.675H3.0373C2.6623 21.675 2.3623 21.375 2.3623 21V5.81248C2.3623 5.43748 2.6623 5.13748 3.0373 5.13748H14.5873L9.26231 10.5C9.07481 10.6875 8.88731 10.95 8.81231 11.25L7.42481 15.45C7.3123 15.75 7.38731 16.0125 7.53731 16.275C7.64981 16.425 7.87481 16.65 8.28731 16.65H8.43731L12.7498 15.225C13.0123 15.15 13.2748 14.9625 13.4623 14.775L18.8623 9.37498V21ZM20.2498 5.58748L18.3748 3.74998L19.5373 2.58748C19.8373 2.88748 21.0748 4.12498 21.3748 4.46248L20.2498 5.58748Z" fill="#111928"/>
                        </svg>
                          <p className='font-prompt  md:text-xl pl-2'>แก้ไขข้อมูล</p>
                      </button>

                    </div>
                </div>
                
              </div>
             
              </div>
              <div className=' p-4'>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>ชื่อร้าน :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>ร้านทศกัณ</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>ชื่อเจ้าของร้าน :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>นายทศกัณ มานะ</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>เบอร์โทร :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>067-456-7894</p>
                    </div>
                    <div className='flex p-1'>
                      <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2 '>วันที่สมัคร :</p>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>16 ก.ค. 2567</p>
                    </div>
                   
                  </div>
                  <div className='flex '>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.625 6.26245C17.625 3.14995 15.1125 0.637451 12 0.637451C8.8875 0.637451 6.375 3.14995 6.375 6.26245C6.375 9.07495 8.4375 11.4 11.1375 11.8125V22.4999C11.1375 22.9499 11.5125 23.3624 12 23.3624C12.45 23.3624 12.8625 22.9874 12.8625 22.4999V11.8125C15.525 11.4 17.625 9.07495 17.625 6.26245ZM12 10.2C9.825 10.2 8.0625 8.43745 8.0625 6.26245C8.0625 4.08745 9.825 2.32495 12 2.32495C14.175 2.32495 15.9375 4.08745 15.9375 6.26245C15.9375 8.43745 14.175 10.2 12 10.2Z" fill="#111928"/>
                        <path d="M12.9749 3.1875C11.8124 3.1875 10.8374 4.125 10.8374 5.325C10.8374 6.525 11.7749 7.4625 12.9749 7.4625C14.1749 7.4625 15.1124 6.525 15.1124 5.325C15.1124 4.125 14.1374 3.1875 12.9749 3.1875ZM12.9749 5.7375C12.7499 5.7375 12.5249 5.55 12.5249 5.2875C12.5249 5.025 12.7124 4.8375 12.9749 4.8375C13.2374 4.8375 13.4249 5.025 13.4249 5.2875C13.4249 5.55 13.1999 5.7375 12.9749 5.7375Z" fill="#111928"/>
                      </svg>
                      <p className='font-prompt phone:text-xs sm:text-md md:text-xl '>ที่อยู่ร้านค้า</p>
                    </div>
                    <div className='ml-5 mt-1'>
                      <p  className='font-prompt phone:text-xs sm:text-md md:text-xl '>ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ 
                    ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200</p>
                    </div>
              </div>
              
            </div>
           
            </div>
          
          </div>
          
         
          
         
          
           
       
         
        )}
       <Footer/>
    </section>
  )
}

export default PersonInform