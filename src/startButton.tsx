import * as React from 'react';
import {Button, Typography, Box} from '@material-ui/core';

function StartButton() {
    return (
        <Box display="flex" justifyContent="center">
            <Button><Typography>Get Started</Typography></Button>
        </Box>
    );
}

StartButton.displayName = "StartButton";

export default StartButton;