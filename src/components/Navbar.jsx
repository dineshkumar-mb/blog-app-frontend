import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">BlogApp</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {token ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/my-blogs">My Blogs</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger ms-2" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
