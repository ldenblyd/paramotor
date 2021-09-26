import React from "react";
import { engines } from "../../data/engine";
import { useRouter } from "next/router";
import styles from "./engine.module.css";

const Pdf = () => {
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
