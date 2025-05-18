
// MyBlogs.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.get('/blogs');
        const mine = res.data.filter(blog => blog.userId === user._id);
        setBlogs(mine);
      } catch (error) {
        toast.error('Failed to load your blogs');
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      toast.success('Blog deleted successfully');
    } catch (error) {
      toast.error('Failed to delete blog');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog._id} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex">
            <div className="card w-100 h-100 shadow-sm">
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-truncate">{blog.content}</p>
                <div className="mt-auto">
                  <Link to={`/edit/${blog._id}`} className="btn btn-sm btn-warning me-2">Edit</Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(blog._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
