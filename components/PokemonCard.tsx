import React from 'react';
import TypeBadge from './TypeBadge';

interface Stat {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}
interface Type {
    slot: number;
    type: {
        name: string;
        url: string;
    };

}
interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    }
    stats: Stat[];
    types: Type[];
}

interface PokemonCardProps {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md w-50 flex flex-col justify-center">
            <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto border-4 border-amber-500">
                <img
                    className="w-full h-full object-cover scale-110"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </div>
            <h2 className="text-2xl font-bold text-center pb-1">{pokemon.name}</h2>
            <div className="flex flex-row gap-1 justify-center">
                {pokemon.types.map((t) => <TypeBadge key={t.type.name} name={t.type.name} url={t.type.url} />)}
            </div>
            <div className="flex flex-col gap-2 mt-4">
                {pokemon.stats.slice(0, 3).map((stat) => (
                    <div key={stat.stat.name} className="flex justify-between items-center w-full">
                        <p>{stat.stat.name}</p>
                        <p>{stat.base_stat}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}