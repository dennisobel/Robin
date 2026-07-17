import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import Savebutton from '../../layouts/Savebutton';
import Notfound from './Notfound';
import listings from '../../../data/listings.json';
import { findListing, usd, kes } from '../../../helper/listings';

// Illustrative room shots, deliberately shared by every listing — they're stock,
// not the rooms in that house (see public/assets/img/CREDITS.md). Composed here
// rather than stored on all twelve listings, which would just repeat itself.
const ROOMS = [
    'assets/img/rooms/living-room.jpg',
    'assets/img/rooms/bedroom.jpg',
    'assets/img/rooms/kitchen.jpg',
    'assets/img/rooms/bathroom.jpg',
];

/** The home's own exterior first, then the shared rooms. */
function galleryFor(item) {
    return [item.gridimg, ...ROOMS];
}

// Each nearby entry carries a type; give each its own icon so the list scans.
const NEARBY_ICON = {
    school: 'fas fa-graduation-cap',
    work: 'fas fa-briefcase',
    health: 'fas fa-hospital',
    shopping: 'fas fa-shopping-bag',
    leisure: 'fas fa-tree',
};

const pin = L.divIcon({
    className: '',
    html: '<div class="cxp-pin is-active">Here</div>',
    iconSize: [56, 26],
    iconAnchor: [28, 26],
});

