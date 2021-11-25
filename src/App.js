import React from 'react';
import { Container } from 'react-bootstrap';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Calculator />
      </Container>
    );
  }
}

export default App;
