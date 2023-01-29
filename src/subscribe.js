function Subscribe()
{
    return(
        <>
            <div className="subscribe"
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        
            >
                <div className="container">
                    <div className="row d-flex justify-content-between  align-items-center  ow-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
                        <div className="col-auto m-0 p-0">
                            <div className="sub_heading">
                                Subscribe Now
                            </div>
                            <div className="sub_content">
                            Get our latest news & update regularly
                            </div>

                        
                        </div>
                        <div className="col-auto m-0 p-0">
                            <div className="sub_email_box">
                                <input type="text" placeholder="Your Email Address"  className="sub_email"/><button className='sub_email_button'><a href="#"> Subscribe</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Subscribe 