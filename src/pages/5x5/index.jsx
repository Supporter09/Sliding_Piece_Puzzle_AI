import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import React, { useState } from "react";
import styles from './puzzle.module.css'

export default function Home() {
    const [matrixInitialState, setMatrixInitialState] = useState(null);
    const [userMatrix, setUserMatrix] = useState();
    const [puzzle, setPuzzle] = React.useState([]);

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        // onInputChange(inputValue); // Pass the input value to the parent component
        console.log(inputValue);
        setUserMatrix(inputValue);
    }

    const handleClick = () => {
        setMatrixInitialState(userMatrix);
        // setPuzzle(yourPuzzle)
    }

    const playAgain = () => {
        setMatrixInitialState(null);
        setUserMatrix()
    }
    // const handleInputChange = (inputValue) => {

    // }

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
                    {/* Display the initial matrix state here */}
                    <div
                        style={{
                            display: "inline-block",
                            backgroundColor: "darkgray",
                            border: `5px solid ${complete ? "black" : "gray"}`,
                            borderRadius: 5,
                            padding: 5
                        }}
                    >
                        {puzzle && puzzle.map((row, i) => (
                            <div
                                key={i}
                                style={{
                                    display: "flex"
                                }}
                            >
                                {row.map((col, j) => {
                                    const color = col === 0 ? "transparent" : "lightgray";
                                    return (
                                        <div
                                            key={`${i}-${j}`}
                                            // onClick={() => movePiece(i, j)}
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: 77,
                                                height: 77,
                                                margin: 2,
                                                backgroundColor: color,
                                                borderRadius: 5,
                                                cursor: complete ? "not-allowed" : "pointer",
                                                userSelect: "none"
                                            }}
                                        >
                                            <span style={{ fontSize: "2rem", fontWeight: "bold" }}>
                                                {col !== 0 && col}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}