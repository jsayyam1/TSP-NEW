const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http'); // Import serverless-http

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

const paymentsDatabase = {};

app.post('/api/generate-upi-qr', (req, res) => {
    const { userId, amount } = req.body;
    const transactionId = `txn_${Math.random().toString(36).substring(7)}`;

    paymentsDatabase[transactionId] = {
        userId,
        amount,
        status: 'Pending',
    };

    const upiQrData = `upi://pay?pa=8850912626@kotak&pn=8850912626@kotak&mc=0000&tid=${transactionId}&tr=${transactionId}&tn=PaymentDescription&am=${amount}&cu=INR&url=https://yourwebsite.com/payment-callback`;

    res.json({ transactionId, upiQrData });
});

app.get('/payment-status/:transactionId', (req, res) => {
    const { transactionId } = req.params;
    const paymentDetails = paymentsDatabase[transactionId];

    if (!paymentDetails) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }

    res.json(paymentDetails);
});

// Export a handler function for Netlify
exports.handler = serverless(app);
