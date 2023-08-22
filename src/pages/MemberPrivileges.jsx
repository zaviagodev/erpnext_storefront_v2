import { useState } from "react"
import TitleHeader from "../components/TitleHeader"
import bronzeMember from '../img/bronze-member.png'
import silverMember from '../img/silver-member.png'
import goldMember from '../img/gold-member.png'
import diamondMember from '../img/diamond-member.png'
import { ShoppingBag02, Star01, Mail01 } from "@untitled-ui/icons-react"

const MemberPrivileges = (current) => {
  const tabs = [
    {
      title: 'สมาชิก',
      type: 'bronze'
    },
    {
      title: 'ซิลเวอร์',
      type: 'silver'
    },
    {
      title: 'โกลด์',
      type: 'gold'
    },
    {
      title: 'ไดมอนด์',
      type: 'diamond'
    }
  ]

  const [type, setType] = useState('bronze');

  const PrivilegeList = ({icon, title, desc}) => {
    return (
      <div className="flex items-center">
        <div className="bg-[#F3F3F3] rounded-[99px] p-[10px]">
          {icon}
        </div>
        <div className="ml-3">
          <h2 className="text-[#333333] text-sm font-bold">{title}</h2>
          <p className="text-[#8A8A8A] text-xs">{desc}</p>
        </div>
      </div>
    )
  }

  const bronzePrivileges = [
    {
      icon: (<ShoppingBag02 />),
      title: "Privilege",
      desc: "สิทธิพิเศษจากทางร้านและสินค้าที่ร่วมรายการ"
    },
    {
      icon: (<Star01 />),
      title: "Point",
      desc: "สะสมคอยน์เพื่อแลกรับสิทธิประโยชน์ต่างๆ"
    },
    {
      icon: (<Mail01 />),
      title: "News",
      desc: "รับรู้ข่าวสารและโปรโมชั่นก่อนใคร"
    },
  ]

  return (
    <>
      <TitleHeader link='/reward' title='สิทธิพิเศษจากระดับสมาชิก' />
      <header className="mt-[53px] fixed w-full top-0">
        <button className='w-1/4' onClick={() => setType('bronze')}>
          <span className={`p-4 inline-block text-xs ${type === 'bronze' ? "text-[#111111]" : "text-[#8A8A8A]"}`}>สมาชิก</span>
          {type === 'bronze' && (
            <div className="w-full h-[2px] bg-[#111111] border-anim"></div>
          )}
        </button>
        <button className='w-1/4' onClick={() => setType('silver')}>
          <span className={`p-4 inline-block text-xs ${type === 'silver' ? "text-[#111111]" : "text-[#8A8A8A]"}`}>ซิลเวอร์</span>
          {type === 'silver' && (
            <div className="w-full h-[2px] bg-[#111111] border-anim"></div>
          )}
        </button>
        <button className='w-1/4' onClick={() => setType('gold')}>
          <span className={`p-4 inline-block text-xs ${type === 'gold' ? "text-[#111111]" : "text-[#8A8A8A]"}`}>โกลด์</span>
          {type === 'gold' && (
            <div className="w-full h-[2px] bg-[#111111] border-anim"></div>
          )}
        </button>
        <button className='w-1/4' onClick={() => setType('diamond')}>
          <span className={`p-4 inline-block text-xs ${type === 'diamond' ? "text-[#111111]" : "text-[#8A8A8A]"}`}>ไดมอนด์</span>
          {type === 'diamond' && (
            <div className="w-full h-[2px] bg-[#111111] border-anim"></div>
          )}
        </button>
      </header>

      <main className="mt-[103px]">
        <section className='py-[80px] w-3/4 h-full mx-auto relative bottom-0' style={{background:`url(${bronzeMember})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"}}>
          <div className="m-auto z-[5] w-[90%] relative">
            <h2>ระดับ : สมาชิก</h2>
            <p>คะแนนตั้งแต่ 0 - 49 คะแนน</p>
          </div>
        </section>
        <section className="px-5 pt-[30px]">
          <h2 className="text-[#333333] font-bold">สิทธิพิเศษทุกไลฟ์สไตล์</h2>
          <div className="flex flex-col gap-y-[18px] mt-[10px]">
            {bronzePrivileges.map((privilege) => 
              <PrivilegeList icon={privilege.icon} title={privilege.title} desc={privilege.desc}/>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default MemberPrivileges