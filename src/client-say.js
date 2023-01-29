import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options1 = {
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,

        },
    },
};
function Client_say() {
    return (
        <>
            <div className="client_say"
                // data-aos="flip-up"
                data-aos="fade-up"
     data-aos-anchor-placement="center"
                data-aos-easing="ease-in-out"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <div className="container">
                    <div className="heading-latest-news">
                        <div className="row d-flex justify-content-center ">
                            <div className="col-12 text-center mt-5"><p>Testimonials</p></div>
                            <div className="col-12 text-center expert-heading"><span>What Our Client's Say </span> </div>
                            <div className="col-auto text-center heading-latest-news-content">
                                <div className="mt-3 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                                </div>
                            </div>
                        </div>
                    </div>

                    <OwlCarousel className='owl-theme slider-hidden' {...options1} items={2} loop margin={10} autoPlay autoplayTimeout={1000}  >
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-1.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>William Robart</h3>
                                <span className='designation text-center'>Consulting Doctor</span>
                            </div>
                        </div>
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-2.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>Jeson Smith</h3>
                                <span className='designation text-center'>Dental Hygienist</span>
                            </div>
                        </div>
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-3.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>Ravert Smith</h3>
                                <span className='designation text-center'>Dental</span>
                            </div>
                        </div>
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-4.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting  ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>Juhon Smith</h3>
                                <span className='designation text-center'>Hygienist</span>
                            </div>
                        </div>
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-5.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>Jivle Jeck</h3>
                                <span className='designation text-center'>Consulting</span>
                            </div>
                        </div>
                        <div class='item mb-4'>
                            <div className="client_say_box mt-5">
                                <div className="client-slider-img">
                                    <img src={require('./img/client-6.jpg')} alt="" />
                                </div>
                                <div className="client_slider_content text-center pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing and Quis suspendisse typesetting ipsum dolor sit amet, consectetur.
                                </div>
                                <h3>kilva jeck</h3>
                                <span className='designation text-center'>Consulting</span>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}
export default Client_say