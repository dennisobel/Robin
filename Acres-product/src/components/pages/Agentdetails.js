import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agent-details/Content';

class Agentdetails extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Agent Details</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Agent Details'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agentdetails;