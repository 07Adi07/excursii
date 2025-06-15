import React from "react";
import Container from "react-bootstrap/Container";
import Excursii from "./excursii";

const listaExcursii = [
  {
    id: 1,
    data: "12 Apr 2025",
    loc: "Pădurea Verde",
    titlu: "Alergare de primăvară",
    descriere: " O zi frumoasă.",
  },
  {
    id: 2,
    data: "11 Dec 2024",
    loc: "Stâna de Vale",
    titlu: "La schi",
    descriere: " Am fost acolo.",
  },
  {
    id: 3,
    data: "17 Iun 2025",
    loc: "Padiș",
    titlu: "Plimbare montană",
    descriere: "Traseul ales a fost minunat.",
  },
];

export default function App() {
  const stergExcursie = (id) => console.log("Sterg: " + id);
  const stil = {
    container: { maxWidth: "700px" },
    h2: { textAlign: "center" },
  };

  return (
    <Container style={stil.container}>
      <Excursii excursii={listaExcursii} sterge={stergExcursie} />
    </Container>
  );
}
