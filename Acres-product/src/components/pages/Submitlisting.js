import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/submit-listing/Content';

class Submitlisting extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Submit Listing</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Submit Listing'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Submitlisting;