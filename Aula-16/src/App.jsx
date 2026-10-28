import EtiquetaAula from './components/EtiquetaAula.jsx';

// PRIMEIRO OLHAR: as três publicações repetem quase a mesma estrutura JSX.
// DESAFIO DA AULA: criar o componente PostCard e passar informações com props.
// O botão de curtir é apenas visual aqui; a interatividade fica para depois.
export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <EtiquetaAula />
        <h1 className="page-title">MiniFeed</h1>
        <p className="page-description">Uma comunidade dev, três publicações e muito JSX repetido. Como melhorar?</p>
      </header>

      <section className="feed" aria-label="Publicações">
        <article className="post">
          <div className="avatar avatar--pink" aria-hidden="true">C</div>
          <div className="post-body">
            <div className="post-author">
              <strong>Camila Dev</strong>
              <span>@camilacodes</span>
            </div>
            <p className="post-text">Passei 40 minutos tentando centralizar uma div. Era só colocar align-items: center. Vou fingir que nada aconteceu. 💀</p>
            <div className="post-footer">
              <button className="like-button" type="button">♡ Curtir · 120</button>
            </div>
          </div>
        </article>

        <article className="post">
          <div className="avatar avatar--purple" aria-hidden="true">M</div>
          <div className="post-body">
            <div className="post-author">
              <strong>Maromba.exe</strong>
              <span>@treinoecommit</span>
            </div>
            <p className="post-text">O Ramon Dino treina até a falha. Eu também, mas a minha é no terminal. 💪</p>
            <div className="post-footer">
              <button className="like-button" type="button">♡ Curtir · 86</button>
            </div>
          </div>
        </article>

        <article className="post">
          <div className="avatar avatar--green" aria-hidden="true">D</div>
          <div className="post-body">
            <div className="post-author">
              <strong>Dev Universitário</strong>
              <span>@sobrevivendoaocodigo</span>
            </div>
            <p className="post-text">Descobri que posso criar um componente e reutilizar 50 vezes. Minha era de copiar e colar HTML chegou ao fim. ⚛️</p>
            <div className="post-footer">
              <button className="like-button" type="button">♡ Curtir · 42</button>
            </div>
          </div>
        </article>
      </section>
      <p className="page-note">Laboratório de React • Componentes, props e, depois, interatividade</p>
    </main>
  );
}
