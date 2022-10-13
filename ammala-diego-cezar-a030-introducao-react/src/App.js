import "./App.css";
import CardVideo from "./Componentes/CardVideo";

function App(props) {
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  const titulo = "titulo do vídeo";
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr></hr>
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal" onClick={reproduzVideo}>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=1"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=2"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=3"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=4"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=5"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=6"}/>
              <CardVideo titulo={titulo} img={"https://picsum.photos/400/400?a=7"}/>
            </div>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}

export default App;
