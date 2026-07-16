import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/services/Content';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Services</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Services'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Services;