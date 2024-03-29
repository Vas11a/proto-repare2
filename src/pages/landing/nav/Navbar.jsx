import React from 'react'
import './nav.css'
import logo from '../../../assets/imgs/logo.webp'
import menu from '../../../assets/imgs/menu-burg.png'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav id="home" className="nav_cont">
            <div className="flex md:flex-row flex-col flex-wrap items-start md:items-center justify-between px-5 mx-auto p-3">
                <div className='flex w-full md:w-auto justify-between items-center gap-3'>
                    <span className="nav_logo">
                        <img src={logo} className=" h-20 md:h-28" alt="LOGO" />
                    </span>
                    <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={menu} alt="" className='md:hidden w-12 h-12 cursor-pointer duration-500 rounded-lg hover:shadow-2xl active:shadow-sm' />
                </div>
                <div className={`${isMenuOpen ? ' h-52' : 'h-0'} md:h-auto overflow-hidden duration-500`}>
                    <ul
                        className="flex flex-col md:flex-col-reverse md:items-end md:gap-3 gap-0 items-start justify-between">
                        <div className="flex flex-col font-medium mt-4 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <Link to="/" onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_elem">Home</Link>
                            </li>
                            {/* <li>
                                <Link to="/about" onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_elem">About</Link>
                            </li> */}
                            <li>
                                <Link to="/reviews" onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_elem">Reviews</Link>
                            </li>
                            <li>
                                <Link to="/contacts" onClick={() => setIsMenuOpen(!isMenuOpen)} className="menu_elem">Contacts</Link>
                            </li>
                        </div>
                        <div className="buttons mt-1 md:pt-0">
                            <Link to="/tracking">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    type="button"
                                    className="btn_orange"
                                >Track your repair</button>
                            </Link>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
