import React from 'react'
import './banner.css'
import { Link } from 'react-router-dom'

export default function Banner() {
    return (
        <div>
            <div className="banner_cont">
                <div className="banner_title">
                    GOT SOMETHING TO FIX?
                </div>
                <Link to='/contacts' className="banner_btn">
                    Get a free quote
                </Link>
            </div>
        </div>
    )
}
