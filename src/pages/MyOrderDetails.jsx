import { Link, useParams } from "react-router-dom"
import { ArrowLeft, CreditCard02, ChevronRight, MarkerPin01, ShoppingBag01 } from "@untitled-ui/icons-react"
import { useFrappeGetDoc, useFrappeGetDocList } from "frappe-react-sdk"

const MyOrderDetails = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useFrappeGetDoc('Sales Invoice', id, {
    fields: ['name', 'address', 'status', 'due_date', 'customer_address']
  })

  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
        <Link to="/my-order">
          <span className="sr-only">Close panel</span>
          <ArrowLeft />
        </Link>
        คำสั่งซื้อของฉัน
      </header>
      <main className="p-5">
        {data && (
          <>
            <div className="flex gap-x-[6px] items-center text-xs font-bold">
              <div className={`w-3 h-3 bg-[${data.status == "Draft" ? "#EAB600" : data.status == "Paid" ? "#009FF0" : "#000000"}] rounded-[99px]`}/>
              {data.status == "Draft" ? "รอการชำระเงิน" : data.status == "Paid" ? "เตรียมการจัดส่ง" : data.status == "Cancelled" ? "ยกเลิก" : "รับที่สาขา"}
            </div>
            
            <Link to='' className='flex justify-between items-center py-[17px] w-full'>
              <div className='flex gap-x-[10px] font-bold text-[#333333] text-sm items-center'>
                <CreditCard02 />
                ช่องทางการชำระเงิน
              </div>
              <div>
                <ChevronRight />
              </div>
            </Link>
            
            <div className='bg-[#F4F4F4] p-5 rounded-[7px]'>
              <div className='flex justify-between'>
                <span className="text-[13px] text-[#8A8A8A]">QR พร้อมเพย์</span>
                <Link to="" className="text-[#333333] text-sm font-bold">ชำระเงิน</Link>
              </div>
            </div>

            <div className='bg-[#F0FFF7] p-3 rounded-[7px] border border-[#70DFA3] text-[#0E964D] mt-3 text-[13px]'>
              กรุณาชำระเงินด้วย QR พร้อมเพย์ ภายใน {data.due_date} เวลา 10:30 มิฉะนั้น ระบบจะยกเลิกออเดอร์อัตโนมัติ
            </div>
            
            <Link to='/shipping-address' className='flex justify-between items-center py-[17px] w-full mt-[13px]'>
              <div className='flex gap-x-[10px] font-bold text-[#333333] text-sm items-center'>
                <MarkerPin01 />
                ที่อยู่ในการจัดส่ง
              </div>
              <div>
                <ChevronRight />
              </div>
            </Link>

            <div className='bg-[#F4F4F4] p-5 rounded-[7px]'>
              <div className='flex justify-between items-center'>
                <span className="text-[13px] text-[#8A8A8A]">{data.customer_address}</span>
                <Link to="/shipping-address/edit" className="text-[#333333] text-sm font-bold">แก้ไข</Link>
              </div>
            </div>

            <Link to='/shipping-address' className='flex justify-between items-center py-[17px] w-full mt-[13px]'>
              <div className='flex gap-x-[10px] font-bold text-[#333333] text-sm items-center'>
                <ShoppingBag01 />
                Order Summary
              </div>
              <div>
                <ChevronRight />
              </div>
            </Link>

            <section className="flex gap-x-[14px] mt-[14px] pb-[18px] border-b border-b-[#E3E3E3]">
                <div>
                  <img src={testImg} />
                </div>
                <div className="flex w-3/4 flex-col gap-y-3">
                  <div className="flex">
                    <h2 className="w-[40%] text-xs">คำสั่งซื้อ</h2>
                    <p className="w-[60%] text-xs text-[#00B14F]">{d.name}</p>
                  </div>
                  <div className="flex">
                    <h2 className="w-[40%] text-xs">วันที่</h2>
                    <p className="w-[60%] text-xs">{d.posting_date}</p>
                  </div>
                  <div className="flex">
                    <h2 className="w-[40%] text-xs">จัดส่งภายใน</h2>
                    <p className="w-[60%] text-xs">3 - 4 วันทำการ<br/>Standard Delivery</p>
                  </div>
                  <div className="flex">
                    <h2 className="w-[40%] text-xs">การชำระเงิน</h2>
                    <p className="w-[60%] text-xs">โอนเงินผ่านธนาคาร</p>
                  </div>
                  <div className="flex">
                    <h2 className="w-[40%] text-xs">รวมการสั่งซื้อ</h2>
                    <p className="w-[60%] text-xs">฿ {d.total}</p>
                  </div>
                </div>
              </section>
          </>
        )}
      </main>
    </>
  )
}

export default MyOrderDetails