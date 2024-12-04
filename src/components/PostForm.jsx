import  { useState, useEffect } from 'react';

function PostForm({ onSubmit, postToEdit }) {
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    if (postToEdit) {
      setPost(postToEdit);
    }
  }, [postToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({ title: '', content: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">{postToEdit ? 'Update' : 'Create'} Post</button>
    </form>
  );
}

export default PostForm;
