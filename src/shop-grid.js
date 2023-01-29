import Copyright from "./copyright"
import Footer from "./footer"
import Header from "./header"
import Subscribe from "./subscribe"

function Shop_grid()
{
    return(
        <>
        <Header/>
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
        <Subscribe/>
        <Footer/>
        <Copyright/>
        
        </>
    )
}
export default Shop_grid