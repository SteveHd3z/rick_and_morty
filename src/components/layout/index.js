import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div className="screen">
      <Header/>
      <main className="body_main">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;