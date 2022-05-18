import React from "react";
import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

export const getServerSideProps = async (context) => {
  // Get pokemon id from context query
  const { pokemonId } = context.query;

  // Fetch data from external API
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
};

export default function Pokemon({ data }) {
  return (
    <>
      <div className={styles.pokemon_container}>
        <h1 className={styles.pokemon_title}>{data.name}</h1>
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${data.id}.png`}
          width={200}
          height={200}
          alt={data.name}
        />
        <div>
          <h3>Número:</h3>
          <p>#{data.id}</p>
        </div>
        <div>
          <h3>Tipo:</h3>
          <div className={styles.types_container}>
            {data.types.map((item, index) => (
              <span
                key={index}
                className={`${styles.type} ${styles["type_" + item.type.name]}`}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.data_container}>
          <div className={styles.data_height}>
            <h4>Altura:</h4>
            <p>{data.height * 10} cm</p>
          </div>
          <div className={styles.data_weight}>
            <h4>Peso:</h4>
            <p>{data.weight / 10}</p>
          </div>
        </div>
      </div>
    </>
  );
}
