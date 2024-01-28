import React, { useState } from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';

const Payments = () => {
    const [transactionId, setTransactionId] = useState(null);
    const [upiQrData, setUpiQrData] = useState(null);
    const [qrCodeDisplayed, setQrCodeDisplayed] = useState(false);

    const generateUpiQr = async () => {
        // Replace with your actual UPI identifier and API endpoint
        
        const apiUrl = '/api/generate-upi-qr';


        const yourUpiIdentifier = '8850912626@kotak'; // Replace with your UPI identifier

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: 'The Stallion Project', // Replace with actual user ID
                    amount: 1, // Replace with actual payment amount
                    receiverUpi: yourUpiIdentifier,
                }),
            });

            const data = await response.json();
            setTransactionId(data.transactionId);
            setUpiQrData(data.upiQrData);
            setQrCodeDisplayed(true); // Set the flag to display QR code
        } catch (error) {
            console.error('Error generating UPI QR code:', error);
        }
    };

    return (
        <Stack direction="column" spacing={25} alignItems="center">
            <Box>
                <Typography variant="h4">Choose Payment Method</Typography>
            </Box>

            {!qrCodeDisplayed && transactionId === null && (
                <Box style={{ display: 'flex', gap: '15px' }}>
                    <Button variant="contained" color="primary" onClick={() => alert('Redirecting to card payment...')}>
                        Pay by Card
                    </Button>

                    <Button variant="contained" color="primary" onClick={generateUpiQr}>
                        Pay with UPI
                    </Button>
                </Box>
            )}

            {qrCodeDisplayed && (
                <Box style={{ marginTop: '20px' }}>
                    <Typography variant="h6">UPI Transaction ID: {transactionId}</Typography>
                    {/* Display UPI QR Code */}
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(upiQrData)}`} alt="UPI QR Code" />
                </Box>
            )}
        </Stack>
    );
};

export default Payments;
