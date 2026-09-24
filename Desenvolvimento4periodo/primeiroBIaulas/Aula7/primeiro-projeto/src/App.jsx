import './App.css';
import Header from './components/Header';

export default function App() {
  const qtdPosts = 16;
  const habilitado = false;

  return (
    <main id="container">
      <Header habilitado={habilitado} q
      uantidadePosts={qtdPosts} />

      <section>
        <h1>Nossos últimos posts</h1>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
        </article>
        <article>
          <h1>Independente 1x0 Curintia</h1>
          <p>Depay melhor batedor de pênalti do BR</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
        </article>
        <article>
          <h1>Flamengo 2x1 Curintia</h1>
          <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
        </article>
        <article>
          <h1>Torneiras x1 Curintia</h1>
          <p>Nos 45 do segundo tempo a lenda BH mata o jogo</p>
        </article>
      </section>
    </main>
  );
}