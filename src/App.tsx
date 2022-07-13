import React from 'react';
import {ProfiForm} from './ProfiForm';
import {GlobalStyle, Container} from './styled';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <ProfiForm />
      </Container>
    </>
  );
}

export default App;
