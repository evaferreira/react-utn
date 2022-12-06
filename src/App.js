// import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Mascota from './components/Mascota';
import Home from './pages/Home';
import Layout from './pages/Layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mascota" element={<Mascota />} />

          {/* 404
          <Route path="*" element={<NoMatch />} />
           */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
