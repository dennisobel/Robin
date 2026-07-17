import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/error/Content';

class Error extends Component {
    render() {
        return (
            <Fragment>
                <title>Page not found — Expert Homes</title>
                <meta name="description" content="That page has moved or never existed." />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Error 404'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Error;