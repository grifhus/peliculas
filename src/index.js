import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Componente({ titulo, children }) {
  // const titulo = props.titulo
  // const contenido = props.contenido
  // const { titulo, contenido } = props
  return (
    <div className="contenedor">
      <h1>{titulo}</h1>
      {/* <div>{contenido}</div> */}
      <div>{children}</div>
    </div>
  )
}
root.render(
  <Componente titulo="Titulo">Hola desde react</Componente>,
  document.getElementById("root")
)
