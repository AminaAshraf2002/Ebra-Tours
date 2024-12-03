// src/components/WhyChooseUs.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faGlobe, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    return (
        <div className="why-choose-us">
            <h2>WHY CHOOSE US?</h2>
            <p>Your Trusted Travel Partner</p>
            <div className="reasons">
                <div className="reason">
                    <FontAwesomeIcon icon={faWallet} className="why-icon" />
                    <h3>Affordable Price Guarantee</h3>
                    <p>Unbeatable Prices for Every Journey You Dream Of.</p>
                </div>
                <div className="reason">
                    <FontAwesomeIcon icon={faGlobe} className="why-icon" />
                    <h3>Wide Variety of Destinations</h3>
                    <p>Discover Endless Destinations to Satisfy Your Wanderlust.</p>
                </div>
                <div className="reason">
                    <FontAwesomeIcon icon={faThumbsUp} className="why-icon" />
                    <h3>Highly Qualified Service</h3>
                    <p>Experience Exceptional Services for Memorable Adventures.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;