// import logo from './logo.svg';
import Title from './components/Title';
import Mascota from './components/Mascota';
import Card from './components/Card';
import './App.css';

function App() {
  const numeros = [43, 56,234,23,657];

  return (
    <div className="App">
      <Title title={'holi'} />
      <Card />
      {numeros.map(numero => (
        <h3>Es: {numero}</h3>
      ))}
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
