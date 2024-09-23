import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';

import SideBarWith from '../../../sideBar/sideBarWith';
import SideBarPhone from '../../../sideBar/sideBarPhone';
import Navlog from '../../Navlog';
import Footer from '/src/components/firstpage/components/footer/Footer';


const TopUp = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
   

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 800);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

   
  return (
    <div>
        <Navlog/>
        {isMobile && (
            <div className='w-full bg-grey pb-[100%] '>
                <div className='flex  bg-white'>

                </div>
            </div>
                    
        
        )}:(

        )
        <div>
        <div>

        </div>
        </div>
    <Footer/>
    </div>
  )
}

export default TopUp