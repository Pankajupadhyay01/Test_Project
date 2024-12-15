import React from 'react';

const EndSection = () => {
    return (
        <section className="bg-blue-100 py-20 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-10  justify-between">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-bold mb-4">Your Hobby, Your Community...</h1>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Get Started</button>
                    </div>
                    <div className="md:ml-10">
                        {/* Your image component here */}
                        <img src="/group99.png" alt="People with hobbies" className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EndSection;