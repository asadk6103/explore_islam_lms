import React from 'react'
import Box from '../../../components/Box'
import VisaCardLogo from '@/assets/static/svgs/visa_logo.png'
import MasterCardCardLogo from '@/assets/static/svgs/master_card_logo.png'

const PaymentInfo = ({ cardType = "mm" }) => {
  return (
    <Box>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className={`${cardType === "Visa" ? "bg-gray-300" : "bg-purple-900"} rounded-2xl shadow-xl px-3 py-5 h-[200px] flex flex-col justify-between`}>
          <div className='flex flex-row items-end justify-end'>
            <img src={cardType === "Visa" ? VisaCardLogo : MasterCardCardLogo} alt='card-logo' className='w-[80px]' />
          </div>
          <div className=''>
            <div className='flex flex-row gap-4 px-4 mb-2 items-center w-[90%]'>
              <h2 className={`${cardType==="Visa" ? "text-dark" : "text-white"} font-bold text-xl  tracking-[0.25em] `}>4762</h2>
              <h2 className={`${cardType==="Visa" ? "text-dark" : "text-white"} font-bold text-xl  tracking-[0.25em] `}>****</h2>
              <h2 className={`${cardType==="Visa" ? "text-dark" : "text-white"} font-bold text-xl  tracking-[0.25em] `}>****</h2>
              <h2 className={`${cardType==="Visa" ? "text-dark" : "text-white"} font-bold text-xl  tracking-[0.25em] `}>**92</h2>
            </div>
            <h2 className={`${cardType==="Visa" ? "text-gray-900" : "text-gray-200"} px-4 font-semibold text-md uppercase tracking-[0.25em] mb-1`}>John Doe</h2>
            <h2 className={`px-4 ${cardType==="Visa" ? "text-gray-900" : "text-gray-200"} text-xs uppercase tracking-[0.25em] `}>Expiry: 10/26</h2>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default PaymentInfo
