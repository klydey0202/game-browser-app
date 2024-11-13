import React from 'react'
import { Game } from '../types'

interface GameListProps {
    games: Game[];
    favorites: string[];
    onToggleFavorite: (gameId: string) => void;
}

const GameList: React.FC<GameListProps> = ({ games, favorites, onToggleFavorite }) => {

    return (
        <div className='grid grid-cols-2 gap-[20px]'>
            {games.map((game) => (
                <div key={game.id} className='text-center'>
                    <img className='w-full h-auto' src={game.img} alt={game.name} />
                    <h3>{game.name}</h3>
                    <button className='bg-none border-none text-[24px] cursor-pointer' onClick={() => onToggleFavorite(game.id)}>
                        {favorites.includes(game.id) ? '❤️' : '🤍'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default GameList