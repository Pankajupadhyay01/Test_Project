// components/Testimonials.js

import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-blue-50 py-12 md:px-20 ">
      <div className=" mx-auto bg-white rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4 justify-center m-auto">
          <img src="/quote.png" alt="" />
          <h2 className="text-2xl font-semibold text-gray-800 ">Testimonials</h2>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">
          In a fast growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or
          connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch
          with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of
          finding products and services that I can avail, which I can be assured is going to be of great quality as it
          comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able
          to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I
          highly recommend it.
        </p>
        <div className='flex md:flex-row flex-col-reverse  gap-10 items-center'>
          <div className='md:h-auto h-[70px]'>
            <img className='h-full' src="/Audio Track.png" alt="" />
          </div>
          {/* <div className="flex items-center mt-6"> */}
          <div className="md:ml-4 md:w-auto md:h-auto h-[75px]">
            <img src="/Group 108.png" className='h-full' alt="" />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
