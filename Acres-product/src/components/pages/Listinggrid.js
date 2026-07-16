import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/listinggrid/Content';

class Listinggrid extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Listing Grid</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Listing Grid'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Listinggrid;