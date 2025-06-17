import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Excursii from "./excursii";
import Formular from "./formular";
import Lipsa from "./lipsa";
import { Route, Routes, NavLink, useNavigate } from "react-router-dom";
import "./app.css";

export default function App() {
  const [listaExcursii, setListaExcursii] = useState([]);
  const [edit, setEdit] = useState({
    id: 0,
    data: "",
    titlu: "",
    loc: "",
    descriere: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5050/")
      .then((rezultat) => rezultat.json())
      .then((data) => setListaExcursii(data));
  }, []);

  const stergExcursie = (id) => {
    const config = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`http://localhost:5050/sterg/${id}`, config)
      .then((resp) => resp.json())
      .then((data) => {
        setListaExcursii(data);
      });
  };

  const adaugExcursie = (act) => {
    act.id = listaExcursii.at(-1) ? listaExcursii.at(-1).id + 1 : 1;
    const config = {
      method: "POST",
      body: JSON.stringify(act),
      headers: {
        "Content-type": "application/json",
      },
    };
    fetch(`http://localhost:5050/adaug`, config)
      .then((resp) => resp.json())
      .then((data) => {
        setListaExcursii(data);
        navigate("/");
      });
  };

  const editeazaExcursie = (id) => {
    const obiect = listaExcursii.find((item) => +item.id === +id);
    if (obiect) {
      setEdit({
        id: obiect.id,
        data: obiect.data,
        titlu: obiect.titlu,
        loc: obiect.loc,
        descriere: obiect.descriere,
      });
      navigate("/formular");
    }
  };

  const editExcursie = (elem) => {
    const config = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(elem),
    };
    fetch(`http://localhost:5050/editez`, config)
      .then((resp) => resp.json())
      .then((data) => {
        setListaExcursii(data);
        navigate("/");
      });
    setEdit({
      id: 0,
      data: "",
      titlu: "",
      loc: "",
      descriere: "",
    });
  };

  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" },
  };

  return (
    <Container style={stil.container}>
      <Navbar bg='primary' variant='dark' expand='sm' className='p-2'>
        <Navbar.Brand href='/'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Excursii
            </NavLink>
            <NavLink
              to='/formular'
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              Formular
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes>
        <Route
          path='/'
          element={
            <Excursii
              excursii={listaExcursii}
              sterge={stergExcursie}
              editeaza={editeazaExcursie}
            />
          }
        ></Route>
        <Route
          path='/formular'
          element={
            <Formular
              transmit={adaugExcursie}
              obedit={edit}
              editez={editExcursie}
            />
          }
        ></Route>
        <Route path='*' element={<Lipsa />}></Route>
      </Routes>
    </Container>
  );
}
