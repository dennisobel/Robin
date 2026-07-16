import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/listinglist/Content';

class Listinglist extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Listing List</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Listing List'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Listinglist;