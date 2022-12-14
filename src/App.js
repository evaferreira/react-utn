import {Routes, Route} from 'react-router-dom';

import './App.css';

// Importamos las páginas y el Layout
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import MensajeError from './pages/MensajeError';
import Layout from './pages/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="nosotros" element={<Nosotros />} />

          {/* Si la ruta no coincide con ninguna de las anteriores, mostra un 404 */}
          <Route path="*" element={<MensajeError />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
