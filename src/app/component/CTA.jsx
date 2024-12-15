
import React from 'react';

const CTA = () => {

    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center md:p-6 py-20 md:my-20 md:px-20 ">


            <div className="bg-white border rounded-lg shadow-sm md:p-12 p-6 md:text-left text-center w-full ">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl text-blue-500">➕</div>
                    <h2 className="text-xl font-semibold">Add your own</h2>
                </div>
                <p className="mt-4 text-gray-600 md:text-lg  ">
                    Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
                </p>
                <button
                    className="mt-4 px-4 py-2 border rounded-md text-purple-600 border-purple-600 hover:bg-purple-600 hover:text-white transition"
                >
                    Add new
                </button>
            </div>
        </div>
    );
};

export default CTA;