function Content() {
    const { id } = useParams();
    const item = findListing(listings, id);

    // Deep links and stale shortlist entries can point at a home that is gone.
    if (!item) return <Notfound />;

    const gallery = galleryFor(item);
    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        autoplay: false,
    };

    return (
        <div className="section pt-0">
            <title>{`${item.title}, ${item.neighbourhood} — ${usd(item.monthlyprice)}/month | Expert Homes`}</title>
            <meta
                name="description"
                content={`${item.beds}-bedroom ${item.propertyType.toLowerCase()} in ${item.neighbourhood}, Nairobi. ${item.furnished}, ${item.leaseMin}-month minimum lease, available ${item.available}.`}
            />

            {/* Gallery. The single-image branch matters: slick clones a lone
                slide and renders it repeatedly, so a carousel of one is worse
                than a plain image. */}
            {gallery.length > 1 ? (
                <Slider {...settings} className="acr-single-slider">
                    {gallery.map((img, i) => (
                        <div key={i}>
                            <div
                                className="cxp-hero-img"
                                style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${img})` }}
                            />
                        </div>
                    ))}
                </Slider>
            ) : (
                <div
                    className="cxp-hero-img"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${gallery[0]})` }}
                />
            )}

            <div className="container mt-5">
                <div className="row">
                    {/* Main column */}
                    <div className="col-lg-8">
                        <div className="d-flex align-items-start justify-content-between mb-2">
                            <div>
                                <span className="cxp-eyebrow">{item.propertyType} · {item.neighbourhood}</span>
                                <h2 className="mb-1">{item.title}</h2>
                                <span className="cxp-card-hood">
                                    <i className="fas fa-map-marker-alt" />{item.neighbourhood}, Nairobi
                                </span>
                            </div>
                            <Savebutton id={item.id} />
                        </div>

                        <div className="mb-4">
                            <span className="cxp-price">{usd(item.monthlyprice)}<span> /month</span></span>
                            <span className="cxp-price-kes d-block">≈ {kes(item.kes)} per month</span>
                        </div>

                        {/* Key facts */}
                        <div className="cxp-facts mb-4">
                            <div className="cxp-fact">
                                <i className="flaticon-bedroom" />
                                <strong>{item.beds}</strong><span>Bedrooms</span>
                            </div>
                            <div className="cxp-fact">
                                <i className="flaticon-bathroom" />
                                <strong>{item.bathrooms}</strong><span>Bathrooms</span>
                            </div>
                            <div className="cxp-fact">
                                <i className="flaticon-ruler" />
                                <strong>{new Intl.NumberFormat().format(item.area)}</strong><span>Sq ft</span>
                            </div>
                            <div className="cxp-fact">
                                <i className="fas fa-couch" />
                                <strong>{item.furnished.replace('Fully furnished', 'Furnished')}</strong><span>Furnishing</span>
                            </div>
                        </div>

                        {/* About */}
                        <div className="acr-listing-section">
                            <h4>About this home</h4>
                            <p>{item.text}</p>
                        </div>

                        {/* Lease terms — the questions asked on every first call */}
                        <div className="acr-listing-section mt-4">
                            <h4>Lease terms</h4>
                            <ul className="cxp-chips">
                                <li className="cxp-chip is-key">
                                    <i className="fas fa-calendar-check" />Available {item.available}
                                </li>
                                <li className="cxp-chip is-key">
                                    <i className="fas fa-file-signature" />Minimum {item.leaseMin} months
                                </li>
                                <li className="cxp-chip">
                                    <i className="fas fa-shield-alt" />{item.security}
                                </li>
                                <li className="cxp-chip">
                                    <i className="fas fa-car" />{item.parking} parking spaces
                                </li>
                                {item.compound && (
                                    <li className="cxp-chip"><i className="fas fa-users" />Shared compound</li>
                                )}
                            </ul>
                        </div>

                        {/* Amenities */}
                        <div className="acr-listing-section mt-4">
                            <h4>What's included</h4>
                            <ul className="cxp-chips">
                                {item.amenities.map((a, i) => (
                                    <li key={i} className="cxp-chip">
                                        <i className="fas fa-check" />{a}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Nearby — the reason expats pick one area over another */}
                        <div className="acr-listing-section mt-4">
                            <h4>What's nearby</h4>
                            <p className="text-muted">Driving times are typical for a weekday morning.</p>
                            <ul className="cxp-nearby">
                                {item.nearby.map((n, i) => (
                                    <li key={i}>
                                        <span className="cxp-nearby-icon">
                                            <i className={NEARBY_ICON[n.type] || 'fas fa-map-pin'} />
                                        </span>
                                        <span>
                                            <span className="cxp-nearby-name">{n.name}</span>
                                            <span className="cxp-nearby-type">{n.type}</span>
                                        </span>
                                        <span className="cxp-nearby-dist">
                                            <strong>{n.mins} min</strong>
                                            <span>{n.km} km</span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Location */}
                        <div className="acr-listing-section mt-4">
                            <h4>Location</h4>
                            <div style={{ height: '320px', borderRadius: '8px', overflow: 'hidden' }}>
                                <MapContainer
                                    className="map"
                                    center={[item.lat, item.lng]}
                                    zoom={14}
                                    scrollWheelZoom={false}
                                    style={{ height: '100%' }}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    <Marker position={[item.lat, item.lng]} icon={pin} />
                                </MapContainer>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <div className="sidebar sidebar-right">
                            <div className="sidebar-widget">
                                <h5>Your consultant</h5>
                                <div className="cxp-consultant">
                                    <img src={process.env.PUBLIC_URL + '/' + item.authorimg} alt={item.authorname} />
                                    <div>
                                        <strong>{item.authorname}</strong>
                                        <span>Relocation consultant</span>
                                    </div>
                                </div>
                                <p className="text-muted">
                                    Has placed families in {item.neighbourhood} since 2019 and will
                                    walk the house with you — in person or on video.
                                </p>
                                <form method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your name" name="name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="When do you arrive?" name="arrival" />
                                    </div>
                                    <button type="submit" className="btn-custom primary btn-block">
                                        Book a viewing
                                    </button>
                                </form>
                                <Link to="/contact" className="btn-custom-2 light-grey btn-block mt-2">
                                    <i className="fab fa-whatsapp" /> WhatsApp instead
                                </Link>
                            </div>

                            <div className="sidebar-widget">
                                <h5>Not quite right?</h5>
                                <p className="text-muted">
                                    We place homes that never reach the site. Tell us the brief and
                                    we'll send three that fit.
                                </p>
                                <Link to="/search" className="btn-custom secondary btn-block">
                                    Back to the map
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
