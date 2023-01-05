import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import Input from "./components/input"
import Button from "./components/button";
import "./App.css"

const userCredential={
  password:"252525"
}

function App() {

  const [name,setName]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!name.trim() || !password.trim()) {
        swal("Error", "No olvides rellenar todos los campos", "error");
        return setError("Llena todos los campos");
    }

    if (
        userCredential.password === password
    ) {
      swal("Ingreso Correcto", `${name}, has rellenado los campos correctamente`, "success");;
    } 
};

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center">Desafío: Estado de los Componentes y Eventos</h1>
      </header>
      <form onSubmit={handleSubmit} className="row justify-content-center">
        <Input
          title="Nombre" 
          changeEvent={(e) => setName(e.target.value)}
          placeholder="Ingresar un Nombre"
          value={name}
        />
        <Input
          title="Password" 
          changeEvent={(e) => setPassword(e.target.value)}
          placeholder="Ingresar la contraseña"
          value={password}
        />
        {password==="252525"?(
          <Button type="submit"></Button>
        ):null}

      </form>
    </div>
  );
}

export default App;
