import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/agent-archive/Content';

class Agentarchive extends Component {
    render() {
        return (
            <Fragment>
                <title>Acres - Real Estate React Template | Agent Archive</title>
                <meta name="description" content="#" />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:'Agent Archive'}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Agentarchive;