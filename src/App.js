import React from "react";

import Excursie from "./excursie";

function App() {
  const stergeExcursie = (id) => {};
  return (
    <div>
      <Excursie
        id='1'
        ora='10:00'
        titlu='Întâlnire cu presa'
        loc='Sala G114'
        descriere='Nu este cazul'
        sterge={stergeExcursie}
      />
    </div>
  );
}

export default App;
