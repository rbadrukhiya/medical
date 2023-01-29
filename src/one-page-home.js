import About from "./about"
import Count from "./count"
import Header from "./header"
import Expert from "./expert"
import Health from "./healthcare"
import Ask_questions from "./Askquestions"
import Choose from "./Choose"
import Client_say from "./client-say"
import Latest from "./latestnews"
import Subscribe from "./subscribe"
import Footer from "./footer"
import Copyright from "./copyright"
// import Welcome from "./welcome"
import OwlCarousel from 'react-owl-carousel';
import React from 'react';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function One_page_home() {
    return (
        <>
            {/* <h1>hello</h1> */}
            <Header />
            <div className="welcome img-fluid"
                data-aos="flip-up"

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
                                <img src={require('./img/single-page-home-banner.png')} alt="" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <About />
            <Count />
            <Expert />
            <Health />
               {/* featured products section start */}
               <div className="our-featured-products">
                <div className="container ">
                    <div className="heading-latest-news">
                        <div className="row d-flex justify-content-center ">
                            {/* <div className="col-12 text-center"><p>News</p></div> */}
                            <div className="col-12 text-center expert-heading"><span>Our Featured Products</span> </div>
                            <div className="col-auto text-center heading-latest-news-content"><div className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="row  row-cols-xxxl-3 row-cols-xxl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                        <div className="col-auto mt-3">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-1 (1).jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center ">
                                    <div className="col-auto mt-4">
                                        <div className="our-featured-products-box-heading">
                                            Digital Monitar
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-content">
                                            Armani, Moshi
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 ">
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-price">
                                            $299.00
                                        </div>

                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row justify-content-center "> */}

                                {/* </div> */}
                            </div>

                        </div>
                        <div className="col-auto mt-3">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-2.jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-heading mt-4">
                                            Digital Bp Monitar
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-content">
                                            Armani, Canada
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 ">
                                    <div className="col-12 text-center ">
                                        <div className="our-featured-products-box-price">
                                            <strike>$311.00</strike> $290.00
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-3">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-3.jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-heading mt-4">
                                            Non-Touch Thermometer
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-content">
                                            Canada
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center  mt-3">
                                    <div className="col-12 text-center ">
                                        <div className="our-featured-products-box-price">
                                            $590.00
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-auto mt-4">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-1 (1).jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-auto">
                                        <div className="our-featured-products-box-heading mt-4">
                                            Patient Monitor
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-content">
                                            Moshi
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 ">
                                    <div className="col-12 text-center ">
                                        <div className="our-featured-products-box-price">
                                            <strike>$450.00</strike> $420.00
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-4">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-4.jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-heading mt-4">
                                            Object Thermometer
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto ">
                                        <div className="our-featured-products-box-content">
                                            Armani
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 ">
                                    <div className="col-12 text-center ">
                                        <div className="our-featured-products-box-price">
                                            $120.00
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-4">
                            <div className="our-featured-products-box">
                                <div className="our-featured-products-box-img">
                                    <img src={require('./img/product-5.jpg')} alt="" />
                                </div>
                                <div className="row justify-content-center ">
                                    <div className="col-auto">
                                        <div className="our-featured-products-box-heading mt-4">
                                            Esperanza Inhaler
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-2 ">
                                    <div className="col-auto">
                                        <div className="our-featured-products-box-content">
                                            Moshi Turnout
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 ">
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-price">
                                            <strike>$370.00</strike>  $350.00
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <div className="our-featured-products-box-button">
                                            <button>Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
            {/* featured products section end */}
            <Ask_questions />
            <Choose />
            <Client_say />
            <Latest />
            <Subscribe />
            <Footer />
            <Copyright />
         


            

        </>
    )
}
export default One_page_home