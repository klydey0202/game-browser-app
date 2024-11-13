import React from 'react';
import { Game } from '../types';

interface FavoritesListProps {
    games: Game[];
    onToggleFavorite: (gameId: string) => void;
}

const FavoritesList: React.FC<FavoritesListProps> = ({ games, onToggleFavorite }) => {
    if (games.length === 0) {
        return <div className="text-center text-[18px] mt-[50px]">No favorite games yet.</div>;
    }

    return (
        <React.Fragment>
            <h2 className=''>Favorite Games</h2>
            <div className="grid grid-cols-2 gap-[20px]">
                {games.map((game) => (
                    <div key={game.id} className="text-center">
                        <img className='w-full h-auto' src={game.img} alt={game.name} />
                        <h3>{game.name}</h3>
                        <button className='mt-2 text-[14px] bg-red-500 rounded-md text-white px-[10px] py-[5px]' onClick={() => onToggleFavorite(game.id)}>
                            Remove from Favorites
                        </button>
                    </div>
                ))}
            </div>
        </React.Fragment>

    );
};

export default FavoritesList;