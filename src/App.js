import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Config from './Config';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/.well-known/microsoft-identity-association.json' element={<Config />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
