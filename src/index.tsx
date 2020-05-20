import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Container} from '@material-ui/core';
import TopBar from './topBar';
import MainDescription from './mainDescription';
import StartButton from './startButton';

ReactDOM.render(
    <Container>
        <TopBar/>
        <MainDescription/>
        <StartButton/>
    </Container>,
    document.querySelector('#root')
);