import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formular = (props) => {
  const [data, setData] = useState("");
  const [titlu, setTitlu] = useState("");
  const [loc, setLoc] = useState("");
  const [descriere, setDescriere] = useState("");

  const stil = {
    h2: { textAlign: "center" },
  };

  const tratezSubmit = (evt) => {
    evt.preventDefault();
    const excursie = { data, titlu, loc, descriere };
    props.transmit(excursie); //  Transmit spre App obiectul "excursie"
    //  Golesc controalele formularului
    setData("");
    setTitlu("");
    setLoc("");
    setDescriere("");
  };

  return (
    <>
      <h2 className='mt-4' style={stil.h2}>
        Excursie nouă
      </h2>
      <hr />
      <Form onSubmit={tratezSubmit}>
        <Form.Group>
          <Form.Label>Data:</Form.Label>
          <Form.Control
            type='text'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Titlu:</Form.Label>
          <Form.Control
            type='text'
            value={titlu}
            onChange={(e) => setTitlu(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Loc:</Form.Label>
          <Form.Control
            type='text'
            value={loc}
            onChange={(e) => setLoc(e.target.value)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descriere:</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={descriere}
            onChange={(e) => setDescriere(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Formular;
