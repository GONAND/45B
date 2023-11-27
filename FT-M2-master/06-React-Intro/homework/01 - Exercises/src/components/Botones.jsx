import React from "react";

export default function botones() {
  return (
    <div>
      <button onClick={() => alert("ALERTA M1")}>Módulo 1</button>
      <button onClick={() => alert("ALERTA M2")}>Módulo 2</button>
    </div>
  );
}
