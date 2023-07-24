import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Box from "./Box";

const Grid = () => {
  return (
    <Container className=" p-3">
      <Row>
        <Box/>
        <Box/>
        <Box/>
      </Row>
      <Row>
        <Box/>
        <Box/>
        <Box/>
      </Row>
      <Row>
        <Box/>
        <Box/>
        <Box/>
      </Row>
    </Container>
  );
};

export default Grid;
