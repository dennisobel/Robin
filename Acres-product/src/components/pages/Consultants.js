import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Breadcrumb from '../layouts/Breadcrumb';
import Footer from '../layouts/Footer';
import Content from '../sections/consultants/Content';

class Consultants extends Component {
    render() {
        return (
            <Fragment>
                <title>Your relocation consultants — Karibu</title>
                <meta
                    name="description"
                    content="The people who will meet you at the airport, walk the houses with you and negotiate your lease."
                />
                <Header />
                <Breadcrumb breadcrumb={{ pagename: 'Our consultants' }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Consultants;
