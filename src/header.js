
function Header() {
    return (
        <>
            <div className="main_header"
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
            >
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center container-fluid">
                        <div className=" col-auto m-0 p-0">
                            <ul className="list-unstyled main-address m-3 ">
                                <li className="me-3 mb-2"><i class="fa-solid fa-phone me-2 text-center"></i><b>Call Us:</b><a href="#"> +464 145 684 325</a></li>
                                <li><i class="fa-solid fa-envelope me-2 text-center"></i><b>Email: </b><a href="#"> medic@example.com</a></li>
                            </ul>
                        </div>
                        <div className="col-auto m-0">
                            <div className="main_header_icons text-center ">
                                <i class="fa-brands fa-facebook me-3 text-center "></i>
                                <i class="fa-brands fa-square-twitter me-3  text-center "></i>
                                <i class="fa-brands fa-youtube me-3  text-center "></i>
                                <i class="fa-brands fa-linkedin me-3 text-center  "></i>
                                <i class="fa-brands fa-skype me-3    text-center"></i>
                                <i class="fa-brands fa-instagram me-3  text-center"></i>
                                <a href="/login"><i class="fa-solid fa-right-to-bracket"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navigation "
            >
                <nav>
                    <div className="container">
                        <div className="row justify-content-between align-items-center  m-0 p-0  ">
                            <div className="col-auto logo m-0 p-0 "><a href="#">
                                <img src={require('./img/logo-1.png')} alt="" className="img-fluid pt-3 pb-2 img-logo" />
                            </a></div>
                            <div className="col-auto p-0 m-0 d-none d-xl-block  ">
                                <ul className="list-unstyled d-flex main_menu  ">
                                    <li className="me-4 mt-3 pb-3  pt-2 home "><a href="/home">Home <i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1  "><a href="" >homepage style one</a></li>
                                            <li className="border border-1 sub_home"><a href="/home-page-style-two">homepage style two</a></li>
                                            <li className="border border-1 sub_home"><a href="/one-page-home">one page home</a></li>
                                            <li className="border border-1 sub_home"><a href="/boxed-home-page">boxed homepage</a></li>
                                            <li className="border border-1 sub_home"><a href="#">dark homepage</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-4 mt-3 pb-3  pt-2"><a href="/about us">About Us<i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border-1 border sub_home"><a href="/about-style-one" target={'_blank'}>about style one</a></li>
                                            <li className="border-1 border sub_home"><a href="/about-style-two">about style two</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-4 mt-3 pb-3 pt-2 "><a href="/#departments">Departments <i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1 sub_home"><a href="/department-grid">department grid </a></li>
                                            <li className="border border-1 sub_home"><a href="/department-slider">department slider</a></li>
                                            <li className="border border-1 sub_home"><a href="#">department details left sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">department details right sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">department details no sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-4 mt-3 pb-3 pt-2 "><a href="/#shop">Shop <i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1 sub_home"><a href="/shop-grid">shop grid</a></li>
                                            <li className="border border-1 sub_home"><a href="#">shop slider</a></li>
                                            <li className="border border-1 sub_home"><a href="#">shop list</a></li>
                                            <li className="border border-1 sub_home"><a href="#">shop details</a></li>
                                            <li className="border border-1 sub_home"><a href="#">cart</a></li>
                                            <li className="border border-1 sub_home"><a href="#">checkout</a></li>
                                            <li className="border border-1 sub_home"><a href="#">my account</a></li>
                                        </ul>
                                    </li>

                                    <li className="me-4 mt-3 pb-3  pt-2"><a href="/#blog">Blog <i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1 sub_home"><a href="#">blog grid </a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog slider</a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog left sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog right sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog details left sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog details right sidebar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">blog details no sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-4 mt-3 pb-3 pt-2 "><a href="/#pages">Pages <i class="fa-solid fa-plus"></i></a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1 sub_home"><a href="#">appoinment<i class="fa-solid fa-plus"></i></a></li>
                                            <li className="border border-1 sub_home"><a href="#">doctor<i class="fa-solid fa-plus"></i></a></li>
                                            <li className="border border-1 sub_home"><a href="#">testimonial<i class="fa-solid fa-plus"></i></a></li>
                                            <li className="border border-1 sub_home"><a href="#">frequently asked question</a></li>
                                            <li className="border border-1 sub_home"><a href="#">404 error pages </a></li>
                                            <li className="border border-1 sub_home"><a href="#">page no side bar</a></li>
                                            <li className="border border-1 sub_home"><a href="#">page left sidebar </a></li>
                                            <li className="border border-1 sub_home"><a href="#">page right sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li className="me-4 mt-3 pb-3 pt-2"><a href="/#contact">Contact</a>
                                        <ul className="list-unstyled sub_menu">
                                            <li className="border border-1 sub_home"><a href="#">contact style one</a></li>
                                            <li className="border border-1 sub_home"><a href="#">contact style two</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-auto p-0 m-0 d-none d-xl-block">
                                
                                <button>Get An Appointment</button>

                            </div>
                            <div className="col-auto p-0 m-0 d-xl-none">
                                <div className="toggle-header"><i class="fa-solid fa-bars toggle"></i></div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header