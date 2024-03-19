import React from 'react'
import './footer.css'
import Reviews from '../reviews/Reviews';

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    return (
        <footer className="pt-14">
            <div className="flex justify-around gap-10 flex-wrap px-4">
                <div className="footer_elem">
                    <div className="footer_elem_title pb-4">WORKING <br/> HOURS</div>
                    <div>Mon 11:00 am – 08:00 pm</div>
                    <div>Mon 11:00 am – 08:00 pm</div>
                    <div>Mon 11:00 am – 08:00 pm</div>
                    <div>Mon 11:00 am – 08:00 pm</div>
                    <div>Mon 11:00 am – 08:00 pm</div>
                    <div>Sun By Appointment</div>
                    <div>Sun By Appointment</div>
                </div>

                <div className="footer_elem gap-4">
                    <div className="footer_elem_title">FAST AND RELIABLE REPAIRS</div>
                    <div className='footer_elem_text'>At Bizarre Electronics Repair, we understand how important your electronics are to you. That's
                        why we offer fast and reliable repair services to get your devices up and running again as
                        quickly as possible.</div>
                </div>

                <div className="gap-4 footer_elem">
                    <div className="footer_elem_title">FAST AND RELIABLE REPAIRS</div>
                    <div className='footer_elem_text'>At Bizarre Electronics Repair, we understand how important your electronics are to you. That's
                        why we offer fast and reliable repair services to get your devices up and running again as
                        quickly as possible.</div>
                </div>

            </div>
            <div className="pt-20 px-5 pb-5 flex justify-center items-center">
                <div style={{letterSpacing: '2px'}} className="last_elem">COPYRIGHT © 2024 BIZARRE
                    ELECTRONICS
                    REPAIR - ALL RIGHTS RESERVED.
                    <span onClick={scrollToTop} className="go-top">
                        <img className="top-img"
                            src="https://www.freeiconspng.com/thumbs/arrow-icon/arrow-icon--myiconfinder-23.png" alt=""/>
                    </span>
                </div>

            </div>
            
        </footer>
    )
}
