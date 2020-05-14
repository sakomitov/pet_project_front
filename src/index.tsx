import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './header';
import CustomDate from './custom-date';
import FrootLoops from './froot-loops';

ReactDOM.render(
    <div>
        <Header text = "He he"/>
        <CustomDate />
        <FrootLoops fruit = {["red"]}/>
    </div>,
    document.querySelector('#root')
);