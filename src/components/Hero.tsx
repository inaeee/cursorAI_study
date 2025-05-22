import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          안녕하세요! 👋
          <br />
          <span className="text-blue-400">황인애</span>입니다
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          창의적인 솔루션을 만들어내는 열정적인 개발자입니다
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
          프로젝트 보기
        </button>
      </div>
    </section>
  );
};

export default Hero; 