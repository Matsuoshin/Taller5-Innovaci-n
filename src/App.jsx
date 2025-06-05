import { useState, useEffect } from "react";
import { productos } from "./data";
import ModelViewer from "./ModelViewer"; // 👈 Importamos el componente externo
import "./App.css";

function App() {
  const [productoDetalle, setProductoDetalle] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productoDetalle]);

  const volverAGaleria = () => setProductoDetalle(null);

  const irAnterior = () => {
    const index = productos.findIndex(p => p.id === productoDetalle.id);
    if (index > 0) setProductoDetalle(productos[index - 1]);
  };

  const irSiguiente = () => {
    const index = productos.findIndex(p => p.id === productoDetalle.id);
    if (index < productos.length - 1) setProductoDetalle(productos[index + 1]);
  };

  const Logos = () => (
    <div className="logos-container">
      <div className="logos">
        <img src="/logo1.png" alt="Universidad de San Buenaventura Cali" />
        <img src="/logo2.png" alt="Facultad de Arquitectura, Arte y Diseño" />
        <img src="/logo3.png" alt="Diseño de Vestuario" />
        <img src="/logo4.png" alt="Taller 5: Innovación" />
      </div>
    </div>
  );

  return (
    <div className="App">
      <nav className="navbar">
        <div className="container">
          <h1 onClick={volverAGaleria}>Taller 5: Innovación</h1>
        </div>
      </nav>

      <main className="container">
        {!productoDetalle ? (
          <>
            <header className="header-section">
              <h2>Galería de Diseños</h2>
              <p>Explora los diseños creados por nuestros estudiantes</p>
            </header>

            <section className="galeria">
              {productos.map((item) => (
                <article
                  key={item.id}
                  className="producto"
                  onClick={() => setProductoDetalle(item)}
                >
                  <div className="producto-imagen">
                    <img
                      src={item.imagen || "/placeholder.svg"}
                      alt={`Vista previa de ${item.nombre}`}
                    />
                  </div>
                  <div className="producto-info">
                    <h3>{item.Diseno}</h3>
                    <p>{item.nombre}</p>
                  </div>
                </article>
              ))}
            </section>
          </>
        ) : (
          <section className="producto-detalle-container">
            <article
              className="producto-detalle"
              style={{
                backgroundImage: `url("/fondo.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="detalle-grid">
                <div className="detalle-imagen">
                  <img
                    src={productoDetalle.imagen || "/placeholder.svg"}
                    alt={productoDetalle.nombre}
                  />
                </div>
                <div className="detalle-info">
                  <header className="detalle-header">
                    <h2>Taller 5: Innovación</h2>
                    <h3>{productoDetalle.nombre} presentan:</h3>
                    <h1>{productoDetalle.Diseno}</h1>
                  </header>
                  <div className="detalle-descripcion">
                    <p>{productoDetalle.informacion}</p>
                  </div>
                </div>
              </div>

              <section className="modelo-3d">
                <h3>Modelo 3D</h3>
                <ModelViewer productoDetalle={productoDetalle} /> {/* 👈 Pasamos props */}
              </section>

              <div className="botones-navegacion">
                <button className="btn-volver" onClick={volverAGaleria}>
                  Volver a la galería
                </button>

                <div className="botones-siguiente-anterior">
                  <button
                    onClick={irAnterior}
                    className="btn-volver"
                    disabled={productos.findIndex(p => p.id === productoDetalle.id) === 0}
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={irSiguiente}
                    className="btn-volver"
                    disabled={productos.findIndex(p => p.id === productoDetalle.id) === productos.length - 1}
                  >
                    Siguiente →
                  </button>
                </div>
              </div>
            </article>
          </section>
        )}
      </main>

      <Logos />

      <footer className="footer">
        <div className="container">
          <p>
            Diseño por{" "}
            <a href="https://ragrosstudios.com" target="_blank" rel="noopener noreferrer">
              <strong>Fabián Posso</strong>, Docente de Ingeniería Multimedia
            </a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
