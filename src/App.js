import React from "react";
import Saludo from "./components/Saludo";
import Comentario from "./components/Comentario"; 

function App() {
  return (
    <div className="container mt-5">
     <h1>proyecto desde cero</h1>
     <Saludo persona='Ignacio' edad={30}/>
     <Saludo persona='Juanito' edad={25}/>
     <Saludo persona='Pedrito' edad={33}/>
     <hr />
     <h3>cajita de comentarios</h3>
     <Comentario
        urlImagen='https://picsum.photos/64'
        persona='Ignacio'
        texto='ddddddddddddd'
     />
     <Comentario 
        urlImagen='https://picsum.photos/64'
        persona='Juanito'
        texto='aaaaaaaaaaaaaaaaa'
     />
     <Comentario
      urlImagen='https://picsum.photos/64'
      persona='Pedrito'
      texto='ffffffffffffffff'     
     />
    </div>
  );
}

export default App;
