const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// In-memory database (for demonstration purposes)
const paymentsDatabase = {};

// Endpoint to generate a UPI payment QR code
app.post('/generate-upi-qr', (req, res) => {
    const { userId, amount } = req.body;

    // Create a unique transaction ID
    const transactionId = `txn_${Math.random().toString(36).substring(7)}`;

    // Store payment details in the database
    paymentsDatabase[transactionId] = {
        userId,
        amount,
        status: 'Pending', // Initial status
    };

    // Generate UPI QR code data (replace with your UPI payment details)
    const upiQrData = `upi://pay?pa=8850912626@kotak&pn=8850912626@kotak&mc=0000&tid=${transactionId}&tr=${transactionId}&tn=PaymentDescription&am=${amount}&cu=INR&url=https://yourwebsite.com/payment-callback`;

    res.json({ transactionId, upiQrData });
});

// Endpoint to check the payment status
app.get('/payment-status/:transactionId', (req, res) => {
    const { transactionId } = req.params;

    // Retrieve payment details from the database
    const paymentDetails = paymentsDatabase[transactionId];

    if (!paymentDetails) {
        return res.status(404).json({ message: 'Transaction not found.' });
    }

    res.json(paymentDetails);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
