import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import React, { useState } from "react";
import styles from './puzzle.module.css'

function InputForm({onInputChange}) {
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        onInputChange(inputValue); // Pass the input value to the parent component
        console.log(inputValue);
    }

    return(
        <div className={styles.input_box}>
            <input type="text" required="required" onChange={handleInputChange}></input>   
        </div>
    );
}

function ConfirmButton({ onConfirmClick }) {
    const handleClick = () => {
        onConfirmClick();
    }

    return(
        <div className={styles.container}>
            <button className={styles.button_style} onClick={handleClick}>Get the solution</button>
        </div>
    );
}

export default function Home() {
    const [matrixInitialState, setMatrixInitialState] = useState(null); 
    
    const handleInputChange = (inputValue) => {

    }

    const handleConfirmClick = () => {
        // Here, you can update matrixInitialState with the processed input value
        // For example:
        // const processedMatrix = ... // Process the input value as needed
        // setMatrixInitialState(processedMatrix);
    }


    return (
        <>
            <h1 className={styles.text}>SET INITIAL STATE</h1>
            <InputForm onInputChange={handleInputChange} />
            <ConfirmButton onConfirmClick={handleConfirmClick} />
            {matrixInitialState && (
                <div>
                    <p>Initial Matrix State:</p>
                    {/* Display the initial matrix state here */}
                </div>
            )}
        </>
    );
}