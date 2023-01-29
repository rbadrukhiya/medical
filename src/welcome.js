function Welcome() {
    return (
        <>
            <div className="welcome img-fluid"
            data-aos="flip-up"
            // data-aos="fade-up"
    //  data-aos-anchor-placement="center-center"
            
            data-aos-duration="1000"
            
            data-aos-once="true"
            
            >
                <div className="container container-fluid">
                    <div className="row d-flex justify-content-between align-items-center row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-xl-2 row-cols-xxl-2 ">
                        <div className="col-auto ">
                            <div className="welcome-content">
                                <span className='welcome-heading text-center'>welcome to medic</span>
                                <p className='heading-p'>Exceptional Medical Specialty Healthcare</p>
                                <div className="welcome-para">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida
                                </div>
                                <div className=" d-flex mt-3">
                                    <div className="btn-1 me-3">
                                        <button className='button-view'>View Departments</button>
                                    </div>
                                    <div className="btn-2">
                                        <button className='Contact-button button-view'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto col-lg-12 col-md-12 col-sm-12 col-xl-6 col-xxl-6     ">
                            <div className="doctor-img justify-content-center d-flex">
                                <img src={require('./img/doctor.png')} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome