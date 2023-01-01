import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Graph } from './pages/Graph';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:user/:year" element={<Graph />} />

      </Routes>
    </Router>
  );
}

export default App;
