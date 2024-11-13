import React, { useState } from "react";

interface CategorySelectorProps {
    onSelectCategory: (category: string) => void;
}

const categories = ['ALL', 'START', 'NEW', 'SLOTS'];

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('ALL');

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        onSelectCategory(category);
    };

    return (
        <div className="flex justify-between mb-[20px] gap-x-2">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className={`border w-full rounded-md p-2 transition-colors duration-200 ${selectedCategory === category
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategorySelector;