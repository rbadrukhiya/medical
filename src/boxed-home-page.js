import Header from "./header"
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Latest from "./latestnews";
import Subscribe from "./subscribe";
import Footer from "./footer";
import Copyright from "./copyright";

function Boxed_home_page()

{
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
    return(
<>
<Header></Header>
<OwlCarousel className='owl-theme ' items={1} loop margin={10}  autoplay autoplayTimeout={3000}>
                <div class='item'>
                    <div className="one-page-slider-img-1">
                        <div className="container">
                            <div className="row i-1 row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
                                <div className="col-auto i-2 ">
                                    <div className="row  ">
                                        <div className="col-auto">
                                            <div className="one-page-slider-welcome">
                                                Welcome To Medic
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-auto">
                                            <div className="one-page-slider-heading ">
                                                exceptional medical specialty healthcare
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="one-page-slider-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="one-page-slider-button">
                                                <button><a href="#">book an appointment</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class='item'>
                    <div className="one-page-slider-img-2">
                    <div className="container">
                            <div className="row i-1 row-cols-xxl-2 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
                                <div className="col-auto i-2 ">
                                    <div className="row  ">
                                        <div className="col-auto">
                                            <div className="one-page-slider-welcome">
                                                Welcome To Medic
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ">
                                        <div className="col-auto">
                                            <div className="one-page-slider-heading ">
                                                exceptional medical specialty healthcare
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="one-page-slider-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="one-page-slider-button">
                                                <button><a href="#">book an appointment</a></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel> 
            <div className="about pt-5" data-aos="flip-up"
                data-aos-duration="1000"


                data-aos-once="true"

            >
                <div className="container container-fluid">
                    <div className="row d-flex justify-content-between align-items-center row-cols-xxl-2 row-cols-xl-2 row-cols-lg-1 row-cols-md-1 row-cols-sm-1">
                        <div className="col-auto">
                            <div className="about-img">
                                <img src={require('./img/about-img.jpg')} alt="" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="about-content">
                                <div className="about-heading">
                                    About Us
                                </div>
                                <div className="about-main-heading">
                                    Tackle The Challenge Of Delivering Health Care
                                </div>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna.</p>
                                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna.</p>


                                <div className="about-button mt-4   ">
                                    <button>More About Us</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="home-page-style-section-1 ">


        <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-auto text-center">
                
                <div className="home-second-content">

                <div className="home-second-content-heading">see  How We Provide Services To Our Clients</div>
                <p><i class="fa-solid fa-play play-button"></i></p>
                </div>
                </div>
            </div>
        </div>
</div> 
<div className="healthcare "
                          >
                <div className="container mt-5 pt-5">
                    <div className="heading-latest-news">
                        <div className="row d-flex justify-content-center">
                            <div className="col-12 text-center"><p>Our Departments</p></div>
                            <div className="col-12 text-center expert-heading"><span>Our Healthcare Departments</span> </div>
                            <div className="col-auto text-center heading-latest-news-content">
                                <div className="mt-3 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis deleniti illum  necessitati voluptates ipsum, ratione dolorum veritatis minus mollitia placeat.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between align-items-center row-cols-xxl-3 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1" xs={1}>

                    </div>
                </div>
            </div>

<div className="slider_health">
                <OwlCarousel items={3} autoplay autoplayTimeout={1000} {...options1} loop className='mb-5'>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon text-center ">
                                    <i class="fa-solid fa-brain "></i>
                                </div>
                                <div className="healthcare-heading">
                                    brain
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>    </div>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon text-center">
                                    <i class="fa-solid fa-tooth"></i>
                                </div>
                                <div className="healthcare-heading">
                                    dental care
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>    </div>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon text-center">
                                    <i class="fa-solid fa-lungs"></i>
                                </div>
                                <div className="healthcare-heading">
                                    pulmonary
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>    </div>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon  text-center">
                                    <i class="fa-solid fa-heart-pulse"></i>
                                </div>
                                <div className="healthcare-heading">
                                    cardiology
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>                </div>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon text-center">
                                    <i class="fa-solid fa-eye"></i>
                                </div>
                                <div className="healthcare-heading">
                                    eye care
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='item m-2'>
                        <div className="col-auto">
                            <div className="healthcare-box-1">
                                <div className="healthcare-icon text-center">
                                    <i class="fa-solid fa-user-nurse"></i>
                                </div>
                                <div className="healthcare-heading">
                                    neurology
                                </div>
                                <div className="healthcare-content">
                                    Aspirin For Prevention Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a odio! Quisquam libero impedit dicta rerum neque
                                </div>
                                <div className="healthcare-read">
                                    read more
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </div>
            <div className="expert" data-aos="flip-up"


                data-aos-duration="1000"
                data-aos-easing="ease-in-out"

                data-aos-once="true"

            >
                <div className="container container-fluid mb-5">
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
                                    <img src={require('./img/doctor-4.png')} alt="" className='img-fluid '>
                                    </img>
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr. jack
                                    </div>
                                    <div className="expert-work">surgeon</div>
                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-3">
                            <div className="doctor-box">
                                <div className="doctor-ex-img">
                                    <img src={require('./img/doctor-5.jpg')} alt="" className='img-fluid ' />
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr.Dilken
                                    </div>
                                    <div className="expert-work">Orthopedik</div>

                                </div>
                            </div>

                        </div>
                        <div className="col-auto mt-3 text-center">
                            <div className="doctor-box text-center">
                                <div className="doctor-ex-img">
                                    <img src={require('./img/doctor-6.jpg')} alt="" className='img-fluid text-center ' />
                                </div>
                                <div className="expert-doctor-information-content text-center">
                                    <div className="expert-name">
                                        dr.molly
                                    </div>
                                    <div className="expert-work">hymnologist</div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            <Latest></Latest>
            <Subscribe></Subscribe>
            <Footer></Footer>
            <Copyright></Copyright>

</>
    )
}
export default Boxed_home_page