import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useCart } from './context/CartContext'


function TotalPrice () {
    const { totalPrice } = useCart();
    const navigate = useNavigate(); 

    const VAT_RATE = 0.07;

    const totalPriceExcludingVAT = totalPrice/(1 + VAT_RATE);

    const totalPriceIncludingVAT = totalPrice;

    const handleConfirmBasketOpen = () => {
        navigate('/ConfirmBasket')
      }

    return (
        <>
            <div className='phone:p-[5%] xl:pl-[10%] xl:pr-[10%]'>
                <div className='w-full bg-white border border-bgrey rounded-2xl p-6'>
                    <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl font-bold pb-3">
                        สรุปคำสั่งซื้อ
                    </p>  
                    <div className='flex justify-between pb-3'>
                        <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl">
                            ราคา
                        </p>
                        <p className='font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl'>
                            <p>{totalPriceExcludingVAT.toFixed(2)}฿</p> 
                        </p>
                        <div className='border border-bgrey'></div>
                    </div>
                    <div className='pt-5'>
                        <p className="font-prompt phone:text-sm sm:text-xl md:text-2xl xl:text-2xl font-bold pb-3">
                            ยอดสุทธิ
                        </p>
                        <p className="font-prompt phone:text-sm sm:text-sm md:text-xl xl:text-xl">
                            (ราคานี้รวมภาษีมูลค่าเพิ่มแล้ว)
                        </p>
                        <p>{totalPriceIncludingVAT.toFixed(2)}</p> {/* toltal price that inClude VAT */}
                    </div>
                    <div className='pb-3'>
                        <Button
                            onClick= {handleConfirmBasketOpen}
                            sx={{
                            width: '100%',
                            borderRadius: '1rem',
                            color: 'black',
                            fontFamily: 'Prompt',
                            backgroundColor: '#FFC51B',
                            }}
                            >
                            ชำระเงิน
                        </Button>
                    </div>
                </div>
            </div>
        </>
    
  )
}

export default TotalPrice
