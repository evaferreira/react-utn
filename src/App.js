import './App.css';
import { useState } from 'react';
import CardWrapper from './components/CardWrapper';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [mostrar, setMostrar] = useState(false);

  function handleMostrar () {
    setMostrar(!mostrar)
  }

  // function aaah () {
  //   alert('te saludan');
  // }

  return (
    <div className="App">
      <button onClick={() => setCantidad(cantidad - 1)}>
        -
      </button>
      {cantidad}
      <button onClick={() => setCantidad(cantidad + 1)}>
        +
      </button>

      {mostrar &&
        <h2>holis</h2>
      }
      <button onClick={handleMostrar}>
        Mostrar
      </button>
      <CardWrapper
        titulo={'Ofertas'}
      />
    </div>
  );
}

export default App;
