import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "프로젝트 1",
      description: "Next.js와 Tailwind CSS를 활용한 반응형 웹사이트 개발",
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "/project1.jpg"
    },
    {
      title: "프로젝트 2",
      description: "Node.js와 MongoDB를 이용한 풀스택 웹 애플리케이션",
      tech: ["Node.js", "Express", "MongoDB", "React"],
      image: "/project2.jpg"
    },
    {
      title: "프로젝트 3",
      description: "Python Django를 활용한 REST API 서버 개발",
      tech: ["Python", "Django", "PostgreSQL"],
      image: "/project3.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 