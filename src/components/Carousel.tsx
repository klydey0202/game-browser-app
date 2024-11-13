import React, { useState, useEffect } from 'react'

const images = [
    '/Images/casino.png',
    '/Images/esquleto.jpg',
    '/Images/slotmachines.jpeg',
    '/Images/roulette.png',
    '/Images/blackjack.jpg',
    '/Images/dicegame.jpeg',
]

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex w-full h-50 justify-center items-center mb-4'>
            <img className='w-full' src={images[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
        </div>
    )
}

export default Carousel