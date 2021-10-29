import Header from "layout/Header";
import Footer from "layout/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto max-w-5xl flex flex-col h-screen m-0 ">
      <Header />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
