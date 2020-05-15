import * as React from 'react';
import * as styles from './headerStyle.module.css';


type HeaderProps = {
    text: string
}

function Header(props: HeaderProps) {
    return(
        <h1 className = {styles.primaryHeader}>{props.text}</h1>
    );
}

Header.displayName = "Header";

export default Header;