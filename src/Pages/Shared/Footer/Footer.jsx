import React from 'react';
import zabsfood5 from "../../../images/zabsfood5.png";
const Footer = () => {
    return (
        <div className='bg-dark p-3'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className="w-100" style={{ height: "80px" }} src={zabsfood5}></img>
                </div>
                <div className='d-flex' >
                    <div className='p-5'>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">About Online Food</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Read Our Blog</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Sign Up to Deliver</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Add Your Restaurant</a>
                    </div>
                    <div className='p-5'>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Get Help</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Read FAQs</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">View All Cities</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter d-block' href="">Restaurants Near Me</a>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <div>
                    <p className='text-white fs-6 fw-lighter'><small>Copyright ©Sobraj 2024</small></p>
                </div>
                <div className=''>
                        <a className='text-decoration-none text-white fs-6 fw-lighter ' href="">Privacy Policy</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter ps-5' href="">Terms of Use</a>
                        <a className='text-decoration-none text-white fs-6 fw-lighter ps-5' href="">Pricing</a>                    </div>
            </div>
        </div>
    );
}

export default Footer;
