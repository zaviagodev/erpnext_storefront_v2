import { ChevronRight } from "@untitled-ui/icons-react";
import TitleHeader from "../components/TitleHeader";
import silverFront from '../img/silver-front.png'
import { Link } from "react-router-dom";
import { useState } from "react";

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
          <div className='py-5 px-2 w-full flex'>
            <h2>ระดับ: {level}</h2>
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