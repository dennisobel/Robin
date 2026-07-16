import React from 'react';
import { Link } from 'react-router-dom';
import Savebutton from './Savebutton';
import { usd, kes } from '../../helper/listings';

/**
 * One home. Shared by the search results, the shortlist and the homepage so
 * a listing looks identical wherever it appears.
 */
function Listingcard({ item, active = false, onHover }) {
    const to = `/listing/${item.id}`;
    const furnishedShort = item.furnished.replace('Fully furnished', 'Furnished');

    return (
        <div
            className={`karibu-card ${active ? 'is-active' : ''}`.trim()}
            onMouseEnter={onHover ? () => onHover(item.id) : undefined}
            onMouseLeave={onHover ? () => onHover(null) : undefined}
        >
            {item.featured && <span className="karibu-badge">Featured</span>}
            <Savebutton id={item.id} className="karibu-save-float" />
            <Link
                to={to}
                className="karibu-card-thumb"
                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${item.gridimg})` }}
                aria-label={item.title}
            />
            <div className="karibu-card-body">
                <h5> <Link to={to}>{item.title}</Link> </h5>
                <span className="karibu-card-hood">
                    <i className="fas fa-map-marker-alt" />{item.neighbourhood}
                </span>

                <div className="karibu-card-meta">
                    <span><i className="flaticon-bedroom" />{item.beds} bed</span>
                    <span><i className="flaticon-bathroom" />{item.bathrooms} bath</span>
                    <span><i className="flaticon-ruler" />{new Intl.NumberFormat().format(item.area)} sqft</span>
                </div>

                <ul className="karibu-chips">
                    <li className="karibu-chip is-key"><i className="fas fa-couch" />{furnishedShort}</li>
                    <li className="karibu-chip"><i className="fas fa-file-signature" />{item.leaseMin}m min</li>
                    <li className="karibu-chip"><i className="fas fa-calendar-check" />{item.available}</li>
                </ul>

                <div className="d-flex align-items-end justify-content-between mt-3">
                    <div>
                        <span className="karibu-price">{usd(item.monthlyprice)}<span> /month</span></span>
                        <span className="karibu-price-kes d-block">≈ {kes(item.kes)}</span>
                    </div>
                    <Link to={to} className="btn-custom btn-sm secondary">View</Link>
                </div>
            </div>
        </div>
    );
}

export default Listingcard;
