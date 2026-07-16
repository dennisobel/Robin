import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Trustbar from './Trustbar';
import Neighbourhoods from './Neighbourhoods';
import Featured from './Featured';
import Howitworks from './Howitworks';
import Contactform from './Contactform';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Trustbar />
                <Neighbourhoods />
                <Featured />
                <Howitworks />
                <Contactform />
            </Fragment>
        );
    }
}

export default Content;
