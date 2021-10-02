import Layout from "layout/index";
import useTranslation from "next-translate/useTranslation";

const Home: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <Layout>
      <div className="flex justify-center items-center h-96">
        <h1 className="text-6xl">{t("title")}</h1>
      </div>
    </Layout>
  );
};

export default Home;
