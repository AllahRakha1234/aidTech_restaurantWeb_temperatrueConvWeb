import React from 'react'
import { GiRotaryPhone } from 'react-icons/gi'
import { BsTelephoneXFill } from 'react-icons/bs';
import { ImMail4 } from 'react-icons/im'
import { FiInstagram } from 'react-icons/fi'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { FaYoutube } from 'react-icons/fa'
// import { BsTwitter } from 'react-icons/bs'



const ContactPage = () => {
    return (
        <>
            <div className="container my-2 contactPage">
                <nav className="navbar navbar-expand-lg navbar-info bg-primary rounded-pill">
                    <div className="container d-flex flex-column">
                        <h1 className='contactPageTitle text-light'>Contact Page</h1>
                    </div>
                </nav>
                <div className="container mt-4">
                    <h5>We'd love to hear from you! Whether you want to book a table for a special occasion, inquire about our menu offerings, or share your feedback, our team at <strong className='text-danger'>My Restaurant</strong> is here to assist. You can reach us via phone during our regular business hours, or feel free to send us a message using the contact form below. We're dedicated to ensuring your dining experience with us is exceptional in every way. Don't hesitate to get in touch; we can't wait to serve you!</h5>
                </div>
                <div className="container">
                    <table className="table mt-4 shadow-sm p-3 mb-2 bg-body-tertiary rounded">
                        <thead>
                            <th style={{ backgroundColor: "black" }}><h2 className='text-light'>Contact Details</h2></th>
                        </thead>
                        <tbody>
                            <tr >
                                <h4 className='contactOption'><GiRotaryPhone color='#ff5500' className='icon' /> &nbsp;&nbsp; 00-92-21-4735923 </h4>
                            </tr>
                            <tr>
                                <h4 className='contactOption'><ImMail4 color='#d51a1a' className='icon' /> &nbsp;&nbsp; myrest@gmail.com</h4>
                            </tr>
                            <tr>
                                <h4 className='contactOption'><BsTelephoneXFill color='#00d500' className='icon' /> &nbsp;&nbsp; 0305-3431356</h4>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="socialMediaOption container bg-primary d-flex justify-content-around my-4 p-2 rounded-pill">
                    <div>
                        <FiInstagram className="followOption" size={50} />
                        <BiLogoFacebookSquare className="followOption" size={50} />
                        <FaYoutube className="followOption" size={50} />
                        <BsTwitter className="followOption" size={50} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
