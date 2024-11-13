import { Game } from '../types';

const mockGames: Game[] = [
  { id: '1', name: 'Slot Machine', img: '/Images/slotmachines.jpeg', category: 'SLOTS', provider: 'Slot Plus' },
  { id: '2', name: 'Esqueleto Explosivo 3', img: '/Images/esquleto.jpg', category: 'NEW', provider: 'El Puzzle Plus' },
  { id: '3', name: 'Casino Mahem', img: '/Images/casino.png', category: 'START', provider: 'Casino Plus' },
  { id: '4', name: 'Roulette Extravagant', img: '/Images/roulette.png', category: 'NEW', provider: 'Casino Plus' },
  { id: '5', name: 'Black Jack Mission', img: '/Images/blackjack.jpg', category: 'START', provider: 'Casino Plus' },
  { id: '6', name: 'Seven Eleven', img: '/Images/dicegame.jpeg', category: 'SLOTS', provider: 'Enter Plus' },
  // Add more mock games here
];

export const fetchGames = (): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockGames);
    }, 1000);
  });
};