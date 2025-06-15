import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Excursii from "./excursii";
import Formular from "./formular";
import Lipsa from "./lipsa";
import { Route, Routes, NavLink } from "react-router-dom";
import "./app.css";

function App() {
  const [listaExcursii, setListaExcursii] = useState([]);
  const stergExcursie = (id) => {
    const listaNouaExcursii = listaExcursii.filter((item) => {
      if (item.id !== parseInt(id, 10)) {
        return true;
      }
      return false;
    });
    setListaExcursii([...listaNouaExcursii]);
  };
  const adaugExcursie = (act) => {
    act.id = listaExcursii.length + 1;
    setListaExcursii([...listaExcursii, act]);
  };
  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" },
  };
  return (
    <Container style={stil.container}>
      <Navbar bg='primary' variant='dark' expand='sm' className='p-2'>
        <Navbar.Brand href='/'>Acasa</Navbar.Brand>
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
          element={<Excursii excursii={listaExcursii} sterge={stergExcursie} />}
        ></Route>
        <Route
          path='/formular'
          element={<Formular transmit={adaugExcursie} />}
        ></Route>
        <Route path='*' element={<Lipsa />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
