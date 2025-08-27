import React from 'react';

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}
interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    }
    stats: Stat[]
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            
            <div className="flex flex-col gap-2 mt-4">
                {pokemon.stats.slice(0, 3).map((stat) => (
                    <div key={stat.stat.name} className="flex justify-between items-center">
                        <p>{stat.stat.name}</p>
                        <p>{stat.base_stat}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}