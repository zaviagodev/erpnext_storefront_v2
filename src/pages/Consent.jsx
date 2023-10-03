import React from 'react'
import FooterMenu from "../components/FooterMenu"
import TitleHeader from '../components/TitleHeader';
import { useFrappeGetDoc } from 'frappe-react-sdk'

function Consent() {
    const { data } = useFrappeGetDoc('Data Disclosure Consent', {
        fields: ['description']
    })
    return (
        <>
            <TitleHeader link={'/my-account'} title={'ความยินยอมในการเปิดเผยข้อมูล'} />
            {data && (
                <div className="px-[20px] pt-9 mb-[120px] mt-[53px]">
                    {/* <h2 className='text-base font-bold' style={{ fontFamily: "Eventpop" }}>{data.title}</h2> */}
                    <div className='mt-2 info-desc' dangerouslySetInnerHTML={{__html:data.description}}/>
                </div>
            )}
            <FooterMenu active={3} />
        </>
    )
}

export default Consent