import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Box from "./Box";
import calculateWinner from "./Outcome";

const Grid = ({ oIsNext, onPlay, squares }) => {
  const handleClick = (position) => {
    const newSquares = squares.slice();
    if (newSquares[position] || calculateWinner(squares)) {
      return;
    }
    if (oIsNext) {
      newSquares[position] = "O";
    } else {
      newSquares[position] = "X";
    }
    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (oIsNext ? "O" : "X");
  }

  return (
    <Container className=" p-3" style={{minWidth:"220px"}}>
      <Row>{status}</Row>
      <Row>
        <Box value={squares[0]} handleClick={() => handleClick(0)} />
        <Box value={squares[1]} handleClick={() => handleClick(1)} />
        <Box value={squares[2]} handleClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Box value={squares[3]} handleClick={() => handleClick(3)} />
        <Box value={squares[4]} handleClick={() => handleClick(4)} />
        <Box value={squares[5]} handleClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Box value={squares[6]} handleClick={() => handleClick(6)} />
        <Box value={squares[7]} handleClick={() => handleClick(7)} />
        <Box value={squares[8]} handleClick={() => handleClick(8)} />
      </Row>
    </Container>
  );
};

export default Grid;
