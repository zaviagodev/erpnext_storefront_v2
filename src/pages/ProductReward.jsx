import { useCounter } from 'react-use';
import { clamp } from '@storefront-ui/shared';
import { React, useState, useContext, useEffect } from 'react';
import {
  SfButton,
  SfLink,
  SfIconShoppingCart,
  SfIconSell,
  SfIconPackage,
  SfIconRemove,
  SfIconAdd,
  SfIconWarehouse,
  SfIconSafetyCheck,
  SfIconShoppingCartCheckout,
  SfIconFavorite,
  SfIconArrowForward,
  SfScrollable
} from '@storefront-ui/react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../hooks/useCart';
import { ArrowLeft, ShoppingBag01, Heart, CoinsStacked01, Truck01, AnnotationDots, Share04, SwitchHorizontal01 } from '@untitled-ui/icons-react';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';
import { useUser } from '../hooks/useUser';

const ProductReward = () => {
  const [rewardReddem, setRewardRedeem] = useState(false);
  const { id } = useParams();
  const { user } = useUser();
  const { get, products } = useProducts();
  const { cart, addToCart, cartCount, setIsOpen } = useCart();
  const product = get(id);
  const inputId = "useId('input')";
  const min = 1;
  const max = 999;
  const [value, { inc, dec, set }] = useCounter(min);
  const [colour, setColour] = useState("ส้ม")

  const StarsReview = ({score}) => {
    const totalStars = [];
    const filledStars = [];
    const unfilledStars = [];

    for (let i = 0; i < score; i++){
      filledStars.push(
        <svg className="w-4 h-4 text-[#FFB800]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      )
    }

    for (let i = 0; i < 5 - score; i++){
      unfilledStars.push(
        <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        </svg>
      )
    }

    totalStars.push(...filledStars, ...unfilledStars)

    return totalStars
  }

  const navigate = useNavigate()

  const items = [
    {
      title: "ตารางขนาด",
      content: (
        <>
          <div className='flex mb-9'>
            <button className='text-xs text-[#5B6CFF] w-1/3 text-center flex justify-center gap-x-[6px] items-center'>
              <AnnotationDots viewBox='0 0 24 24' width="18" height="18" />
              ติดต่อเรา
            </button>
            <button className='text-xs text-[#5B6CFF] w-1/3 text-center flex justify-center gap-x-[6px] items-center'>
              <Share04 viewBox='0 0 24 24' width="18" height="18" />
              แชร์สินค้า
            </button>
            <button className='text-xs text-[#5B6CFF] w-1/3 text-center flex justify-center gap-x-[6px] items-center'>
              <SwitchHorizontal01 viewBox='0 0 24 24' width="18" height="18" />
              เปรียบเทียบสินค้า
            </button>
          </div>
          <div className="flex mt-4">
            <CoinsStacked01 />
            <div className='block ml-3'>
              <h3 className="text-sm">Perks</h3>
              <p className="text-xs text-[#8A8A8A]">
                รับ Cashback & สิทธิพิเศษอีกมากมาย
              </p>
              <SfLink href="#" variant="secondary" className="text-[#5B6CFF] text-xs" style={{ textDecoration: "none" }}>
                ต้องทำอย่างไร
              </SfLink>
            </div>
          </div>
          <div className="flex mt-4">
            <Truck01 />
            <div className='block ml-3'>
              <h3 className="text-sm">ส่งฟรีเมื่อซื้อสินค้าครบ 990 บาท</h3>
              <p className="text-xs text-[#8A8A8A]">
                รอรับสินค้าได้เลย
              </p>
            </div>
          </div>
        </>
      )
    },
    {
      title: "วัสดุ",
      content: "Test"
    },
    {
      title: "คะแนนสินค้า",
      content: (
        <div className='flex gap-x-3'>
          <div className="flex items-center space-x-1">
            <StarsReview score={2}/>
          </div>

          <p className='text-[#5B6CFF]'>4.8/5.0</p>
          <p className='text-[#8A8A8A]'>(120 รีวิว)</p>
        </div>
      )
    }
  ]

  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white items-center fixed w-full bg-white top-0 z-[999]'>
        <Link onClick={() => navigate(-1)}>
          <ArrowLeft />
        </Link>
        {product?.item_name}
      </header>
      <main className="mx-auto mt-[53px]">
        <div className="relative flex w-full max-h-[600px] aspect-[4/3]">
          <SfScrollable
            className="relative w-full h-full snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            direction="vertical"
            wrapperClassName="w-full"
            buttonsPlacement="none"
            drag={{ containerWidth: true }}
          >
            <div className="flex justify-center h-full basis-full shrink-0 grow snap-center">
              <img
                src={product?.website_image !== null && `${import.meta.env.VITE_ERP_URL}${product?.website_image}`}
                className={`object-cover w-full h-full ${product?.website_image === null && "bg-[#C5C5C5]"}`}
                aria-label={product?.website_image}
                alt={product?.website_image}
              />
            </div>
          </SfScrollable>
        </div>
        <section className="-mt-2 px-4 pb-[120px]">
          <div className='pt-2'>
            <div className="w-full relative mx-auto z-10 bg-white px-4 py-[30px] rounded-[10px] -mt-[18px]" style={{ boxShadow: "0px 4px 20px 0px #2323231A", }}>
              <div className='text-center'>
                <button className='bg-[#E9F6ED] w-[66px] h-[19px] rounded-full px-[10px] py-[4px] text-[#00B14F] font-bold text-[10px] leading-[11.1px] eventpop'>ใช้หน้าร้าน</button>
                {rewardReddem && (
                  <div className='mt-[5px]'>
                    <button className='bg-[#F0F0F0] h-[19px] rounded-full px-[10px] py-[4px] text-[#8A8A8A] font-bold text-[10px] leading-[11.1px] eventpop'>แลกของรางวัลแล้ว</button>
                  </div>
                )}
                <p className='font-bold text-sm leading-[17px] text-[#111111] mt-2 eventpop'>{product?.item_name}</p>
              </div>
              <div className='w-[224px] flex justify-between mt-[22px] mx-auto'>
                <div>
                  <p className='text-[#00000061] font-normal text-xs leading-[17.4px] eventpop'>คะแนนที่ใช้</p>
                  <p className='font-bold text-sm text-[#00B14F] leading-[24px] eventpop'>{product?.loyalty_points_based_price} คะแนน</p>
                  <p className='text-[#00000061] font-normal text-[10px] leading-[14.5px] eventpop'>มูลค่า 350 บาท</p>
                </div>
                <hr className='w-[1px] h-[63px] border-r border-[#0000001A]' />
                <div>
                  <p className='text-[#00000061] font-normal text-xs leading-[17.4px] eventpop'>สามารถใช้ได้ถึง</p>
                  <p className='font-bold text-sm text-[#00B14F] leading-[24px] eventpop'>22 ม.ค. 2022</p>
                </div>
              </div>
            </div>

            <div className='px-[18px] pt-[30px]'>
              <h4 className='font-bold text-[#424242] text-sm leading-[23.2px] eventpop'>รายละเอียดรางวัล</h4>

              <div dangerouslySetInnerHTML={{ __html: product?.web_long_description }} className='text-[#424242] font-normal text-xs list-disc leading-[18px]' />
            </div>

            <div className='px-[18px] pt-[30px]'>
              <h4 className='font-bold text-[#424242] text-sm leading-[23.2px] eventpop'>รายละเอียด</h4>
              <ul className='mt-[9px] pr-[18px] pl-[22px] w-[294px]'>
                <li className='text-[#424242] font-normal text-xs list-disc leading-[18px] eventpop'>สมาชิกหลักเท่านั้นที่มีสิทธิใช้คะแนนเพื่อแลกรับ ของรางวัล</li>
                <li className='text-[#424242] font-normal text-xs list-disc leading-[18px] eventpop'>ขอสงวนสิทธิ์งดรับการแก้ไขเปลี่ยนแปลงใด หลังจากที่สมาชิกหลักแจ้งความประสงค์ขอแลก คะแนนสะสมไปยังบริษัทฯแล้ว</li>
                <li className='text-[#424242] font-normal text-xs list-disc leading-[18px] eventpop'>บริษัทฯขอแจ้งเปลี่ยนแปลงเงื่อนไขการแลกของรางวัล โดยมิได้แจ้งให้ทราบก่อนล่วงหน้า</li>
              </ul>
            </div>
            <div className="items-start flex fixed bottom-0 w-full pb-3 bg-white">
              <SfButton disabled={product?.loyalty_points_based_price > user?.loyalty_points} onClick={() => location.href = product?.item_group.includes("Gift") ? `/${product.item_code}/gift-checkout` : '/checkout'} type="button" size="lg" style={{ background: product?.loyalty_points_based_price > user?.loyalty_points ? "#C5C5C5" : "#111111", width: "calc(100% - 32px)", color:"white" }}> {/*onClick={() => addToCart(product?.item_code, value)} */}
                แลกของรางวัล
              </SfButton>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default ProductReward