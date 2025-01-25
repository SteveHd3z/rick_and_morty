import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | <Link to="/result">Result</Link> | <Link to="/about">About us</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2025 My App</footer>
    </div>
  );
};

export default Layout;