'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
 
export default function RandomBtn() {
    const router = useRouter();    
    const handleRandomClick = () => {
        const maxPokemonId = 1025;
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        router.push(`?random=${randomId}`);
    };
    
    return (
        <button className="btn-primary" onClick={handleRandomClick}>
            <Image
                src="/Dice.svg"
                width={25}
                height={25}
                alt="Dice"
            />
            Random Pokémon</button>
    )
}