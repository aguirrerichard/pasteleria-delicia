// src/components/Encabezado.jsx
export default function Encabezado({ cantidad }) {
  return (
    <header className="encabezado">
      <a href="#" className="marca">Pastelería <span>Delicia</span></a>
      <nav>
        <a href="#catalogo">Catálogo</a>
        <a href="#contacto">Contacto</a>
      </nav>
      {/* key cambia con la cantidad: el contador se vuelve a montar y "salta" */}
      <span className="carrito">Carrito <b key={cantidad}>{cantidad}</b></span>
    </header>
  );
}
