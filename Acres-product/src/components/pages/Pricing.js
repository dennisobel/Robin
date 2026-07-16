import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/pricing/Content';

class Pricing extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Pricing</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Pricing'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Pricing;