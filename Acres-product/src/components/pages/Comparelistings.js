import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/compare-listings/Content';

class Comparelistings extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Compare Listings</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Compare Listings'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Comparelistings;