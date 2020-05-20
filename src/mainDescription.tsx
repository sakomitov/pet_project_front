import * as React from 'react';
import {Typography, Box} from '@material-ui/core';

function MainDescription() {
    return (
        <Box display="flex" justifyContent="center">
            <Typography align='center' display="inline">
                Karl Sims had an idea.<br />
                A certain Rice professor ruined it for many students.<br />
                Here's an attempt to revive it.<br />
            </Typography>
        </Box>
    );
}

MainDescription.displayName = "MainDescription";

export default MainDescription;