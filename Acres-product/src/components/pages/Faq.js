import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/faq/Content';

class Faq extends Component {
    render() {
        return (
            <Fragment>
                <title>Questions expats ask about renting in Nairobi — Karibu</title>
                <meta name="description" content="Deposits, generators, boreholes, school waiting lists, lease currency and six-month leases — answered plainly." />
                <Header/>
                <Breadcrumb breadcrumb={{pagename:"FAQ's"}} />
                <Content/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Faq;