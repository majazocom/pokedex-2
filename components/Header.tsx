import React from 'react';
import RandomBtn from './RandomBtn';
import PokemonCard from './PokemonCard';

export default async function Header({ randomPokemonID }: { randomPokemonID?: string }) {
    let pokemonData = null;

    if (randomPokemonID) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonID}`);
            if (response.ok) {
                pokemonData = await response.json();
            }
        } catch (error) {
            console.error("Failed to fetch random Pokémon:", error);
        }
    }

    return (
        <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
            <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. Find<br /> your favourite and learn about their stats.</p>
            <RandomBtn />
            {pokemonData ? <PokemonCard pokemon={pokemonData} /> : null}
        </section>
    );
}