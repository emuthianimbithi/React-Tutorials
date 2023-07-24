import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Box from "./Box";
import calculateWinner from "./Outcome";

const Grid = () => {
  const [boxValue, setBoxValue] = useState(Array(9).fill(null));
  const [oIsNext, setOIsNext] = useState(false);

  const handleClick = (position) => {
    const newBoxValue = boxValue.slice();
    if (newBoxValue[position] || calculateWinner(boxValue)) {
      return;
    }
    if (oIsNext) {
      newBoxValue[position] = "O";
    } else {
      newBoxValue[position] = "X";
    }
    setBoxValue(newBoxValue);
    setOIsNext(!oIsNext);
  };

  const winner = calculateWinner(boxValue);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (oIsNext ? "O" : "X");
  }

  return (
    <Container className=" p-3">
          <Row>{status}</Row>
      <Row>
        <Box value={boxValue[0]} handleClick={() => handleClick(0)} />
        <Box value={boxValue[1]} handleClick={() => handleClick(1)} />
        <Box value={boxValue[2]} handleClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Box value={boxValue[3]} handleClick={() => handleClick(3)} />
        <Box value={boxValue[4]} handleClick={() => handleClick(4)} />
        <Box value={boxValue[5]} handleClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Box value={boxValue[6]} handleClick={() => handleClick(6)} />
        <Box value={boxValue[7]} handleClick={() => handleClick(7)} />
        <Box value={boxValue[8]} handleClick={() => handleClick(8)} />
      </Row>
    </Container>
  );
};

export default Grid;
