function About() {
    return (
        <>
            <div className="about pt-5" 
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
                data-aos-duration="1000"


                data-aos-once="true"            >
                <div className="container container-fluid">
                    <div className="row d-flex justify-content-between align-items-center row-cols-xxl-2 row-cols-xl-2 row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
                        <div className="col-auto">
                            <div className="about-content">
                                <div className="about-heading">
                                    About Us
                                </div>
                                <div className="about-main-heading">
                                    Tackle The Challenge Of Delivering Health Care
                                </div>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna.</p>
                                <ul className='list-unstyled mt-4'>
                                    <li className='about-check'><i class="fa-solid fa-check"></i>Consultations Wif Specialized Pediatricians</li>
                                    <li className='about-check'><i class="fa-solid fa-check"></i>A Wide Range Of Laboratory Studies</li>
                                    <li className='about-check'><i class="fa-solid fa-check"></i>Ultrasound Examination</li>
                                    <li className='about-check'><i class="fa-solid fa-check"></i>ECG, Echocardiography</li>
                                </ul>
                                <div className="about-button mt-4   ">
                                    <button>More About Us</button>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto">
                            <div className="about-img">
                                <img src={require('./img/about-img.jpg')} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About