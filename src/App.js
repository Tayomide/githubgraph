import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from "styled-components"
import { Home } from './pages/Home';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``
