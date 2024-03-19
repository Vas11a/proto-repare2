import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CommingSoon() {

    const naigate = useNavigate()

  return (
    <div className='flex flex-col gap-6 justify-center items-center pt-20 pb-20 border-t border-b border-green-500'>
        <div className=' uppercase font-bold text-5xl py-3 text-center lg:text-8xl text-orange-200'>Comming soon</div>
        <div className='text-center  text-2xl opacity-50 font-bold' style={{maxWidth: '700px'}}>We are terribly sorry, this functionality is in development and will appear very soon :)</div>
        <button onClick={() => naigate(-1)} className='btn_orange'>Go back</button>
    </div>
  )
}
