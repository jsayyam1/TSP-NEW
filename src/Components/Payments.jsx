import React, { useState } from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import QrCode from 'react-qr-code';

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
                    userId: 'The Stallion Project',
                    amount: 1,
                    receiverUpi: yourUpiIdentifier,
                }),
            });
            
            if (!response.ok) {
                console.error('Error generating UPI QR code. Status:', response.status);
                return;
            }

            const data = await response.json();
            setTransactionId(data.transactionId);
            setUpiQrData(data.upiQrData);
            setQrCodeDisplayed(true); // Set the flag to display QR code
        } catch (error) {
            console.error('Error generating UPI QR code:', error);
        }
    };

    return (
        <div style={{ paddingTop: '180px' }}>
            <Stack direction="column" spacing={20} alignItems="center">
                <Box>
                    <Typography variant="h2" style={{ fontFamily: 'Sarala', fontWeight: 'bold', textAlign: 'center' }}>
                        Choose Payment Method
                    </Typography>
                </Box>

                {!qrCodeDisplayed && transactionId === null && (
                    <Box style={{ display: 'flex', gap: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => alert('Redirecting to card payment...')}
                            style={{ width: '200px', height: '50px' }}
                        >
                            Credit/Debit Card
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={generateUpiQr}
                            style={{ width: '200px', height: '50px' }}
                        >
                            Pay with UPI
                        </Button>
                    </Box>
                )}

                {qrCodeDisplayed && upiQrData && (
                    <Box style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Typography variant="h6" style={{ fontFamily: 'Sarala' }}>
                            UPI Transaction ID: {transactionId}
                        </Typography>
                        <QrCode value={upiQrData} />
                    </Box>
                )}

            </Stack>
        </div>
    );
};

export default Payments;
