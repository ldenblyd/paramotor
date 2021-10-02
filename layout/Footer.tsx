import LangSelector from "components/langSelector/LangSelector";
import SocialsMedias from "components/SocialsMedias";

const Header: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font flex justify-between items-center uppercase">
      <SocialsMedias />
      <LangSelector />
    </footer>
  );
};

export default Header;
