import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AllBlogs from './pages/AllBlogs';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import MyBlogs from './pages/MyBlogs';

function App() {
  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AllBlogs />} />
          <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!token ? <Signup /> : <Navigate to="/" />} />
          <Route path="/create" element={token ? <CreateBlog /> : <Navigate to="/login" />} />
          <Route path="/edit/:id" element={token ? <EditBlog /> : <Navigate to="/login" />} />
          <Route path="/my-blogs" element={token ? <MyBlogs /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
