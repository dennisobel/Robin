import React, { Component, Fragment } from 'react';
import Header from '../layouts/Header';
import Content from '../sections/search/Content';

/** Full-height search: no footer, the map owns the viewport. */
class Search extends Component {
    render() {
        return (
            <Fragment>
                <title>Find a home in Nairobi — Karibu</title>
                <meta
                    name="description"
                    content="Search furnished homes across Gigiri, Runda, Karen, Westlands and Kilimani. Filter by budget, bedrooms, furnishing and distance to international schools."
                />
                <Header />
                <Content />
            </Fragment>
        );
    }
}

export default Search;
