import "./App.css";
import Texto from "./components/olamundo";
import ListaOrdenada from "./components/listaOrdenada";
import Paragrafo from "./components/paragrafo";
import Imagem from "./components/imagem";
import Botao from "./components/Botão";
import Link from "./components/link";
import TituloEsubtitulo from "./components/TituloeSubtitulo";
import VerificarBomDia from "./components/Bomdia";
import DivComEstilo from "./components/DivComEstilo";
import VariosElementos from "./components/VariosElementos";

function App() {
  return (
    <>
      <h3>Exercicio01</h3>
      <Texto />
      <h3>Exercicio02</h3>
      <Paragrafo />
      <h3>Exercicio03</h3>
      <ListaOrdenada />
      <h3>Exercicio04</h3>
      <Imagem />
      <h3>Exercicio05</h3>
      <Botao />
      <h3>Exercicio06</h3>
      <Link />
      <h3>Exercicio07</h3>
      <TituloEsubtitulo />
      <h3>Exercicio08</h3>
      <VerificarBomDia diaOuNoite={true} />
      <h3>Exercicio09</h3>
      <DivComEstilo />
      <h3>Exercicio10</h3>
      <div className="fundo">
      <  VariosElementos />
      </div>
    </>
  );
}

export default App;
