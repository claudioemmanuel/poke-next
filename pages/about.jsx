import React from "react";
import Image from "next/image";

import styles from "../styles/About.module.css";

export default function about() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
        dolor illum minus repudiandae sapiente laborum excepturi sunt eveniet,
        in est dicta error dolorem at voluptatem, vel rerum labore soluta
        praesentium.
      </p>
      <Image
        src={"/images/charizard.png"}
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  );
}
