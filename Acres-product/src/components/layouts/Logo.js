import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Text wordmark rather than an image: the template shipped an "Acres" PNG and
 * a text mark keeps the brand editable (and sharp on any display) without
 * commissioning artwork for a demo.
 */
function Logo({ sub = true, className = '' }) {
    return (
        <Link className={`navbar-brand karibu-brand ${className}`.trim()} to="/">
            <span className="karibu-brand-mark" aria-hidden="true">K</span>
            <span className="karibu-brand-word">
                Karibu<em>homes</em>
                {sub && <small>Nairobi</small>}
            </span>
        </Link>
    );
}

export default Logo;
