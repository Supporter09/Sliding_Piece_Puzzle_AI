import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import React, { useState } from "react";
import styles from './puzzle.module.css'

export default function Home() {
    const [matrixInitialState, setMatrixInitialState] = useState(null);
    const [userMatrix, setUserMatrix] = useState()

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        // onInputChange(inputValue); // Pass the input value to the parent component
        console.log(inputValue);
        setUserMatrix(inputValue);
    }

    const handleClick = () => {
        setMatrixInitialState(userMatrix)
    }
    // const handleInputChange = (inputValue) => {

    // }

    const handleConfirmClick = () => {
        // Here, you can update matrixInitialState with the processed input value
        // For example:
        // const processedMatrix = ... // Process the input value as needed
        // setMatrixInitialState(processedMatrix);
    }

    //puzzle as a first state
    if (matrixInitialState != null) {
        const numbers = matrixInitialState.split(' ').map(Number);
        const puzzle = [];
        for (let i = 0; i < 3; i++) {
            puzzle.push(numbers.slice(i * 3, i * 3 + 3));
        }
        console.log(puzzle);
    }
    



    return (
        <>
            <h1 className={styles.text}>SET INITIAL STATE</h1>
            {/* <InputForm onInputChange={handleInputChange} /> */}
            <div className={styles.input_box}>
                <input type="text" required="required" onChange={handleInputChange}></input>
            </div>
            <div className={styles.container}>
                <button className={styles.button_style} onClick={handleClick}>Get the solution</button>
            </div>
            {/* <ConfirmButton onConfirmClick={handleConfirmClick} /> */}
            {matrixInitialState && (
                <div>
                    <p>Initial Matrix State:</p>
                    {matrixInitialState}
                </div>
            )}
        </>
    );
}