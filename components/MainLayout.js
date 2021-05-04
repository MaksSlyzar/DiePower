import Head from "next/head";
import Link from "next/link";
import {useRouter} from "next/router";
import AuthModal from "./AuthModal";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {logOut, setToken} from "../redux/actions/auth.actions";

export default function MainLayout({children}){
    const router = useRouter()
    const dispatch = useDispatch()
    const {token} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(setToken())
    }, [])

    const logout = () => {
        dispatch(logOut())
    }
    return <>
        <header id="sticky-header" className={"transparent-menu t-transparent-menu " + (router.pathname.split('/')[1] === 'history' ? 'sticky-menu history' : '')}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="main-menu t-main-menu">
                            <nav className="navbar navbar-expand-lg">
                                <Link href={'/'}>
                                    <a>
                                        <img src="/img/logo/w_logo.png" alt=""/>
                                    </a>
                                </Link>

                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNav">
                                    <span className="navbar-icon"/>
                                    <span className="navbar-icon"/>
                                    <span className="navbar-icon"/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active"><a className="nav-link" href="#home">Home</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="#Choose">Choose</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#overview">Overview</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href="#download">Download</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="t-header-btn ml-30 d-none d-lg-block">
                                    <Link href="/history"><a  className="btn green-btn">Screens</a></Link>
                                    {token ?
                                        <button className="btn green-btn"
                                                style={{color: '#fff', background: 'transparent', border: '1px solid #fff', marginLeft: 10}}
                                                onClick={logout}
                                        >
                                            Log out
                                        </button>
                                        :
                                        <AuthModal/>
                                    }
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <Head>
                <meta charSet="utf-8"/>
                    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                        <title>Xotix - Software & SasS Landing Page Template</title>
                        <meta name="description" content=""/>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>

                        <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.png"/>


            </Head>
            {children}
        </main>
        <footer>
            <div className="container">
                <div className="footer-top-wrap pt-80 pb-45">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-widget mb-30">
                                <div className="f-logo mb-20">
                                    <Link href={'/'}>
                                        <a>
                                            <img src="/img/logo/logo.png" alt="Logo"/>
                                        </a>
                                    </Link>

                                </div>
                                <div className="footer-text">
                                    <p>Landing page builder is a hosted platform powered by the brizy builder aiming to
                                        connect you with potential clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="footer-widget mb-30">
                                <div className="fw-title">
                                    <h5>Company</h5>
                                </div>
                                <div className="fw-link s-fw-link">
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our Team</a></li>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="footer-widget mb-30">
                                <div className="fw-title">
                                    <h5>Product</h5>
                                </div>
                                <div className="fw-link s-fw-link">
                                    <ul>
                                        <li><a href="#">Feature</a></li>
                                        <li><a href="#">Pricing</a></li>
                                        <li><a href="#">Credit</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="footer-widget mb-30">
                                <div className="fw-title">
                                    <h5>Download</h5>
                                </div>
                                <div className="fw-link s-fw-link">
                                    <ul>
                                        <li><a href="#">iOS</a></li>
                                        <li><a href="#">Android</a></li>
                                        <li><a href="#">Microsoft</a></li>
                                        <li><a href="#">Desktop</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6">
                            <div className="footer-widget mb-30">
                                <div className="fw-title">
                                    <h5>Support</h5>
                                </div>
                                <div className="fw-link s-fw-link">
                                    <ul>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-wrap">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-text text-center">
                                <p>2019 &copy;Copyright xotix template designed by love. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
}
