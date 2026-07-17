import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Text wordmark rather than an image: the template shipped an "Acres" PNG and
 * a text mark keeps the brand editable (and sharp on any display) without
 * commissioning artwork.
 *
 * "CXP Homes" is the mark; "Expert Homes" is the name used in prose and page
 * titles.
 */
function Logo({ sub = true, className = '' }) {
    return (
        <Link className={`navbar-brand cxp-brand ${className}`.trim()} to="/">
            <span className="cxp-brand-mark" aria-hidden="true">C</span>
            <span className="cxp-brand-word">
                CXP<em>Homes</em>
                {sub && <small>Nairobi</small>}
            </span>
        </Link>
    );
}

export default Logo;
