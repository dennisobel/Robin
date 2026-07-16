import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

class Footer extends Component {
    render() {
        return (
            <footer className="acr-footer footer-2">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-12 footer-widget">
                                <div className="footer-logo">
                                    <Logo sub={false} />
                                </div>
                                <p>
                                    Homes in Nairobi for families arriving from somewhere else.
                                    Near the UN, the embassies and the international schools —
                                    with the power, water and security already checked.
                                </p>
                                <ul className="social-media">
                                    <li> <Link to="#"> <i className="fab fa-linkedin-in" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-instagram" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-facebook-f" /> </Link> </li>
                                    <li> <Link to="#"> <i className="fab fa-whatsapp" /> </Link> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 offset-lg-1 col-sm-4 footer-widget">
                                <h5 className="widget-title">Find a home</h5>
                                <ul>
                                    <li> <Link to="/search">Search the map</Link> </li>
                                    <li> <Link to="/search?neighbourhood=Gigiri">Gigiri</Link> </li>
                                    <li> <Link to="/search?neighbourhood=Runda">Runda</Link> </li>
                                    <li> <Link to="/search?neighbourhood=Karen">Karen</Link> </li>
                                    <li> <Link to="/shortlist">Your shortlist</Link> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-4 footer-widget">
                                <h5 className="widget-title">Support</h5>
                                <ul>
                                    <li> <Link to="/relocation">Relocation</Link> </li>
                                    <li> <Link to="/consultants">Consultants</Link> </li>
                                    <li> <Link to="/faq">FAQ</Link> </li>
                                    <li> <Link to="/contact">Contact</Link> </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-sm-4 footer-widget">
                                <h5 className="widget-title">Office</h5>
                                <ul>
                                    <li>Village Market</li>
                                    <li>Limuru Road, Gigiri</li>
                                    <li>Nairobi, Kenya</li>
                                    <li> <Link to="tel:+254200000000">+254 20 000 0000</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <p className="m-0">© {new Date().getFullYear()} Karibu Homes. All rights reserved.</p>
                            </div>
                            <div className="col-lg-5">
                                <ul>
                                    <li> <Link to="/about">About</Link> </li>
                                    <li> <Link to="/faq">FAQ</Link> </li>
                                    <li> <Link to="/contact">Contact</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
