import Header from "components/header/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="container mx-auto max-w-5xl">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
