import EtiquetaAula from './components/EtiquetaAula.jsx';
import PostCard from './components/PostCard.jsx';
import { posts } from './data/posts.js';

export default function App() {
  return (
    <main className="page">
      <header className="page-header">
        <EtiquetaAula />
        <h1 className="page-title">MiniFeed</h1>
        <p className="page-description">Uma comunidade dev, três publicações e muito JSX repetido. Como melhorar?</p>
      </header>

      <section className="feed" aria-label="Publicações">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            nome={post.nome}
            tema={post.tema}
            texto={post.texto}
            iniciais={post.iniciais}
            curtidasIniciais={post.curtidasIniciais}
          />
        ))}
      </section>
      <p className="page-note">Laboratório de React • Componentes, props e, depois, interatividade</p>
    </main>
  );
}
