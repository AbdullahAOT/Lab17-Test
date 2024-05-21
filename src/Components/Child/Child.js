import { useState } from 'react';
import './Child.css';

function Child(props) {
    const [toyCount, setToyCount] = useState(0);
    const giveToy = () => {
        setToyCount(toyCount + 1);
        props.incrementTotalToys();
        props.toyMessage();
    };
    return (
        <>
        <img src={props.img}></img>
            <button onClick={giveToy}>Give Toy</button>
            <h1>{toyCount}</h1>
        </>
    );
}

export default Child;