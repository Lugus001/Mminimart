import { DialogContent } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import Logo from '/src/assets/Logo.png';
import basket from '/src/assets/basket.png';



const NavBar = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <nav className="w-full h-[6rem] bg-grey border-b-bgrey">
        <div className='inline-flex w-full mb-6 justify-between'>
          <img src={Logo} alt="Logo" className="h-25 w-24" />
          <div className='grid gap-1 md:grid-cols-2 mt-8'>
            <label htmlFor='ค้นหาสินค้า' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              <div className="relative w-full">
                <input
                  type='text'
                  id="ค้นหาสินค้า"
                  className='bg-white border border-bgrey rounded-full block w-full h-9 p-2.5 font-prompt text-bg'
                  placeholder='ค้นหาสินค้า... '
                />
                <button type='button' className="absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-orange-100 rounded-xl min-w-[2rem] max-[700px] min-[300]:w-[10rem] h-full md:w-10 md:h-full hover:bg-yellow font-prompt text-black text-sm sm:text-sm">
                  ค้นหา
                </button>
              </div>
            </label>
          </div>
          <img src={basket} alt='basket' className="h-25 w-24" />
          <button type='button' className="border border-black rounded-full w-[15rem] h-10 m-7 font-prompt" onClick={handleDialogOpen}>
            เข้าสู่ระบบ
          </button>
        </div>
      </nav>
     
      <Dialog open={isDialogOpen} onClose={handleDialogClose}  PaperProps={{
          style: {
            width: '400px',
            maxWidth: '90%',
            borderRadius: '12px',
            padding: '16px',
          },
        }}>
       
          <p className='p-4 font-prompt text-xl text-center font-bold'>จำเป็นต้องเข้าสู่ระบบ</p>
          <div className=' border border-yellow-100 ml-[5rem]  mr-[5rem] '></div>
          <DialogContent>
            <p className='font-prompt text-center text-grey-300'>คุณจำเป็นต้องเข้าสู่ระบบก่อน </p>
            <p className='font-prompt text-center text-grey-300'>หากคุณต้องการที่จะซื้อสินค้ากับทางเรา</p>
          </DialogContent>
          <div className='inline-flex items-center '>

            <div className='p-5 ml-3'>
              <Button  
                onClick={handleDialogClose} 
                color="primary"   
                sx={{
                  width:'8rem',
                  border: '1px solid black',
                  borderRadius: '1rem',
                  fontFamily: 'Prompt',
                  color: 'black', '&:hover': {
                  backgroundColor: '#e5e5e5',},
                  
                }} > ปิดหน้าต่าง
              </Button>
            </div>
            <div className='p-5'>
              <Button  sx={{
                width:'8rem',
                border: '1px none ',
                borderRadius: '1rem',
                color: 'black', 
                fontFamily: 'Prompt',
                backgroundColor: '#FFC51B',
                  }}>
                เข้าสู่ระบบ
              </Button>
  
            </div>
          </div>
          
         

  
        
        
          
      </Dialog>
     
    </>
  );
};
 




export default NavBar;
