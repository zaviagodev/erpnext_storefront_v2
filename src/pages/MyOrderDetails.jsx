import { Link, useParams } from "react-router-dom"
import { ArrowLeft, CreditCard02, ChevronRight } from "@untitled-ui/icons-react"
import { useFrappeGetDoc } from "frappe-react-sdk"

const MyOrderDetails = () => {
  const { id } = useParams()

  const { data, isLoading, error } = useFrappeGetDoc('Sales Invoice', id, {
    fields: ['name', 'address', 'status']
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
            
            <Link to='/shippin' className='flex justify-between items-center py-[17px] w-full'>
              <div className='flex gap-x-[10px] font-bold text-[#333333] text-sm'>
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
          </>
        )}
      </main>
    </>
  )
}

export default MyOrderDetails