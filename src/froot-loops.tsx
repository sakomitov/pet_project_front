import * as React from 'react';

type FrootLoopsProps = {
    fruit: Array<string>
}

function FrootLoops(props: FrootLoopsProps) {
    let fruit : Array<string> = ["red", "green", "blue"]
    return (
        <ul>
            {props.fruit.map((value, index) => {
                return <li key={index} style = {{color: value}}>{value}</li>
            })}
        </ul>
    )
}

FrootLoops.displayName = "FrootLoops";

export default FrootLoops;