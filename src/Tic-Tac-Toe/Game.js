import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "./Grid";
import { Button } from "react-bootstrap";
import style from './../../node_modules/dom-helpers/esm/css';

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const oIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <Button
          variant="outline-dark"
                className="border text-center"
                style={{margin: "5px"}}
          onClick={() => jumpTo(move)}
        >
          {description}
        </Button>
      </li>
    );
  });

  return (
    <Container fluid style={{ minWidth: "220px" }}>
      <Row>
        <Col md={2}>
          <Grid
            oIsNext={oIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </Col>
        <Col md={2}>
          <ol>{moves}</ol>
        </Col>
      </Row>
    </Container>
  );
};

export default Game;
