import React from 'react';
import { Link } from 'react-router-dom';
import Listingcard from '../../layouts/Listingcard';
import listings from '../../../data/listings.json';
import { useShortlist } from '../../../helper/shortlist';

function Content() {
    const ids = useShortlist();
    // Preserve the order the user saved them in, and skip any ids whose
    // listing has since been removed from the dataset.
    const saved = ids.map((id) => listings.find((l) => l.id === id)).filter(Boolean);

    return (
        <div className="section">
            <div className="container">
                {saved.length === 0 ? (
                    <div className="karibu-empty">
                        <i className="far fa-heart" />
                        <h5>Your shortlist is empty</h5>
                        <p>
                            Tap the heart on any home and it'll appear here — ready to send to
                            your partner, or to your consultant to arrange viewings.
                        </p>
                        <Link to="/search" className="btn-custom primary">Browse the map</Link>
                    </div>
                ) : (
                    <>
                        <div className="section-title-wrap section-header">
                            <h5 className="custom-primary">Your shortlist</h5>
                            <h2 className="title">{saved.length} {saved.length === 1 ? 'home' : 'homes'} saved</h2>
                            <p>
                                Send this list to your consultant and we'll arrange the viewings
                                back to back, in one morning.
                            </p>
                        </div>
                        <div className="row">
                            {saved.map((item) => (
                                <div key={item.id} className="col-lg-4 col-md-6">
                                    <Listingcard item={item} />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-4">
                            <Link to="/contact" className="btn-custom primary">
                                Arrange viewings for these <i className="fas fa-arrow-right" />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;
