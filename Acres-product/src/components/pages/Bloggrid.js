import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/bloggrid/Content';

class Bloggrid extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Blog Grid</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Blog Grid'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Bloggrid;