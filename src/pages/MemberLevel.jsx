import { ChevronRight } from "@untitled-ui/icons-react";
import TitleHeader from "../components/TitleHeader";
import silverFront from '../img/silver-front.png'
import { Link } from "react-router-dom";
import { useState } from "react";
import coin from '../img/coin2.svg'

const MemberLevel = () => {
  const [level, setLevel] = useState('Silver')
  return (
    <>
      <TitleHeader link="/reward" title="ระดับสมาชิก"/>
      <header className='relative mt-[53px]' style={{background:`url(${silverFront})`,height:"200px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        <button className="flex justify-end px-[18px] py-3 gap-x-[9px] bg-[#57575780] w-full text-[13px] text-white items-center">
          สิทธิพิเศษจากระดับสมาชิก
          <ChevronRight viewBox="0 0 24 24" width='18' height='18' />
        </button>
      </header>
      <main className='px-5 relative top-[-40px]'>
        <div className='bg-white rounded-[6px] items-center' style={{filter:"drop-shadow(0 4px 20px #6363630D"}}>
          <div className='py-5 px-6 w-full flex justify-between items-center'>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-bold">ระดับ: {level}</h2>
              <p className="text-[#424242] text-xs">อีก 23 คะแนนเลื่อนเป็น Gold</p>
            </div>
            <div className="flex flex-col text-end">
              <p className="text-[#333333] text-xs font-bold flex items-center gap-x-[5px]">
                <img src={coin} />
                คะแนน
              </p>
              <h1 className="text-[22px] text-[#333333] font-bold leading-[22px]">50</h1>
            </div>
          </div>

          <hr style={{borderColor:"#F2F2F2"}}/>

          <div className='inline-block w-full'>
            <Link to='/reward-history'>
              <button className='py-4 text-center my-2 w-1/2 border-r border-r-[#F2F2F2] text-[#333333] text-[15px] font-bold'>คะแนนใกล้หมดอายุ</button>
            </Link>
            <Link to='/member-level'>
              <button className='py-4 text-center my-2 w-1/2 text-[#333333] text-[15px] font-bold'>ประวัติการใช้งานคะแนน</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default MemberLevel;