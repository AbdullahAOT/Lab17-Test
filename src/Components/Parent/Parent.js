import './Parent.css';
import Child from '../Child/Child.js';
import { useState } from 'react';

function Parent() {
    const [totalGivenToys, setTotalGivenToysCount]=useState(0);
    const incrementTotalToys=()=>{
        setTotalGivenToysCount(totalGivenToys+1);
    }
    const toyMessage=()=>{
        console.log("Toy given successfully");
    }
    
    return(
        <div>
            <h1>number of given toys: {totalGivenToys}</h1>
            <h1>Childs:</h1>
            <Child img="https://pngimg.com/uploads/bugatti/small/bugatti_PNG35.png" incrementTotalToys={incrementTotalToys} toyMessage={toyMessage}/>
            <Child img="https://pngimg.com/uploads/camaro/small/camaro_PNG34.png" incrementTotalToys={incrementTotalToys} toyMessage={toyMessage}/>
            <Child img="https://pngimg.com/uploads/bentley/small/bentley_PNG53.png" incrementTotalToys={incrementTotalToys} toyMessage={toyMessage}/>
        </div>
    );
}

export default Parent;