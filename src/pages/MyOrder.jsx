import React, { useState, useRef } from "react"
import { ArrowLeft } from "@untitled-ui/icons-react"
import { useFrappeGetDoc } from "frappe-react-sdk"
import testImg from '../img/test-img.png'

const MyOrder = () => {
  const { data, isLoading, error } = useFrappeGetDoc('Sales Invoice', 'ACC-SINV-2023-00170', {
    fields: ['customer', 'items_section']
  })

  if (data){
    console.log(data)
  }
  const [status, setStatus] = useState()
  return (
    <>
      <header className='p-[14px] border-b border-b-[#F2F2F2] flex gap-x-[7px] text-md font-bold bg-white'>
        <button onClick={() => location.href = "/my-account"} type="button">
          <span className="sr-only">Close panel</span>
          <ArrowLeft />
        </button>
        คำสั่งซื้อของฉัน
      </header>
      <main className="p-5">
        {data && (
          <div>
            <div className="flex gap-x-[6px] items-center text-xs font-bold">
              <div className={`w-3 h-3 bg-[${data.status === "Draft" ? "#EAB600" : data.status === "Paid" ? "#009FF0" : "#000000"}] rounded-[99px]`}/>
              {data.status === "Draft" ? "รอการชำระเงิน" : data.status === "Paid" ? "เตรียมการจัดส่ง" : data.status === "Cancelled" ? "ยกเลิก" : "รับที่สาขา"}
            </div>

            <section className="flex gap-x-[14px] mt-[14px]">
              <div>
                <img src={testImg} />
              </div>
              <div className="flex w-3/4 flex-col gap-y-3">
                <div className="flex">
                  <h2 className="w-1/2 text-xs">คำสั่งซื้อ</h2>
                  <p className="w-1/2 text-xs text-[#00B14F]">{data.name}</p>
                </div>
                <div className="flex">
                  <h2 className="w-1/2 text-xs">วันที่</h2>
                  <p className="w-1/2 text-xs">{data.posting_date}</p>
                </div>
                <div className="flex">
                  <h2 className="w-1/2 text-xs">จัดส่งภายใน</h2>
                  <p className="w-1/2 text-xs">3 - 4 วันทำการ<br/>Standard Delivery</p>
                </div>
                <div className="flex">
                  <h2 className="w-1/2 text-xs">การชำระเงิน</h2>
                  <p className="w-1/2 text-xs">โอนเงินผ่านธนาคาร</p>
                </div>
                <div className="flex">
                  <h2 className="w-1/2 text-xs">รวมการสั่งซื้อ</h2>
                  <p className="w-1/2 text-xs">฿ 5,200</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>
    </>
  )
}

export default MyOrder