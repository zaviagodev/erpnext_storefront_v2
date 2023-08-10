import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "@untitled-ui/icons-react"
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
            
            <Link to='/shippin' className='flex justify-between items-center px-5 py-[17px] w-full'>
              <div className='flex gap-x-[10px]'>
                {icon}
                {title}
              </div>
              <div>
                <ChevronRight />
              </div>
            </Link>
          </>
        )}
      </main>
    </>
  )
}

export default MyOrderDetails