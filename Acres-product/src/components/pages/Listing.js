import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import Content from '../sections/listing/Content';

/**
 * Title and description are rendered inside Content, which is where the
 * listing data is — React 19 hoists them into <head> from there.
 */
class Listing extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Listing;
