import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import React from "react";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [puzzle, setPuzzle] = React.useState([]);
  const [complete, setComplete] = React.useState(false); // no need
  // const [moves, setMoves] = React.useState(0); // no need

  // const A* -> setPuzzle(newMatrix) => Update matrix 

  const checkCompletion = puzzle => {
    // if (flattenArray(puzzle).join("") === "123456780") {
    //   setComplete(true);
    // } -> no need


    // setComplete() => only need this
  };

  // Reset Puzzle after complete
  const resetPuzzle = () => {
    setComplete(false);
    // setPuzzle(getPuzzle());
    // setMoves(0);
  };

  return (
    <>
      <Head>
        <title>Sliding Piece Puzzle AI</title>
        <meta name="description" content="A sliding puzzle game run by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      }} >
        {/* {<h3>Moves: {moves}</h3>} */}
        <div
          style={{
            display: "inline-block",
            backgroundColor: "darkgray",
            border: `5px solid ${complete ? "black" : "gray"}`,
            borderRadius: 5,
            padding: 5
          }}
        >
          {puzzle.map((row, i) => (
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
        {complete && (
          <p>
            <button
              onClick={() => {
                resetPuzzle();
              }}
            >
              Play Again
            </button>
          </p>
        )}
      </div>
    </>
  )
}
