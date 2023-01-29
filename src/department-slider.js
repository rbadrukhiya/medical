import Copyright from "./copyright"
import Footer from "./footer"
import Header from "./header"
import Subscribe from "./subscribe"
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

function Department_slider()
{
    
    return(
        <>
        <Header/>
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
            <Subscribe/>
            <Footer/>
            <Copyright/>
        </>
    )
}
export default Department_slider