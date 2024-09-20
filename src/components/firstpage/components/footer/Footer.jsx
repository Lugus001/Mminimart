import React from 'react'

const Footer = () => {
  return (
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

  )
}

export default Footer