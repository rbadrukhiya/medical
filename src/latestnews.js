import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options1 = {
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,

        },
        992: {
            items: 3,
        }

    },
};

function Latest() {

    return (
        <>
            <div className="container mt-5 "
            
            // data-aos="flip-up"
            data-aos="fade-up"
     data-aos-anchor-placement="center"
            
            
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            
            data-aos-once="true"
            
            >
                <div className="heading-latest-news">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-center"><p>News</p></div>
                        <div className="col-12 text-center expert-heading"><span>Our Latest News</span> </div>
                         <div className="col-auto text-center heading-latest-news-content"><div className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                         </div>
                        </div>
                    </div>
                </div>
                <OwlCarousel className='owl-theme ' loop margin={10} {...options1} autoplay autoplayTimeout={3000} >
                    <div class='item'>
                        <div className="latest-slider-box-1">
                            <div className="latest-slider-img">
                                <img src={require('./img/1.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>22 Oct, 2021 </p></div>
                                </div>
                                <h3> Aspirin For Prevention</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>                
                            </div>
                    <div class='item'>
                        <div className="latest-slider-box-2">
                            <div className="latest-slider-img">
                                <img src={require('./img/2.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>23 Oct, 2021 </p></div>
                                </div>
                                <h3>New Operating Suites</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>                    
                        </div>
                    <div class='item'>
                        <div className="latest-slider-box-3">
                            <div className="latest-slider-img">
                                <img src={require('./img/3.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>21 Oct, 2021 </p></div>
                                </div>
                                <h3>Medical Specialty Health</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="latest-slider-box-4">
                            <div className="latest-slider-img">
                                <img src={require('./img/4.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>20 Oct, 2021 </p></div>
                                </div>
                                <h3>Leading You To Health</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="latest-slider-box-5">
                            <div className="latest-slider-img">
                                <img src={require('./img/5.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>20 Oct, 2021 </p></div>
                                </div>
                                <h3>The Culture Of Care</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class='item'>
                        <div className="latest-slider-box-6">
                            <div className="latest-slider-img">
                                <img src={require('./img/6.jpg')} alt="" className='img-fluid' />
                            </div>
                            <div className="latest-slider-content">
                                <div className="row">
                                    <div className="col-auto doctor-name "><p>Adam Smith</p></div>
                                    <div className="col-auto doctor-date"><p>13 Oct, 2021 </p></div>
                                </div>
                                <h3>A Healing Presence</h3>
                                <p className='latest-slider-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                    </div>

                </OwlCarousel>
            </div>

        </>
    )
}
export default Latest