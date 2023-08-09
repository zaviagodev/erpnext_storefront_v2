import FooterMenu from "../components/FooterMenu"
import searchIcon from '../img/search-md-black.svg'
import { useCart } from '../hooks/useCart';
import { ShoppingBag01, ChevronRight, ArrowLeft } from "@untitled-ui/icons-react";
import { Link } from "react-router-dom";
import newItem from '../img/new-item.png'

const ShopPage = () => {
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] text-md font-bold bg-white flex justify-between items-center'>
        <div className="flex items-center gap-x-[7px]">
          <Link to='/categories'>
            <ArrowLeft />
          </Link>
          ไอเท็มใหม่
        </div>
        {/* <img src={searchIcon} className="absolute translate-x-[10px] translate-y-[7px]"/>
        <input type="search" className="p-2 pl-10 bg-[#E6E6E6] rounded-[9px] font-medium w-full text-[13px]" placeholder='พิมพ์ชื่อสินค้า แบรนด์ ลักษณะสินค้า' /> */}
        <div>
          <button className="p-2">
            <img src={searchIcon} />
          </button>
          <button className="p-2">
            <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
          </button>
        </div>
      </header>
      <header className='bg-black text-white text-center py-[10px]'>
        สมาชิกใหม่รับ ของขวัญฟรี กดรับเลย !! 🎁
      </header>
      <main>
        <div className="p-5">
          <img src={newItem} width="100%"/>
        </div>

        <div className="border-b border-b-[#F2F2F2] flex">
          <Link to='/shop/filter' className='block p-4 w-1/2 border-r border-r-[#F2F2F2] text-center'>ประเภทสินค้า</Link>
          <Link to='/shop/type' className='block p-4 w-1/2 text-center'>ลักษณะสินค้า</Link>
        </div>
      </main>
    </>
  )
}

export default ShopPage