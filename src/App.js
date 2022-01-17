import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Question from './pages/Question';
import Result from './pages/Result';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  font-size: 16px;
  height: fit-content;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #1DD487, #25B2EA);
  display: flex;
  justify-content: center;
`
function App() {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/question" exact element={<Question />} />
        <Route path="/result" exact element={<Result />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
