import './App.css';
import Conversions from './components/Conversions';
import { Container } from './styles/Container.styled';
import { StyledHeader } from './styles/Header.styled';

function App() {
  return (
    <div className="App">
      <Container>
        <StyledHeader>
          <h2>Measure Conversion Chart - Lengths (UK)</h2>
        </StyledHeader>
        <Conversions />
      </Container>
    </div>

  );
}

export default App;
