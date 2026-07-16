import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';
import navigation from '../../data/navigation.json';

/**
 * Desktop navigation, driven by data/navigation.json — the same file the mobile
 * menu reads. The template hardcoded this list in JSX, which meant every nav
 * change had to be made twice and the two drifted apart.
 */
class Menu extends Component {
    render() {
        return (
            <Fragment>
                <Logo />
                <ul className="navbar-nav">
                    {navigation.map((item) => (
                        <li
                            key={item.id}
                            className={`menu-item ${item.child ? 'menu-item-has-children' : ''}`.trim()}
                        >
                            {item.child ? (
                                <Link to={item.link}>{item.linkText}</Link>
                            ) : (
                                <NavLink to={item.link} end={item.link === '/'}>
                                    {item.linkText}
                                </NavLink>
                            )}

                            {item.child && (
                                <ul className="submenu">
                                    {item.submenu.map((sub) => (
                                        <li key={sub.id} className="menu-item">
                                            <NavLink to={sub.link}>{sub.linkText}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}

export default Menu;
