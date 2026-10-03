function Article({ titulo, autor, data, conteudo }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p className="info">Por {autor} em {data}</p>
      <p>{conteudo}</p>
    </article>
  );
}

export default Article;