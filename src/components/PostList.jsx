
function PostList({ posts, onDelete, onEdit }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => onDelete(post.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
