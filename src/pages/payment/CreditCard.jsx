import { ShoppingBag01, ArrowLeft, Phone01, CreditCard02, Scan, HelpCircle } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import creditcards from '../../img/creditcards.svg'

const CreditCard = () => {
  const tooltipHide = {
    visibility:"hidden",
    opacity:"0",
    transform:"translateY(9px)",
    transition:"all 300ms"
  }

  const tooltipShow = {
    visibility:"visible",
    opacity:"1",
    transform:"translateY(6px)",
    filter:"drop-shadow(0 12px 16px #10182814)",
    transition:"all 300ms",
  }

  const [showTooltipCVV, setShowTooltipCVV] = useState(tooltipHide);
  const [setAsDefault, setSetAsDefault] = useState(false);

  const Toggle = () => {
    return (
      <label className="set-as-default-card" htmlFor="switch-default-card">
        <input type="checkbox" id="switch-default-card" class="switch-card-input"/>
        <span className="switch-default-card-toggle"></span>
      </label>
    )
  }

  return (
    <>
      <header className={`p-[14px] border-b border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center fixed top-0 z-[999] w-full`}>
        <div className="flex items-center gap-x-[7px]">
          <Link to='/categories'>
            <ArrowLeft />
          </Link>
          ช่องทางชำระ
        </div>

        <div className="flex items-center">
          <button className="px-2" onClick={() => setIsOpen(true)}>
            <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
          </button>
        </div>
      </header>
      <main className='p-5 mt-[53px]'>
        <form action="#" className='flex flex-col gap-y-5'>
          <img src={creditcards} className="w-fit"/>
          <div className='flex flex-col'>
            <label htmlFor='card-number'>หมายเลขบัตร</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-number' name='card-number' type='text' placeholder='0-000-000-00-0-0'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='card-name'>ชื่อที่แสดงบนบัตร</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='card-name' name='card-name' type='text'/>
          </div>

          <div className='flex gap-x-[11px]' style={{width:"calc(100% - 11px)"}}>
            <div className='flex flex-col w-1/2'>
              <label htmlFor='expiry-date'>วันหมดอายุ</label>
              <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='expiry-date' name='expiry-date' type='text' placeholder='12/25'/>
            </div>
            <div className='flex flex-col w-1/2'>
              <label htmlFor='cvv'>CVV</label>
              <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='cvv' name='cvv' type='text'/>
              <div className='absolute right-[31px] translate-y-[47px]' onMouseEnter={() => setShowTooltipCVV(tooltipShow)} onMouseLeave={() => setShowTooltipCVV(tooltipHide)}>
                <HelpCircle color="#333333" viewBox='0 0 24 24' width='18' height='18'/>
              </div>
              <div className='absolute right-[11px]' style={showTooltipCVV}>
                <div className='bg-[#8A8A8A] px-3 py-2 rounded-[12px] text-white right-[18px] z-[9]'>
                  <p className='text-xs'>เลข 3 ตัว หลังบัตรของคุณ</p>
                </div>
                <div className='w-[12px] h-[12px] inline-block bg-[#8A8A8A] z-[6] rounded-[1px] rotate-45 relative bottom-[12px] left-[127px]'/>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <label htmlFor='card-number'>ตั้งค่าเป็นบัตรค่าเริ่มต้น</label>
            <Toggle />
          </div>
        </form>
      </main>
    </>
  )
}

export default CreditCard