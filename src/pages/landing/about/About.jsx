import React from 'react'
import './about.css'
import logo3 from '../../../assets/imgs/logo3.png'
import about1 from '../../../assets/imgs/about1.webp'
import about2 from '../../../assets/imgs/about2.avif'
import about3 from '../../../assets/imgs/about3.jpg'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className=" pt-10 pb-28 border-t border-b border-green-500" id="about">
            <div className="about_title">
                ABOUT US
            </div>

            <div className="about_cont">
                <div className="elem_about">
                    <div className="img_about">
                        <img className="rounded-md" src={about3} alt="" />
                    </div>
                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute  -top-5 sm:-top-20 -right-32 sm:-right-52 opacity-10" alt="" />
                        <div className="about_elem_title">Go local!
                        </div>
                        <div className='about_elem_subtitle'>No investors to satisfy means cheaper and better-quality service for you.
Quality and your satisfaction is the utmost priority, not corporate KPI!
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Free estimate</Link>

                    </div>
                </div>

                <div className="elem_about elem_middle">

                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute -top-20 -left-52 opacity-10" alt="" />
                        <div className="about_elem_title">24/7 service available
                        </div>
                        <div className='about_elem_subtitle'>Your phone is broken at 3am? No worries! We are always here for your emergency repair needs. No matter the time, we're ready to help you out.
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Get a free quote</Link>

                    </div>

                    <div className="img_about">
                        <img className="rounded-md"
                            src={about2}
                            alt="" />
                    </div>
                </div>

                <div className="elem_about ">
                    <div className=" img_about">
                        <img className="rounded-md"
                            src={about3}
                            alt="" />
                    </div>
                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute -top-8 sm:-top-20 -right-52 opacity-10" alt="" />
                        <div className="about_elem_title">You have options
                        </div>
                        <div className='about_elem_subtitle'>On a budget? We have third party screens that are cheaper while being functionally similiar to the originals. 
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Learn more</Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
