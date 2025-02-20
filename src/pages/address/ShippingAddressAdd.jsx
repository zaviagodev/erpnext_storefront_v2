import { ArrowLeft, MarkerPin01, AlertTriangle, FileCheck02 } from '@untitled-ui/icons-react'
import { Link } from 'react-router-dom'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import chevronDropdown from '../../img/chevron-right.svg'
import TitleHeader from '../../components/TitleHeader'
import { useFrappeCreateDoc } from 'frappe-react-sdk'
import { useFormik } from 'formik'

const AddShippingAddress = () => {
  const [province, setProvince] = useState([]);
  const [modified, setModified] = useState(true);

  const { createDoc, loading, isCompleted, error } = useFrappeCreateDoc()

  const formik = useFormik({
    initialValues: {
      first_name:'',
      surname:'',
      address:'',
      province:'',
      district:'',
      postal_code:'',
      phone_number:''
    },
    onSubmit: (data) => {
      createDoc('Shipping Address', data)
    }
  })

  const provinceRef = useRef([])

  const [openSuccess, setOpenSuccess] = useState(false)
  return (
    <>
      <TitleHeader title="ใส่ที่อยู่การจัดส่ง" link="/shipping-address" />
      <main className='p-5 pb-[100px] mt-[53px]'>
        <form className='flex flex-col gap-y-5' onSubmit={formik.handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='first_name'>ชื่อผู้รับ</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='first_name' name='first_name' type='text' value={formik.values.first_name} onChange={formik.handleChange}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='surname'>นามสกุล</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='surname' name='surname' type='text' value={formik.values.surname} onChange={formik.handleChange}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='address'>ที่อยู่ (ห้องเลขที่, ตึก, ถนน)</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='address' name='address' type='text' value={formik.values.address} onChange={formik.handleChange}/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='province'>จังหวัด</label>
            <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' value={formik.values.province} onChange={formik.handleChange} ref={provinceRef} id='province' name='province' style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
              <option value='กรุงเทพมหานคร'>กรุงเทพมหานคร</option>
              <option value='สมุทรปราการ'>สมุทรปราการ</option>
              <option value='สมุทรสาคร'>สมุทรสาคร</option>
              <option value='ปทุมธานี'>ปทุมธานี</option>
            </select>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='district'>เมือง / เขต</label>
            {provinceRef.current.value === "กรุงเทพมหานคร" ? (
              <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='district' name='district' value={formik.values.district} onChange={formik.handleChange} style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
                <option value='สวนหลวง'>สวนหลวง</option>
                <option value='บางกะปิ'>บางกะปิ</option>
                <option value='บางนา'>บางนา</option>
                <option value='ห้วยขวาง'>ห้วยขวาง</option>
              </select>
            ) : provinceRef.current.value === "สมุทรปราการ" ? (
              <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='district' name='district' value={formik.values.district} onChange={formik.handleChange} style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
                <option value='บางพลี'>บางพลี</option>
                <option value='พระประแดง'>พระประแดง</option>
                <option value='บางเสาธง'>บางเสาธง</option>
                <option value='พระสมุทรเจดีย์'>พระสมุทรเจดีย์</option>
                <option value='เมือง'>เมือง</option>
                <option value='บางบ่อ'>บางบ่อ</option>
              </select>
            ) : (
              <select className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 pl-3 pr-10 mt-[11px] appearance-none' id='district' name='district' value={formik.values.district} onChange={formik.handleChange} style={{backgroundImage:"url(" + chevronDropdown + ")",backgroundPosition:"right 0.5rem center",backgroundRepeat:"no-repeat"}}>
                <option value='บางพลี'>ลำลูกกา</option>
                <option value='ธัญบุรี'>ธัญบุรี</option>
                <option value='คลองหลวง'>คลองหลวง</option>
                <option value='ลาดหลุมแก้ว'>ลาดหลุมแก้ว</option>
                <option value='เมือง'>เมือง</option>
                <option value='สามโคก'>สามโคก</option>
                <option value='หนองเสือ'>หนองเสือ</option>
              </select>
            )}
          </div>

          <div className='flex flex-col'>
            <label htmlFor='postal_code'>รหัสไปรษณีย์</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='postal_code' name='postal_code' value={formik.values.postal_code} onChange={formik.handleChange} type='text'/>
          </div>

          <div className='flex flex-col'>
            <label htmlFor='phone_number'>เบอร์โทรศัพท์</label>
            <input className='border border-[#E3E3E3] rounded-[8px] outline-none py-2 px-3 mt-[11px]' id='phone_number' name='phone_number' value={formik.values.phone_number} onChange={formik.handleChange} type='tel'/>
            <p className="text-xs text-[#474747] mt-[11px]">ที่ให้ต้องการให้ค้นส่งติดต่อแจ้งเมื่อมีการจัดส่ง</p>
          </div>

          <footer className="py-5 fixed bottom-0" style={{width:"calc(100% - 40px)"}}>
            <button type='submit' onClick={() => setOpenSuccess(true)} className={`block mt-[14px] w-1/2 text-white rounded-[9px] p-3 text-center w-full ${!modified ? "bg-[#C5C5C5] border border-[#C5C5C5]" : "bg-[#111111] border border-[#111111]"}`} disabled={!modified}>บันทึกที่อยู่</button>
          </footer>
        </form>
      </main>

      <Transition.Root show={openSuccess} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpenSuccess}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full max-w-md">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00B14F]">
                      <FileCheck02 color="white"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-[#333333]">
                        บันทึกที่อยู่ เรียบร้อยแล้ว
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xs text-[#8A8A8A]">
                        คุณได้ทำการบันทึกที่อยู่เรียบร้อยแล้ว<br/> หากต้องการเปลี่ยนแปลงข้อมูลสามารถแก้ไขได้
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/shipping-address"
                      type="button"
                      className='w-full bg-[#111111] border border-[#111111] text-white rounded-[9px] p-3 text-center'
                    >
                      ตกลง
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default AddShippingAddress