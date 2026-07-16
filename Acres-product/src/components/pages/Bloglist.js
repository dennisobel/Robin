import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/bloglist/Content';

class Bloglist extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Blog List</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Blog List'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Bloglist;