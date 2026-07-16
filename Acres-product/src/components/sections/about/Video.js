import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'magnific-popup';

class Video extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-youtube').magnificPopup({
                type: 'iframe'
            });
        }
        popup()
    }
    render() {
        return (
            <div className="section light-bg">
                <div className="container">
                    <div className="section-title-wrap text-center">
                        <h5 className="custom-primary">See a home first</h5>
                        <h2 className="title">Every house, on video, before you fly</h2>
                        <p className="subtitle">
                            You shouldn't have to sign a two-year lease from a photo gallery. We
                            walk each home with a camera — including the generator, the water tank
                            and the road in the rain — so what you see is what you land in.
                        </p>
                        <Link to="https://www.youtube.com/watch?v=TKnufs85hXk&t=1s" className="btn-custom popup-youtube"> <i className="m-0 fas fa-play" /> </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;