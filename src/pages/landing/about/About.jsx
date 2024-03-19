import React from 'react'
import './about.css'
import logo3 from '../../../assets/imgs/logo3.png'
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
                        <img className="rounded-md" src="https://img1.wsimg.com/isteam/stock/yDG2j5x" alt="" />
                    </div>
                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute  -top-5 sm:-top-20 -right-32 sm:-right-52 opacity-10" alt="" />
                        <div className="about_elem_title">FAST AND RELIABLE REPAIRS
                        </div>
                        <div className='about_elem_subtitle'>At Bizarre Electronics Repair, we
                            understand how important your
                            electronics are to you. That's why we offer fast and reliable repair services to get your
                            devices up and running again as quickly as possible.
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Get a free quote</Link>

                    </div>
                </div>

                <div className="elem_about elem_middle">

                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute -top-20 -left-52 opacity-10" alt="" />
                        <div className="about_elem_title">FAST AND RELIABLE REPAIRS
                        </div>
                        <div className='about_elem_subtitle'>At Bizarre Electronics Repair, we
                            understand how important your
                            electronics are to you. That's why we offer fast and reliable repair services to get your
                            devices up and running again as quickly as possible.
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Get a free quote</Link>

                    </div>

                    <div className="img_about">
                        <img className="rounded-md"
                            src="https://img.freepik.com/free-photo/man-repairing-circuit-board-laptop_1098-14844.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais"
                            alt="" />
                    </div>
                </div>

                <div className="elem_about ">
                    <div className=" img_about">
                        <img className="rounded-md"
                            src="https://media.istockphoto.com/id/815594930/photo/computer-service-work-tool-icon.jpg?s=612x612&w=0&k=20&c=S6K0Pp9PenrrFf4irLzeR9KxSmdZ1j_x_hznz2u4b3M="
                            alt="" />
                    </div>
                    <div className="flex flex-col gap-6 relative">
                        <img src={logo3} className="about_shade absolute -top-8 sm:-top-20 -right-52 opacity-10" alt="" />
                        <div className="about_elem_title">FAST AND RELIABLE REPAIRS
                        </div>
                        <div className='about_elem_subtitle'>At Bizarre Electronics Repair, we
                            understand how important your
                            electronics are to you. That's why we offer fast and reliable repair services to get your
                            devices up and running again as quickly as possible.
                        </div>
                        <Link to="/contacts" className="about_elem_btn" >Get a free quote</Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
