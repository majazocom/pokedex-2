import React from 'react'
interface TypeBadgeProps {
    name: string;
    url: string;
}

export default function TypeBadge({ name }: TypeBadgeProps) {
    
    return (
        <span className={`badge badge-${name}`}>
            {name}
        </span>
    )
}
