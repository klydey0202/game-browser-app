import React from 'react';

interface ProviderFilterProps {
    onSelectProvider: (provider: string) => void
}

const providers = ['ALL', 'Slot Plus', 'El Puzzle Plus', 'Casino Plus', 'Enter Plus']

const ProviderFilter: React.FC<ProviderFilterProps> = ({ onSelectProvider }) => {

    return (
        <div className='mb-[20px]'>
            <select className='w-full p-[10px] border rounded-md' onChange={(e) => onSelectProvider(e.target.value)}>
                {providers.map((provider) => (
                    <option key={provider} value={provider}>
                        {provider}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ProviderFilter