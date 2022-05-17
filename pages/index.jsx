import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

// This gets called on every request
export async function getServerSideProps() {
  const maxPokemonLimit = 251;

  // Fetch data from external API
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${maxPokemonLimit}`
  );
  const data = await res.json();
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  // Pass data to the page via props
  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src={"/images/pokeball.png"}
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {data.results.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </div>
    </>
  );
}
