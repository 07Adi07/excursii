import React from "react";
import Excursie from "./excursie";

const Excursii = (props) => {
  const { excursii, sterge, editeaza } = props;
  const listaExcursii = excursii.map((item) => (
    <Excursie
      data={item.data}
      descriere={item.descriere}
      titlu={item.titlu}
      loc={item.loc}
      id={item.id}
      key={item.id}
      sterge={sterge}
      editeaza={editeaza}
    />
  ));
  const stil = {
    h2: { textAlign: "center" },
  };
  return (
    <>
      <h2 className='mt-4' style={stil.h2}>
        Excursii
      </h2>
      <hr />
      <div>{listaExcursii}</div>
    </>
  );
};

export default Excursii;
