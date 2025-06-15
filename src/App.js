import React from "react";

import Excursie from "./excursie";

function App() {
  const stergeExcursie = (id) => {};
  return (
    <div>
      <Excursie
        id='1'
        data='10 iun 2025'
        titlu='Excursie cu bicicletele'
        loc='Pădurea Fagetului'
        descriere='O zi frumoasă'
        sterge={stergeExcursie}
      />
    </div>
  );
}

export default App;
