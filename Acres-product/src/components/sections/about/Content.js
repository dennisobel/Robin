import React, { Component, Fragment } from 'react';
import Story from './Story';
import Counter from './Counter';
import Video from './Video';
import Testimonials from './Testimonials';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Story />
                <Counter />
                <Video />
                <Testimonials />
            </Fragment>
        );
    }
}

export default Content;
