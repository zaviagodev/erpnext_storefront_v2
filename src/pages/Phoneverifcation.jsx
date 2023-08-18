import { useRef, useState } from "react"
import { ArrowLeft, MarkerPin01 } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { phonverifynow } from '../utils/phoneverify';

const Phonverify = () => {
  const [filledInfo, setFilledInfo] = useState(false)
  const [userphone, Setuserphone] = useState('');
  const [show, setShow] = useState("false");


  const handleChange = event => {
    const value = event.target.value.replace(/\D/g, "");
    Setuserphone(value);
  };

  const clickverify = (value) => {
    if(userphone.length > 7){
      phonverifynow(userphone);
      setShow()
    }
    
  }


  return (
    <>
   
      <main className='px-5 py-[46px]'>
          <div className='flex flex-col relative'>
              <label htmlFor='phone'>เบอร์โทร</label>
              <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' onChange={handleChange} value={userphone} id='phone' name='phone' type='tel'/>
              <button onClick={clickverify} className="absolute translate-y-[38px] right-[4px] bg-black text-white px-3 py-[6px] rounded-[6px]">Send</button>
              
              
              <input className={`${show ? "invisible" : "visible"} border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]`} placeholder="OTP"  id='otp' name='otp' type='tel'/>
              <button className={`${show ? "invisible" : "visible"} text-white rounded-[9px] p-3 w-full bg-[#00A950] font-bold flex items-center justify-center mt-8`}>แจ้งโอนเงิน</button>
          </div>
      </main>
      <footer className='flex px-5 pb-5 gap-x-3'>
      </footer>
    </>
  )
}

export default Phonverify