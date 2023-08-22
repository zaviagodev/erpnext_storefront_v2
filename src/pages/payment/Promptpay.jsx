import { ShoppingBag01, ArrowLeft, Phone01, CreditCard02, Scan } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import mockPromptpay from '../../img/mock-promptpay.png'

const Promptpay = () => {
  return (
    <>
      <header className={`p-[14px] border-b border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center fixed top-0 z-[999] w-full`}>
        <div className="flex items-center gap-x-[7px]">
          <Link to='/payment-details'>
            <ArrowLeft />
          </Link>
          QR พร้อมเพย์
        </div>

        <div className="flex items-center">
          <button className="px-2" onClick={() => setIsOpen(true)}>
            <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
          </button>
        </div>
      </header>
      <main className="mt-[53px] p-5">
        <img src={mockPromptpay} className="m-auto"/>
      </main>
      <footer className="p-5 w-full">
        <a href={mockPromptpay} className='w-full block bg-[#111111] text-white rounded-[9px] p-3 text-center' download>บันทึกรูป</a>
      </footer>
    </>
  )
}

export default Promptpay;