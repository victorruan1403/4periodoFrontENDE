import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const post = {
    titulo: "Os melhores jogos de 2026",
    autor: "Victor Ruan",
    data: "03/10/2026",
    conteudo:
      "Escreva aqui o conteúdo do seu post sobre games, igual ao da atv1.",
  };

  const relacionados = ["Review: Jogo X", "Top 5 RPGs", "Dicas para iniciantes"];

  return (
    <div className="container">
      <Header titulo="Meu Blog de Games" />
      <Navigation />
      <main className="conteudo">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar posts={relacionados} />
      </main>
      <Footer />
    </div>
  );
}

export default App;