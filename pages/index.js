import MainLayout from "../components/MainLayout";
import Slider from "react-slick";

export default function Home() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
        ]
    };
  return (
    <MainLayout>
        <div id="preloader">
            <div className="preloader">
                <span/>
                <span/>
            </div>
        </div>
        <section id="home" className="slider-area slider-three-area p-relative slider-three-bg"
                 style={{background: "url(img/slider/slider_bg03.png)"}}>
            <div className="slider-overflow s-slider-overflow third-slider-overflow">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-8">
                            <div className="slider-content third-slider-content">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">Greatest thing in a long time</h2>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Our innovative platform empowers anyone
                                    to convert clicks into clients fast & easy .</p>
                                <a href="#" className="btn green-btn wow fadeInUp" data-wow-delay=".6s">Get Started
                                    Now</a>
                            </div>
                        </div>
                        <div className="col-lg-7 d-none d-lg-block">
                            <div className="slider-img slider-img-lg wow slideInRight" data-wow-delay=".6s"
                                 data-wow-duration="1.5s">
                                <img src="img/slider/slider_img02.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="features" className="features-area t-features-area p-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon01.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>Easy Customize</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon02.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>Retina Ready</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon03.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>Clean Code</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon04.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>Easy Integrate</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon05.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>User Freindly</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="t-single-features mb-75">
                            <div className="t-features-icon mb-35">
                                <img src="img/icon/t_features_icon06.png" alt="img"/>
                            </div>
                            <div className="t-features-content">
                                <h4>Clean Interface</h4>
                                <p>Collaborate over projects with your team and clients optimised for mobile and
                                    tablet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape f-shape-one"><span/></div>
            <div className="features-shape f-shape-two"><span/></div>
            <div className="features-shape f-shape-three"><span/></div>
            <div className="features-shape f-shape-four"><span/></div>
            <div className="features-shape f-shape-five"><span/></div>
            <div className="features-shape f-shape-six"><img src="img/shape/features_shape01.png" className="rotateme"
                                                             alt="shape"/></div>
            <div className="features-shape f-shape-seven"><img src="img/shape/features_shape02.png" alt="shape"/></div>
        </section>
        <section id="Choose" className="choose-area p-relative pt-95 pb-125">
            <div className="container">
                <div className="choose-wrap pb-180">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".2s">
                            <div className="choose-img">
                                <img src="img/images/choose_img01.jpg" alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 choose-pl-lg">
                            <div className="inner-title t-inner-title mb-30">
                                <span>CODE FREE DRAG & DROP BUILDER</span>
                                <h2>Easy landing pages to convert more visitors into customers</h2>
                            </div>
                            <div className="choose-content">
                                <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                    don't
                                    let slow page speeds drive our innovative platform empowers anyone to convert clicks
                                    ou'll publish your first landing
                                    page in minutes.</p>
                                <a href="#" className="btn green-btn">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choose-wrap">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 order-0 order-lg-2 wow fadeInRight" data-wow-delay=".2s">
                            <div className="choose-img choose-img-two p-relative text-center text-lg-right">
                                <img src="img/images/choose_img02.jpg" alt="img"/>
                                    <img src="img/images/choose_img03.jpg" className="paroller" alt=""
                                         data-paroller-factor="-0.08" data-paroller-factor-lg="-0.08"
                                         data-paroller-factor-md="-0.05"
                                         data-paroller-factor-sm="-0.05" data-paroller-type="foreground"
                                         data-paroller-direction="horizontal"/>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 choose-pr-lg">
                            <div className="inner-title t-inner-title mb-30">
                                <span>Integrate your favourite marketing apps</span>
                                <h2>Automatically add leads to email lists and trigger follow-up</h2>
                            </div>
                            <div className="choose-content">
                                <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                    don't
                                    let slow page speeds drive our innovative platform empowers anyone to convert clicks
                                    ou'll publish your first landing
                                    page in minutes.</p>
                                <a href="#" className="btn green-btn">Get Started Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-choose-bg-shape"><img src="img/bg/choose_bg_shape02.png" alt="img"/></div>
        </section>
        <div id="overview" className="video-area t-video-area p-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="s-video-bg p-relative">
                            <img src="img/images/laptop_video.png" alt="img"/>
                                <a href="https://www.youtube.com/watch?v=vKSA_idPZkc"
                                   className="s-video third-video popup-video"><i className="fas fa-play"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="testimonial-area t-testi-bg"  style={{background: "url(img/bg/t_testi_bg.png)"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title s-section-title white-title text-center">
                            <h2>User’s Review</h2>
                            <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                don't let slow</p>
                        </div>
                    </div>
                </div>

                {/*<div className="row testimonial-active">*/}
                    <Slider {...settings}>
                    <div className="col-xl-4">
                        <div className="single-testimonial white-bg" style={{width: 360}}>
                            <div className="testimonial-img">
                                <img src="img/images/testimonial_img01.jpg" alt="img"/>
                            </div>
                            <div className="testimonial-content fix">
                                <h5>"Really impressive and fast! easily the best tool for use anyone"</h5>
                                <div className="testi-avatar">
                                    <h6>David Miller</h6>
                                    <span>Journalist</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="single-testimonial white-bg"  style={{width: 360}}>
                            <div className="testimonial-img">
                                <img src="img/images/testimonial_img02.jpg" alt="img"/>
                            </div>
                            <div className="testimonial-content fix">
                                <h5>"Really impressive and fast! easily the best tool for use anyone"</h5>
                                <div className="testi-avatar">
                                    <h6>Andrew Maker</h6>
                                    <span>Actor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="single-testimonial white-bg" style={{width: 360}}>
                            <div className="testimonial-img">
                                <img src="img/images/testimonial_img03.jpg" alt="img"/>
                            </div>
                            <div className="testimonial-content fix">
                                <h5>"Really impressive and fast! easily the best tool for use anyone"</h5>
                                <div className="testi-avatar">
                                    <h6>David Miller</h6>
                                    <span>Actress</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="single-testimonial white-bg" style={{width: 360}}>
                            <div className="testimonial-img">
                                <img src="img/images/testimonial_img02.jpg" alt="img"/>
                            </div>
                            <div className="testimonial-content fix">
                                <h5>"Really impressive and fast! easily the best tool for use anyone"</h5>
                                <div className="testi-avatar">
                                    <h6>Cordy Alain</h6>
                                    <span>Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                {/*</div>*/}

            </div>
        </section>
        <section id="pricing" className="pricing-area pricing-sm-pt pt-85">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                        <div className="section-title s-section-title text-center mb-80">
                            <h2>Pricing Plans</h2>
                            <p>Collaborate over projects with your team and clients optimised for mobile and tablet
                                don't let slow</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-box text-center mb-30">
                            <div className="pricing-head s-pricing-head t-pricing-head">
                                <h3>Free</h3>
                                <h2 className="price-count">$0<span>/mo</span></h2>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li>Unlimited Landing Pages</li>
                                    <li>Unlimited Team Members</li>
                                    <li>Unlimited Leads</li>
                                    <li>Unlimited Page Views</li>
                                    <li>Export in HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="pricing-btn">
                                <a href="#" className="btn green-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-box text-center active mb-30">
                            <div className="pricing-head s-pricing-head t-pricing-head">
                                <h3>Personal</h3>
                                <h2 className="price-count">$10<span>/mo</span></h2>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li>Unlimited Landing Pages</li>
                                    <li>Unlimited Team Members</li>
                                    <li>Unlimited Leads</li>
                                    <li>Unlimited Page Views</li>
                                    <li>Export in HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="pricing-btn">
                                <a href="#" className="btn green-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="pricing-box text-center mb-30">
                            <div className="pricing-head s-pricing-head t-pricing-head">
                                <h3>Studio</h3>
                                <h2 className="price-count">$30<span>/mo</span></h2>
                            </div>
                            <div className="pricing-list">
                                <ul>
                                    <li>Unlimited Landing Pages</li>
                                    <li>Unlimited Team Members</li>
                                    <li>Unlimited Leads</li>
                                    <li>Unlimited Page Views</li>
                                    <li>Export in HTML/CSS</li>
                                </ul>
                            </div>
                            <div className="pricing-btn">
                                <a href="#" className="btn green-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="download" className="download-area pt-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10" data-aos="fade-up">
                        <div className="t-download-img text-center">
                            <img src="img/images/download_img.png" alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="t-download-bg" data-background="img/bg/t_download_bg.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="section-title white-title text-center mb-20">
                                <h2>Get Xotix App</h2>
                            </div>
                            <div className="download-content text-center">
                                <p>Of course, you can upgrade from a free forever plan to a
                                    pro plan anytime you want</p>
                                <a href="#" className="btn green-btn">Get Started</a>
                                <a href="#" className="btn green-btn">Free Trial</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
  )
}
