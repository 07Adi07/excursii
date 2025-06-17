import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BsPencilSquare } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const Excursie = (props) => {
  const { data, titlu, loc, descriere, sterge, editeaza, id } = props;

  const stil = {
    svg: {
      PointerEvent: "none",
    },
  };

  return (
    <Container>
      <h4>
        {data}-{titlu}
      </h4>
      <Row>
        <Col xs={9}>
          <h6>Loc: {loc}</h6>
        </Col>
        <Col xs={3} className='d-flex align-items-center'>
          <Button
            variant='link'
            onClick={() => editeaza(id)}
            id={id}
            style={stil}
          >
            <BsPencilSquare />
          </Button>
          <Button
            variant='link'
            onClick={() => sterge(id)}
            id={id}
            style={stil}
          >
            <BsTrashFill />
          </Button>
        </Col>
      </Row>
      <p>{descriere}</p>
      <hr />
    </Container>
  );
};

export default Excursie;
