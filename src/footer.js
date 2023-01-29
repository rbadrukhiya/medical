function Footer() {
    return (
        <>
            <div className="footer p-5"
                // data-aos="flip-up"
                data-aos="fade-up"
     data-aos-anchor-placement="center"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >

                <div className="row justify-content-between row-cols-xxl-4 row-cols-xl-4 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
                    <div className="col-auto m-0 p-0">
                        <div className="footer-logo">
                            <img src={require('./img/logo-1.png')} alt="" />
                        </div>
                        <p className='footer_content '>Lorem ipsum dolor, sit amet earum consectetur adipisicing elit. Cupiditate rerum quidem fugiat sapiente! Iusto quae perspiciatis amet earum consectetur.</p>
                        <ul className='d-flex list-unstyled f-icon'>
                            <li className='me-3 mt-3'><i class="fa-brands fa-facebook"></i></li>
                            <li className='me-3 mt-3'><i class="fa-brands fa-twitter"></i></li>
                            <li className='me-3 mt-3'><i class="fa-brands fa-instagram"></i></li>
                            <li className='me-3 mt-3'><i class="fa-brands fa-linkedin"></i></li>
                            <li className='me-3 mt-3'><i class="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                    <div className="col-auto m-0 p-0">
                        <div className="footer-second-heading " >
                            Our Departments
                        </div>
                        <ul className='list-unstyled second-footer'>
                            <li><a href="#">Brain</a></li>
                            <li><a href="#">Cardiology</a></li>
                            <li><a href="#">Dental Care</a></li>
                            <li><a href="#">Eye Care</a></li>
                            <li><a href="#">Medicine</a></li>
                            <li><a href="#">Neurology</a></li>
                        </ul>
                    </div>
                    <div className="col-auto m-0  p-0">
                        <div className="footer-second-heading ">
                            Opening Hours
                        </div>
                        <ul className='list-unstyled footer_hours '>
                            {/* <li >Mon-Tue : 6:00AM-10:00PM</li> */}
                            <div className="row">
                                <div className="col-auto ">Mon-Tue :</div>
                                <div className="col-auto  ">6:00AM-10:00PM</div>
                            </div>
                            <div className="row  ">
                                <div className="col-auto border border-1 border-start-0 border-end-0 border-success">Wed-Thu :</div>
                                <div className="col-auto border border-1 border-start-0 border-end-0 border-success"> 6:00AM-10:00PM</div>
                            </div>
                            {/* <li className='border border-1 border-start-0 border-end-0 border-success'>Fri : 6:00AM-4:00PM</li> */}
                            <div className="row ">
                                <div className="col-auto border border-1 border-start-0 border-end-0 border-1 border-success border-top-0">Fri :</div>
                                <div className="col-auto border border-1 border-start-0 border-end-0 border-1 border-success border-top-0 ">6:00AM-4:00PM</div>
                            </div>
                            {/* <li>Sun : Closed</li> */}
                            <div className="row ">
                                <div className="col-auto ">Sun :</div>
                                <div className="col-auto ">Closed</div>
                            </div>
                        </ul>
                    </div>
                    <div className="col-auto  p-0">
                        <div className="footer-second-heading">
                            Get In Touch
                        </div>
                        <div className="f-address">
                        <i class="fa-solid fa-location-dot me-2"></i>   Address:
                        </div>
                        <div className="f-address-content">
                        124, Western Road, Melbourne Australia.
                        </div>
                        <div className="f-email">
                        <i class="fa-solid fa-envelope me-2"></i> Email :
                        </div>
                        <div className="f-email-content">
                        medic@example.com
                        </div>
                        <div className="hotline">
                        <i class="fa-solid fa-phone-volume me-2"></i>   Hotline
                        </div>
                        <div className="f-hotline-content">
                        +123-456-789
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer