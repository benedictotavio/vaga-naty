import React from "react";
import styles from "./Banner.module.css";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

const Banner = () => {
  return (
    <div id={styles.banner}>
      <div id={styles.text_banner}>
        <h1 className={rubik.className}>
          Veja seu deslocamento diario em suas viagens
        </h1>
        <p className={rubik.className}>
          Rastreie e otimize sem esforço o deslocamento de sua experiência de quando for dar aquela volta de
          carro. Com toda a precisão e detalhes que sua rotina merece.
        </p>
      </div>
    </div>
  );
};

export default Banner;
