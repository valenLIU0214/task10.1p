import React from 'react';
import NewsletterSignup from './NewsletterSignup'; // 
import './Footer.css'; 

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <NewsletterSignup />
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Explore</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Questions</a></li>
                            <li><a href="#">Articles</a></li>
                            <li><a href="#">Tutorials</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Stay Connected</h3>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
