import React from "react";
import { engines } from "../../data/engine";
import { useRouter } from "next/router";
import { Document } from "react-pdf";
import styles from "./engine.module.css";

const about = () => {
  const router = useRouter();
  const engine = engines.find((e) => e.id === router.query?.engine);

  if (engine) {
    return (
      <div>
        {/* <img className="shadow-sm square" src={engine.imageUrl} /> */}
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

export default about;
