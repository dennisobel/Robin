import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/listing-details-v3/Content';

class Listingdetailsthree extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Listing Details</title>
                <meta name="description" content="#" />

<div className="headerstyle">
                    <Header />
                </div>
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Listingdetailsthree;