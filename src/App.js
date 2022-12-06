// import logo from './logo.svg';
import Title from './components/Title';
import Mascota from './components/Mascota';
import Card from './components/Card';
import './App.css';

function App() {
  const numeros = [45, 78, 12, 787, 341];

  return (
    <div className="App">
      {/* {numeros.map(numero => {
        sumarle un 10%
        total = numero * 1.1
        return (
          <p>El número es: {total}</p>
        );
      })}
        El .map requiere un return, puedo usar () para que esté implícito
      */}

      {numeros.map(numero => (
        <p>El número es: {numero}</p>
      ))}

      {/* Llamamos al componente y le enviamos el parámetro */}
      <Title titulo={'Hola, cómo va'} />
      <Card />
      <Mascota />
      <header className="App-header">
        <img src="images/gatito.jpg" alt="Gatito" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit!!! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
