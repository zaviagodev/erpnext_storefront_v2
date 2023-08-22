import { ShoppingBag01, ArrowLeft, Phone01, CreditCard02, Scan } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import kplus from '../../img/kplus.svg'
import krungthainext from '../../img/krungthai-next.svg'
import krungsri from '../../img/krungsri.svg'
import scbeasy from '../../img/scb-easy.svg'
import bualuangm from '../../img/bualuangm.svg'

const MobileBanking = (num, link) => {
  const paymentLists = [
    {
      icon: (<img src={kplus} />),
      title: 'KPLUS',
      key: 'kplus',
      num: 0,
      link: ''
    },
    {
      icon: (<img src={krungthainext} />),
      title: 'Krungthai NEXT',
      key: 'krungthainext',
      num: 1,
      link: ''
    },
    {
      icon: (<img src={krungsri} />),
      title: 'KMA-Krungsri',
      key: 'kmakrungsri',
      num: 2,
      link: ''
    },
    {
      icon: (<img src={scbeasy} />),
      title: 'SCB Easy',
      key: 'scbeasy',
      num: 3,
      link: ''
    },
    {
      icon: (<img src={bualuangm} />),
      title: 'BualuangM',
      key: 'bualuangm',
      num: 4,
      link: ''
    },
  ]

  const [redirect, setRedirect] = useState(link);
  const [active, setActive] = useState(num);

  return (
    <>
      <header className={`p-[14px] border-b border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center fixed top-0 z-[999] w-full`}>
        <div className="flex items-center gap-x-[7px]">
          <Link to='/payment-details'>
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
      <main className="mt-[53px] mb-[88px] p-5">
        <h2 className="mb-3 text-[#333333] font-bold">เลือกบัญชีธนาคารของคุณ</h2>
        <div className="flex flex-col gap-y-4">
          {paymentLists.map((list, index) => 
            <label htmlFor={list.key} className={`flex justify-between p-5 w-full border items-center rounded-[7px] ${list.num === active ? "border-[#70DFA3] bg-[#F0FFF7]" : "border-[#F2F2F2]"}`}>
              <div className='text-left'>
                <h2 className='text-[#333333] text-sm font-bold flex items-center gap-x-3'>
                  {list.icon}
                  {list.title}
                </h2>
              </div>
              <div className="flex items-center">
                <input type="radio" id={list.key} name="payment-details-method" className='payment-details-check' onChange={() => {setRedirect(list.link);setActive(list.num);}}/>
                <span className='payment-details-radios'></span>
              </div>
            </label>
          )}
        </div>
      </main>
      <footer className="p-5 fixed bottom-0 w-full">
        <Link to={redirect} className='w-full block bg-[#111111] text-white rounded-[9px] p-3 text-center'>ดำเนินการต่อ</Link>
      </footer>
    </>
  )
}

export default MobileBanking;