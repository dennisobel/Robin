import React, { Fragment } from 'react';
import Menu from './Menu';
import Mobilemenu from './Mobilemenu';
import HeaderComponent from '../../helper/Navigationhelper';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useShortlist } from '../../helper/shortlist';

/** Shortlist count next to the header link — hooks need a function component. */
function Shortlistlink() {
    const count = useShortlist().length;
    return (
        <Link to="/shortlist" className="btn-custom-2 light-grey">
            <i className={count ? 'fas fa-heart' : 'far fa-heart'} />
            {count > 0 ? ` Shortlist (${count})` : ' Shortlist'}
        </Link>
    );
}

class Header extends HeaderComponent {
    render() {
        return (
            <Fragment>
                {/* Aside (Mobile Navigation) */}
                <aside className={classNames("main-aside", { "open": this.state.navtoggle })}>
                    <div className="aside-title">
                        <div className="aside-controls aside-trigger">
                            <h4>Menu</h4>
                            <div className="close-btn close-dark" onClick={this.navtoggleClass} >
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="aside-overlay aside-trigger" onClick={this.navtoggleClass} />
                {/* Header Start */}
                <header className="main-header header-3">
                    <nav className="navbar">
                        <div className="container">
                            <Menu />
                            <div className="header-controls">
                                <ul className="header-controls-inner d-none d-lg-flex align-items-center">
                                    <li className="me-2"> <Shortlistlink /> </li>
                                    <li>
                                        <Link to="/login" className="btn-custom primary">Sign in <i className="fas fa-user" /> </Link>
                                    </li>
                                </ul>
                                {/* Toggler */}
                                <div className="aside-toggler aside-trigger" onClick={this.navtoggleClass}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* Header End */}
            </Fragment>
        );
    }
}

export default Header;
