import React from 'react'
import { Carousel } from 'flowbite-react';
import './reviews.css'
import userprofile from '../../../assets/imgs/user-profile.jpg'
import Rating from './Rating';
import like from '../../../assets/imgs/like2.png'

export default function Reviews() {
    return (
        <section className="rev_cont border-t border-b border-green-500">
            <h1 className="reviews_title">REWIEWS</h1>
            <img src={like} style={{ transform: 'rotate(-15deg)' }}
                className="absolute top-20 left-60 opacity-10" alt="" />
            <img src={like} style={{ transform: 'rotate(15deg)' }}
                className="absolute bottom-20 right-60 opacity-10" alt="" />
            <div className='slider_cont' >
                <Carousel className='rounded-lg overflow-hidden'>
                    <div className="flex flex-col gap-3 p-10 h-full items-center justify-center bg-def_green">
                        <img src={userprofile} className="w-16 h-16 rounded-full" alt="" />
                        <div className='w-96 text-center text-white font-semibold'>Ivan ivanych</div>
                        <Rating/>
                        <div className="text-center text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, quos.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nam ut. Doloremque perferendis dolores laudantium consectetur. Ea adipisci quod aspernatur.</div>
                    </div>
                    <div className="flex flex-col gap-3 p-10 h-full items-center justify-center bg-def_green">
                        <img src={userprofile} className="w-16 h-16 rounded-full" alt="" />
                        <div className='text-center text-white font-semibold'>Ivan ivanych</div>
                        <Rating/>
                        <div className="text-center text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, incidunt?  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nam ut. Doloremque perferendis dolores laudantium consectetur. Ea adipisci quod aspernatur.</div>
                    </div>
                    <div className="flex flex-col gap-3 p-10 h-full items-center justify-center bg-def_green">
                        <img src={userprofile} className="w-16 h-16 rounded-full" alt="" />
                        <div className='text-center text-white font-semibold'>Ivan ivanych</div>
                        <Rating/>
                        <div className="text-center text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, velit.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, nam ut. Doloremque perferendis dolores laudantium consectetur. Ea adipisci quod aspernatur.</div>
                    </div>

                </Carousel>
            </div>
            <div className="text-center pt-10 text-xl"><span className="text-orange-400 font-bold cursor-pointer">Login </span>
                to add one more</div>

        </section>
    )
}
