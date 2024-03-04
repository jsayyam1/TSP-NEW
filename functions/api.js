const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverless = require('serverless-http');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

// Replace <your_mongodb_uri> with your actual MongoDB URI
const mongoUri = "mongodb+srv://varrshinie123:varrshinie@thestallionproject.py34cwp.mongodb.net/?retryWrites=true&w=majority";
//private key = '62d09aa1-0fae-4954-9103-3630bf34dd8f'
//public key ='tswlezgi'
const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });



app.post('/api/generate-upi-qr', async (req, res) => {
    const { userId, amount } = req.body;
    const transactionId = `txn_${Math.random().toString(36).substring(7)}`;

    try {
        await client.connect(); // Connect to MongoDB
        console.log('MongoDB connected'); // Add this line to log the connection

        const database = client.db("thestallionproject");
        const collection = database.collection("payments");

        const paymentDetails = {
            userId,
            amount,
            status: 'Pending',
            transactionId,
        };

        await collection.insertOne(paymentDetails);

        const upiQrData = `upi://pay?pa=8850912626@kotak&pn=Yash%20Shubrojit%20Mitra&tn=PaymentDescription&am=${amount}&cu=INR`;

        res.json({ transactionId, upiQrData });
    } catch (error) {
        console.error("Error storing payment details in MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await client.close();
    }
});

app.get('/payment-status/:transactionId', async (req, res) => {
    const { transactionId } = req.params;

    try {
        await client.connect(); // Connect to MongoDB
        console.log('MongoDB connected'); // Add this line to log the connection

        const database = client.db("thestallionproject");
        const collection = database.collection("payments");

        const paymentDetails = await collection.findOne({ transactionId });

        if (!paymentDetails) {
            return res.status(404).json({ message: 'Transaction not found.' });
        }

        res.json(paymentDetails);
    } catch (error) {
        console.error("Error fetching payment details from MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await client.close();
    }
});

// Add a new route for UPI payment callback
app.post('/upi-payment-callback', async (req, res) => {
    const { transactionId, status } = req.body;

    try {
        await client.connect(); // Connect to MongoDB
        console.log('MongoDB connected');

        const database = client.db("thestallionproject");
        const collection = database.collection("payments");

        // Find the document based on transactionId
        const paymentDetails = await collection.findOne({ transactionId });

        if (!paymentDetails) {
            return res.status(404).json({ message: 'Transaction not found.' });
        }

        // Update the payment status based on the UPI payment status
        if (status === 'success') {
            await collection.updateOne(
                { transactionId },
                { $set: { status: 'Completed' } }
            );

            res.json({ message: 'Payment status updated to Completed.' });
        } else {
            // Handle other status if needed
            res.json({ message: 'Payment status not updated.' });
        }
    } catch (error) {
        console.error("Error updating payment status in MongoDB:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } finally {
        await client.close();
    }
});



// Export a handler function for Netlify
exports.handler = serverless(app);
