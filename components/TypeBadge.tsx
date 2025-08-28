import React from 'react'
interface TypeBadgeProps {
    name: string;
    url: string;
}

export default function TypeBadge({ name }: TypeBadgeProps) {
    console.log(name);
    
    return (
        <span className={`badge badge-${name}`}>
            {name}
        </span>
    )
}
