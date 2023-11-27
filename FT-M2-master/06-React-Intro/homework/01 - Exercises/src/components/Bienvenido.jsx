import React from "react";
import botones from "./Botones";

const studentName = "Daniel Velasquez";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido(alerts) {
  // el código de tu componente acá
  return (
    <div classname="app">
      <h1>Homework React</h1>
      <h3 classname="studentName">{studentName}</h3>
      <h3 classname="techSkills">{techSkills.map}</h3>
      <botones />
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
