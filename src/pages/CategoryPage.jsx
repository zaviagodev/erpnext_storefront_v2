import FooterMenu from "../components/FooterMenu"
import searchIcon from '../img/search-md-black.svg'
import { useCart } from '../hooks/useCart';
import { ShoppingBag01, ChevronRight } from "@untitled-ui/icons-react";

const CategoryPage = () => {
  const { cartCount, setIsOpen } = useCart()

  const allCates = ['ไอเท็มใหม่', 'เสื้อ', 'กางเกง', 'กระโปรง', 'รองเท้า']

  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] text-md font-bold bg-white flex gap-x-2'>
        <img src={searchIcon} className="absolute translate-x-[10px] translate-y-[7px]"/>
        <input type="search" className="p-2 pl-10 bg-[#E6E6E6] rounded-[9px] font-medium w-full text-[13px]" placeholder='พิมพ์ชื่อสินค้า แบรนด์ ลักษณะสินค้า' />
        <button className="p-2">
          <ShoppingBag01 viewBox='0 0 24 24' width="22" height="22"/>
        </button>
      </header>
      <header className='bg-black text-white text-center py-[10px]'>
        สมาชิกใหม่รับ ของขวัญฟรี กดรับเลย !! 🎁
      </header>
      <main>
        <nav className="border-b border-b-[#F2F2F2] overflow-auto">
          <ul className="flex">
            <li className="px-[60px] py-5">ALL</li>
            <li className="px-[60px] py-5">WOMEN</li>
            <li className="px-[60px] py-5">MEN</li>
          </ul>
        </nav>
        <div className="flex relative">
          <div className="flex flex-col grow">
            {allCates.map((cate) => {
              return (
                <button className='flex justify-between items-center px-5 py-[17px] w-full border-b border-b-[#E3E3E3]'>
                  <div className='flex gap-x-[10px]'>
                    {cate}
                  </div>
                  <div>
                    <ChevronRight />
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </main>
      <FooterMenu active={1}/>
    </>
  )
}

export default CategoryPage