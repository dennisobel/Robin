import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agency-details/Content';

class Agencydetails extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Agency Details</title>
                    <meta
                        name="description"
                        content="#" 
                    />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Agency Details'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agencydetails;