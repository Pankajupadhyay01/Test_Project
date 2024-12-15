import React from 'react';

const HobbyCards = () => {
    const cards = [
        {
            title: 'People',
            description:
                'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.',
            buttonText: 'Connect',
            icon: '👥',
            bg: 'hover:bg-[#8064a2] text-white'
        },
        {
            title: 'Place',
            description:
                'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.',
            buttonText: 'Meet up',
            icon: '📍',
            bg: 'hover:bg-[#77933c] text-white'
        },
        {
            title: 'Product',
            description:
                'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.',
            buttonText: 'Get it',
            icon: '🛍️',
            bg: 'hover:bg-[#c0504d] text-white'
        },
        {
            title: 'Program',
            description:
                'Find events, meetups and workshops related to your hobby. Register or buy tickets online.',
            buttonText: 'Attend',
            icon: '📅',
            bg: 'hover:bg-[#0096c8] text-white'
        },
    ];

    return (
        <div className="w-full bg-gray-50 flex items-center justify-center  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  md:px-20 w-full">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`bg-white border rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${card.bg} group`}
                    >
                        <div className="flex items-center space-x-4">
                            <div className="text-2xl">{card.icon}</div>
                            <h2 className="text-xl font-semibold text-black">{card.title}</h2>
                        </div>
                        <p className="mt-4 group-hover:text-white text-gray-600">{card.description}</p>
                        <button
                            className="mt-4 px-4 py-2 border rounded-md group-hover:text-white group-hover:border-white text-purple-600 border-purple-600 hover:bg-purple-600  transition"
                        >
                            {card.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HobbyCards;
