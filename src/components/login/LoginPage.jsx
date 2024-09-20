import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';

import Logo from '/src/assets/Logo.png';
import girl from '/src/assets/girl.png';
import girl3 from '/src/assets/girl3.png';
import message from '/src/assets/massege.png';

const LoginPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleLogin = () => {
    // Simulate login logic here
    setIsDialogOpen(true); // Show dialog on successful login
  };

  const handleLoginOpen = () => {
    navigate('/HomePage'); 
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className='bg-grey border border-bgrey min-h-screen flex flex-col'>
        <div className='w-full px-8 pb-16'>
          <img src={Logo} alt="Logo" className="w-[40%] my-8" />

          <div className={`w-full bg-white border border-bgrey rounded-2xl p-8 ${isMobile ? '' : 'flex'}`}>
            <div className={`${isMobile ? '' : 'w-1/2 pr-4'}`}>
              <div className='pb-4'>
                <p className='font-prompt text-orange font-extrabold text-xl'>เข้าสู่ระบบ</p>
              </div>
              <div>
                <p className='font-prompt text-sm p-3'>อีเมลหรือเบอร์โทรศัพท์</p>
                <input 
                  type='text'
                  id="Email/phoneNumber"
                  className='bg-grey border border-bgrey rounded-full block w-full h-10 p-2.5 font-prompt text-bg'
                  aria-label="Email or Phone Number"
                />
              </div>
              <div>
                <p className='font-prompt text-sm p-3'>รหัสผ่านของคุณ</p>
                <input 
                  type='password'
                  id="Password"
                  className='bg-grey border border-bgrey rounded-full block w-full h-10 p-2.5 font-prompt text-bg'
                  aria-label="Password"
                />
              </div>
              <div className='pt-5'>
                <Button 
                  onClick={handleLogin}
                  sx={{
                    width: '100%',
                    border: 'none',
                    borderRadius: '1rem',
                    color: 'black', 
                    fontFamily: 'Prompt',
                    backgroundColor: '#FFC51B',
                  }}
                >
                  เข้าสู่ระบบ
                </Button>
              </div>
            </div>

            {!isMobile && (
              <div className="relative w-full flex-1">
                <img src={girl3} alt="Girl" className="pt-8 w-full h-full object-cover" />
                <button type='button' onClick={() => { /* Handle click here */ }}>
                  <div className='absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 flex rounded-xl border border-white bg-white w-[30%] h-[14%] p-2'>
                    <img src={message} alt="Message" className='w-[40%]' />
                    <p className='font-prompt mt-2 text-sm'>ติดต่อเรา</p>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Only Section */}
        {isMobile && (
          <div className="relative w-full">
            <img src={girl} alt="Girl" className="w-full" />
            <p className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white font-prompt font-extrabold text-xl">
              เรายินดี ให้บริการ แก่คุณ
            </p>
            <button type='button' onClick={() => { /* Handle click here */ }}>
              <div className='absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2 phone:w-[30%] md:w-[20%] flex rounded-full border border-white bg-white'>
                <img src={message} alt="Message" className='phone:w-[35%]' />
                <p className='font-prompt xl:mt-8 phone:mt-4 phone:text-sm md:text-xl xl:text-4xl sm:text-xl'>ติดต่อเรา</p>
              </div>
            </button>
          </div>
        )}

        {/* Footer */}
        <div className='bg-orange w-full mt-auto'>
          <div className='p-4 flex flex-wrap justify-center items-center space-x-5'>
            <div><p className='font-prompt text-sm'>นโยบายการใช้คุกกี้</p></div>
            <div><p className='font-prompt text-sm'>การตั้งค่าคุ้กกี้</p></div>
            <div><p className='font-prompt text-sm'>ข้อกำหนดและเงื่อนไข</p></div>
            <div><p className='font-prompt text-sm'>เข้าร่วม M-minimart เป็นผู้ขาย</p></div>
          </div>
          <div className='mt-8 border border-grey-200'></div>
          <div className='flex justify-center items-center mt-8'>
            <p className='font-prompt text-sm'>ลิขสิทธิ์ © 2024 M-minimart สงวนลิขสิทธิ์.</p>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog 
        open={isDialogOpen} 
        PaperProps={{
          style: {
            width: '400px',
            maxWidth: '90%',
            borderRadius: '12px',
            padding: '16px', 
          }
        }}>
        <p className='p-4 font-prompt text-xl text-center font-bold'>คุณได้เข้าสู่ระบบเรียบร้อยแล้ว</p>
        <div className=' border border-yellow-100 ml-[5rem]  mr-[5rem] '></div>
        <DialogContent>
          <p className='font-prompt text-center text-grey-300'>M-minimart ของเราพร้อมมอบประสบการณ์</p>
          <p className='font-prompt text-center text-grey-300'>ช้อปปิ้งที่ดีที่สุดให้คุณเสมอ</p>
        </DialogContent>
        <div className='flex justify-center mt-4'>
          <Button  
            onClick={handleLoginOpen} 
            color="primary"   
            sx={{
              width:'8rem',
              border: '1px solid black',
              borderRadius: '1rem',
              fontFamily: 'Prompt',
              color: 'black',
              '&:hover': {
                backgroundColor: '#e5e5e5',
              }
            }}>
            ปิดหน้าต่าง
          </Button>
        </div>
      </Dialog>
    </>
  );
}

export default LoginPage;
