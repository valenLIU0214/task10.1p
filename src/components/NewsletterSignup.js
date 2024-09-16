import React, { useState } from 'react';
import axios from 'axios';

function NewsletterSignup() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/subscribe', { email })
;
            alert('Thank you for subscribing!');
        } catch (error) {
            console.error('Error sending email', error);
            alert('Error subscribing to newsletter.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">Subscribe</button>
        </form>
    );
}

export default NewsletterSignup;
