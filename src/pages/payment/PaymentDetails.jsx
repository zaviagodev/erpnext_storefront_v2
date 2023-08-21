import { ShoppingBag01, ArrowLeft, Phone01 } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import promptpay from '../../img/promptpay.svg'
import truemoney from '../../img/truemoney.svg'
import { useRef } from "react";

const PaymentDetails = ({active}) => {
  const paymentLists = [
    {
      icon: (<Phone01 />),
      title: 'Mobile banking',
      key: 'mobile-banking'
    },
    {
      icon: (<img src={promptpay} />),
      title: 'QR พร้อมเพย์',
      key: 'promptpay'
    },
    {
      icon: (<img src={truemoney} />),
      title: 'True Money Wallet',
      key: 'truemoney'
    }
  ]

  const Choices = ({icon, title, key, current}) => {
    return (
      <label htmlFor={key} className={`flex justify-between p-5 w-full border items-center rounded-[7px] ${current === active ? "border-[#70DFA3]" : "border-[#F2F2F2]"}`}>
        <div className='text-left'>
          <h2 className='text-[#333333] text-sm font-bold flex items-center gap-x-3'>
            {icon}
            {title}
          </h2>
        </div>
        <div className="flex items-center">
          <input type="radio" id={key} name="payment-details-method" className='payment-details-check'/>
          <span className='payment-details-radios'></span>
        </div>
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
      <main className="mt-[53px] p-5">
        <h2 className="mb-3 text-[#333333] font-bold">เลือกช่องทางชำระเงิน</h2>
        <div className="flex flex-col gap-y-4">
          {paymentLists.map((list, index) => 
            <Choices icon={list.icon} title={list.title} key={list.key} current={index}/>
          )}
        </div>
      </main>
    </>
  )
}

export default PaymentDetails;