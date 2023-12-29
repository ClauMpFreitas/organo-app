import "./Rodape.css";
import fundoImagem from "../../imagens/fundo.png";

const Rodape = () => {
  const estiloRodape = {
    backgroundImage: `url(${fundoImagem})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section>
      <footer className="main-footer" style={estiloRodape}>
        <ul className="left-group">
          <li>
            <img src="imagens/fb.png" alt="facebook" />
          </li>
          <li>
            <img src="imagens/ig.png" alt="instagram" />
          </li>
          <li>
            <img src="imagens/tw.png" alt="twitter" />
          </li>
        </ul>
        <ul className="center-group">
          <li>
            <img className="logo" src="/imagens/logo.png" alt="logo" />
          </li>
        </ul>
        <ul className="right-group">
          <li>
            <h3>Desenvolvido por Alura e Cláudia</h3>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default Rodape;
