import React, { useEffect, useState } from 'react';
import SideBarPhone from '../../../sideBar/sideBarPhone';
import SideBarWith from '../../../sideBar/sideBarWith';
import Navlog from '../../Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';

const PersonInform = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [person, setPerson] = useState({
    shopName: 'ร้านทศกัณ',
    ownerName: 'นายทศกัณ มานะ',
    phone: '067-456-7894',
    registrationDate: '16 ก.ค. 2567',
    address: 'ร้าน Tosagun 102 ม.4 ถ.รอบเมืองเชียงใหม่ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...person });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
    setFormData(person);
  };

  const handleSave = () => {
    setPerson(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <section>
      <Navlog />
      {isMobile ? (
        <div className='w-full bg-grey pb-[100%]'>
          <div className='flex bg-white'>
            <SideBarPhone />
            <div className='w-full bg-white border border-bgrey p-3'>
              <div className='flex'>
                <p className="font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-xl pr-[10%] pb-2">ข้อมูลส่วนตัว</p>
                <button type='button' onClick={handleEdit} className='flex pl-[25%]'>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                  <path d="M23.3248 4.46248C23.3248 4.16248 23.2123 3.86248 22.9873 3.63748C22.5373 3.18748 22.0873 2.73748 21.6748 2.28748C21.2623 1.87498 20.8873 1.46248 20.4748 1.08748C20.2873 0.86248 20.0623 0.71248 19.7623 0.67498C19.4248 0.63748 19.1248 0.71248 18.8623 0.93748L16.3123 3.48748H3.0373C1.7623 3.48748 0.674805 4.53748 0.674805 5.84998V21C0.674805 22.275 1.7248 23.3625 3.0373 23.3625H18.2248C19.4998 23.3625 20.5873 22.3125 20.5873 21V7.68748L23.0248 5.24998C23.2123 5.02498 23.3248 4.76248 23.3248 4.46248ZM12.2998 13.5C12.2623 13.5375 12.2623 13.5375 12.2248 13.5375L9.52481 14.4375L10.4248 11.7375C10.4248 11.7 10.4623 11.7 10.4623 11.6625L17.2123 4.91248L19.0873 6.74998L12.2998 13.5ZM18.8623 21C18.8623 21.375 18.5623 21.675 18.1873 21.675H3.0373C2.6623 21.675 2.3623 21.375 2.3623 21V5.81248C2.3623 5.43748 2.6623 5.13748 3.0373 5.13748H14.5873L9.26231 10.5C9.07481 10.6875 8.88731 10.95 8.81231 11.25L7.42481 15.45C7.3123 15.75 7.38731 16.0125 7.53731 16.275C7.64981 16.425 7.87481 16.65 8.28731 16.65H8.43731L12.7498 15.225C13.0123 15.15 13.2748 14.9625 13.4623 14.775L18.8623 9.37498V21ZM20.2498 5.58748L18.3748 3.74998L19.5373 2.58748C19.8373 2.88748 21.0748 4.12498 21.3748 4.46248L20.2498 5.58748Z" fill="#111928"/>
                </svg>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>ขอแก้ไขข้อมูล</p>
                </button>
              </div>
              <div className='p-4 '>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ชื่อร้าน :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} /> : person.shopName}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ชื่อเจ้าของร้าน :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} /> : person.ownerName}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>เบอร์โทร :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="phone" value={formData.phone} onChange={handleChange} /> : person.phone}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>วันที่สมัคร :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{person.registrationDate}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ที่อยู่ร้านค้า :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="address" value={formData.address} onChange={handleChange}/> : person.address}</p>
                </div>
                {isEditing && (
                  <div className=' flex '>
                    <div className='pl-[5%] pr-[10%] pt-[10%]'>
                        <button onClick={handleSave} className='btn-save w-[5rem]  bg-green border border-black rounded-md text-white'>บันทึก</button>

                    </div>

                    <div className='pl-[5%] pr-[10%] pt-[10%]'>
                      <button onClick={handleCancel} className='btn-cancel w-[5rem] bg-[#D92323]  rounded-md text-white '>ยกเลิก</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full bg-grey pr-[5%] pb-[24%]'>
          <div className='flex pt-[2%]'>
            <SideBarWith />
            <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
              <div className='flex'>
                <p className="font-prompt phone:text-sm sm:text-xl md:text-xl xl:text-xl pr-[45%] pb-2">ข้อมูลส่วนตัว</p>
                <button type='button' onClick={handleEdit} className='flex'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                  <path d="M23.3248 4.46248C23.3248 4.16248 23.2123 3.86248 22.9873 3.63748C22.5373 3.18748 22.0873 2.73748 21.6748 2.28748C21.2623 1.87498 20.8873 1.46248 20.4748 1.08748C20.2873 0.86248 20.0623 0.71248 19.7623 0.67498C19.4248 0.63748 19.1248 0.71248 18.8623 0.93748L16.3123 3.48748H3.0373C1.7623 3.48748 0.674805 4.53748 0.674805 5.84998V21C0.674805 22.275 1.7248 23.3625 3.0373 23.3625H18.2248C19.4998 23.3625 20.5873 22.3125 20.5873 21V7.68748L23.0248 5.24998C23.2123 5.02498 23.3248 4.76248 23.3248 4.46248ZM12.2998 13.5C12.2623 13.5375 12.2623 13.5375 12.2248 13.5375L9.52481 14.4375L10.4248 11.7375C10.4248 11.7 10.4623 11.7 10.4623 11.6625L17.2123 4.91248L19.0873 6.74998L12.2998 13.5ZM18.8623 21C18.8623 21.375 18.5623 21.675 18.1873 21.675H3.0373C2.6623 21.675 2.3623 21.375 2.3623 21V5.81248C2.3623 5.43748 2.6623 5.13748 3.0373 5.13748H14.5873L9.26231 10.5C9.07481 10.6875 8.88731 10.95 8.81231 11.25L7.42481 15.45C7.3123 15.75 7.38731 16.0125 7.53731 16.275C7.64981 16.425 7.87481 16.65 8.28731 16.65H8.43731L12.7498 15.225C13.0123 15.15 13.2748 14.9625 13.4623 14.775L18.8623 9.37498V21ZM20.2498 5.58748L18.3748 3.74998L19.5373 2.58748C19.8373 2.88748 21.0748 4.12498 21.3748 4.46248L20.2498 5.58748Z" fill="#111928"/>
                </svg>

                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>ขอแก้ไขข้อมูล</p>
                </button>
              </div>
              <div className='p-4'>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ชื่อร้าน :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} /> : person.shopName}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ชื่อเจ้าของร้าน :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} /> : person.ownerName}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>เบอร์โทร :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="phone" value={formData.phone} onChange={handleChange} /> : person.phone}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>วันที่สมัคร :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{person.registrationDate}</p>
                </div>
                <div className='flex p-1'>
                  <p className='font-prompt text-grey-300 phone:text-xs sm:text-md md:text-xl pr-2'>ที่อยู่ร้านค้า :</p>
                  <p className='font-prompt phone:text-xs sm:text-md md:text-xl'>{isEditing ? <input type="text" name="address" value={formData.address} onChange={handleChange} /> : person.address}</p>
                </div>
                {/* Other fields go here */}
                {isEditing && (
                   <div className=' flex '>
                   <div className='pl-[5%] pr-[10%] pt-[10%] w-full '>
                       <button onClick={handleSave} className='btn-save w-[10rem]  bg-green border border-black rounded-md text-white'>บันทึก</button>
                   </div>

                   <div className='pl-[5%] pr-[10%] pt-[10%]'>
                     <button onClick={handleCancel} className='btn-cancel w-[10rem] bg-[#D92323]  rounded-md text-white '>ยกเลิก</button>
                   </div>
                 </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default PersonInform;
