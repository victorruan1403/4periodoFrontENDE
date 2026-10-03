function Sidebar({ posts }) {
  return (
    <aside>
      <h3>Posts relacionados</h3>
      <ul>
        {posts.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;