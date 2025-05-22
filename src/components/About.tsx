import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              안녕하세요! 저는 웹 개발에 대한 열정을 가진 개발자입니다. 
              사용자 경험을 중심으로 한 웹 애플리케이션 개발에 관심이 많으며, 
              새로운 기술을 배우고 적용하는 것을 좋아합니다.
            </p>
            <p className="text-lg text-gray-600">
              프론트엔드와 백엔드 모두에 관심이 있으며, 
              특히 React와 Next.js를 활용한 현대적인 웹 개발에 집중하고 있습니다.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Your Image Here</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 