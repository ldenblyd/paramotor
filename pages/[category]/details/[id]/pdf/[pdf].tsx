import { engines } from "mocks/engines";
import { useRouter } from "next/router";
import styles from "./pdf.module.css";

const Pdf: React.FC = () => {
  const router = useRouter();
  const engine = engines.find((e) => e.id === router.query?.engine);

  if (engine) {
    return (
      <div>
        <embed
          className={styles.embed}
          type="application/pdf"
          src={engine.pdf}
        />
      </div>
    );
  }
  return <div>fail</div>;
};

export default Pdf;
