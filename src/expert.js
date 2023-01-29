function Expert() {
    return (
        <>
            <div className="expert" 
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
            
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            data-aos-once="true"
            
            >
                <div className="container container-fluid">
                    <div className="heading-latest-news">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center mt-5"><p>our doctor's</p></div>
                            <div className="col-12 text-center expert-heading"><span>Our expert doctor's</span> </div>
                            <div className="col-auto text-center heading-latest-news-content">
                                <div className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center row-cols-xl-3 row-cols-xxl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                        <div className="col-auto mt-3">
                            <div className="doctor-box text-center">
                                <div className="doctor-ex-img">
                                    <img src={require('./img/doctor-1.jpg')} alt="" className='img-fluid '>
                                    </img>
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr.anthonny
                                    </div>
                                    <div className="expert-work">surgeon, cardiologist</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-3">
                            <div className="doctor-box">
                                <div className="doctor-ex-img">
                                    <img src={require('./img/doctor-2.jpg')} alt="" className='img-fluid ' />
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr.anna
                                    </div>
                                    <div className="expert-work">internist,general practtitioner</div>

                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-3 text-center">
                            <div className="doctor-box text-center">
                                <div className="doctor-ex-img">
                                    <img src={require('./img/doctor-3.jpg')} alt="" className='img-fluid text-center ' />
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr.andrew
                                    </div>
                                    <div className="expert-work">internist, orthopedic surgeon</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expert