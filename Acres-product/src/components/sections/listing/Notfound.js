import React from 'react';
import { Link } from 'react-router-dom';

/** Shown when /listing/:id points at a home that no longer exists. */
function Notfound() {
    return (
        <div className="section">
            <title>Home no longer listed — Expert Homes</title>
            <meta name="description" content="This Nairobi home has been let or the link is out of date. See what else is available." />
            <div className="container">
                <div className="cxp-empty">
                    <i className="fas fa-house-damage" />
                    <h5>This home is no longer listed</h5>
                    <p>It may have been let already, or the link may be out of date.</p>
                    <Link to="/search" className="btn-custom primary">See what's available</Link>
                </div>
            </div>
        </div>
    );
}

export default Notfound;
