// src/App.jsx
import { useState, useEffect } from "react";
import Encabezado from "./components/Encabezado.jsx";
import Catalogo from "./components/Catalogo.jsx";
import "./App.css";

export default function App() {
  // El carrito vive en el PADRE: el encabezado lo lee y el catálogo lo modifica
  // Lee el carrito guardado una sola vez, al iniciar
  const [carrito, setCarrito] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("carrito")) ?? [];
    } catch {
      return [];
    }
  });

  // Cada vez que cambia el carrito, se guarda
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregar = (producto) => setCarrito((anterior) => [...anterior, producto]);
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);

  return (
    <>
      <Encabezado cantidad={carrito.length} />
      <main>
        <section className="portada">
          <p className="ceja">Horneado hoy en El Tambo, Huancayo</p>
          <h1>Tortas, panes y bocaditos recién salidos del horno</h1>
          <a href="#catalogo" className="boton">Ver catálogo</a>
        </section>
        <Catalogo onAgregar={agregar} />
      </main>
      <footer id="contacto">
        <p>Pastelería Delicia · Av. Huancavelica 1250, El Tambo</p>
        <p>Total en el carrito: S/ {total.toFixed(2)}</p>
        <button className="vaciar" onClick={() => setCarrito([])}>Vaciar carrito</button>
      </footer>
    </>
  );
}
