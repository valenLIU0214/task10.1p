const express = require('express');
const router = express.Router();
const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN });

router.post('/subscribe', (req, res) => {
    console.log("Request received with body:", req.body);
    const { email } = req.body;

    const data = {
        from: 'Excited User <lxy20020214@gmail.com>',
        to: email,
        subject: 'Welcome to DEV@Deakin',
        text: 'Thank you for subscribing to our newsletter!'
    };

    mg.messages().send(data, function (error, body) {
        if (error) {
            return res.status(500).send({ error });
        }
        res.send({ message: 'Email sent' });
    });
});

module.exports = router;
