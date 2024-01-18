import React from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Payments = () => {
    const cardPayment = () => {
        // Add logic for card payment
        alert('Redirecting to card payment...');
    };

    return (
        <Stack direction="column" spacing={25} alignItems="center">
            <Box>
                <Typography variant="h4">Choose Payment Method</Typography>
            </Box>

            <Box style={{ display: 'flex', gap: '15px' }}>
                <Button variant="contained" color="primary" onClick={cardPayment}>
                    Pay by Card
                </Button>

                <Button variant="contained" color="primary">
                    <Link to="/upi-payment" style={{ textDecoration: 'none', color: 'white' }}>
                        Pay with UPI
                    </Link>
                </Button>
            </Box>
        </Stack>
    );
};

export default Payments;
