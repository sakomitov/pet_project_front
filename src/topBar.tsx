import * as React from 'react';
import {Toolbar, AppBar, Link, makeStyles, Box, createMuiTheme, ThemeProvider} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
  }))

function TopBar() {
    const classes = useStyles();
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Link variant = 'h4' href='index.html' underline='none' color='inherit'>Petty Pictures</Link>
                </Toolbar>
            </AppBar>
            <div className={classes.offset} />
        </Box>
    );
}

TopBar.displayName = "TopBar";

export default TopBar;