function Count() {
    return (
        <>
            <div className="count" 
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
            
            
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            data-aos-once="true"
            
            >

                <div className="container container-fluid p-0">
                    <div className="row d-flex justify-content-between align-items-center p-2 row-cols-xxl-4 row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1" xs={1}>
                        <div className="col-auto ">
                            <div className="count-box-1 mb-3">
                                <div className="count-icon text-center">

                                <i class="fa-regular fa-circle-user"></i>
                                </div>
                                <div className="count-number text-center ">
                                    <p>540<i class="fa-solid fa-plus"></i></p>
                                </div>
                                <div className="count-content text-center">
                                    expert doctor
                                </div>
                            </div>
                        </div>
                        <div className="col-auto ">
                            <div className="count-box-2 mb-3">
                                <div className="count-icon text-center">
                                <i class="fa-regular fa-circle-check"></i>
                                                                </div>
                                <div className="count-number text-center">
                                    <p>990<i class="fa-solid fa-plus"></i></p>
                                </div>
                                <div className="count-content text-center">
                                    successful story
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="count-box-3 mb-3">
                                <div className="count-icon text-center">
                                <i class="fa-solid fa-trophy"></i>
                                </div>
                                <div className="count-number text-center">
                                    <p>3500 <i class="fa-solid fa-plus"></i></p>
                                </div>
                                <div className="count-content text-center">
                                    global presence
                                </div>
                            </div>
                        </div>
                        <div className="col-auto ">
                            <div className="count-box-4 mb-3">
                                <div className="count-icon text-center">
                                <i class="fa-solid fa-certificate"></i>
                                </div>
                                <div className="count-number text-center">
                                    <p>54<i class="fa-solid fa-plus"></i></p>

                                </div>
                                <div className="count-content text-center">
                                    experiences doctor
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Count