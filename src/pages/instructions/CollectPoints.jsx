import React, { useState } from 'react'
import FooterMenu from "../../components/FooterMenu"
import TitleHeader from '../../components/TitleHeader';
import { useLocation } from 'react-router-dom';
import { useFrappeGetCall, useFrappeGetDoc, useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk';

function CollectPoints() {
  const { currentUser } = useFrappeAuth()

  const { data } = useFrappeGetDoc('How To Collect Points', currentUser, {
    fields: ['title', 'description']
  })

  return (
    <>
      <TitleHeader link="/my-account" title={'วิธีเก็บคะแนน'} />
      <div className="px-[20px] mt-[53px] pt-9">
        {data && (
          <>
            <h2 className='text-base font-bold eventpop'>{data.title}</h2>
            <div className='mt-2 info-desc' dangerouslySetInnerHTML={{__html:data.description}}/>
          </>
        )}
      </div>
      <FooterMenu active={3} />
    </>
  )
}

export default CollectPoints