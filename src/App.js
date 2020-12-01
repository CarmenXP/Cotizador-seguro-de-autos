import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const { default: Header } = require("./components/Header");


const Contenedor = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color: #FFF;
  padding: 3rem;
`


function App() {
  return (
    <Contenedor>
        <Header 
          titulo='Cotizador de Seguros'
        />
        <ContenedorFormulario>
          
          <Formulario/>
          
        </ContenedorFormulario>

    </Contenedor>
  );
}

export default App;
