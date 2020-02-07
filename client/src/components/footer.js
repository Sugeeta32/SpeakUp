import React from 'react';
import './footer.css';

const Footer = () => (
    <div className="footer-bottom">
        <p className ="text-xs-center">
            &copy;{new Date().getFullYear()} SpeakUp
        </p>
    </div>
)

export default Footer;