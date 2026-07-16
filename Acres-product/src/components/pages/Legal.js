import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/legal/Content';

class Legal extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Legal</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Legal'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Legal;