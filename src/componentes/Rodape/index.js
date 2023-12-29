import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="main-footer">
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
  );
};

export default Rodape;
