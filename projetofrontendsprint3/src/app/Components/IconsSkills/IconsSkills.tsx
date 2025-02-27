import React from 'react';

const Skills = () => {
    return (
        <section className="py-16 text-center bg-gray-100">
            <h1 className="text-[4.5rem] font-bold mb-8 text-gray-800">MY SKILLS</h1>
            <div className="flex flex-wrap justify-center gap-12">
                <div className="group text-5xl text-orange-600 hover:text-orange-500 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto">
                    <i className="fab fa-html5"></i>
                    <p className="mt-2 text-lg text-gray-700 group-hover:text-gray-900">HTML</p>
                </div>
                <div className="group text-5xl text-blue-600 hover:text-blue-500 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto">
                    <i className="fab fa-css3-alt"></i>
                    <p className="mt-2 text-lg text-gray-700 group-hover:text-gray-900">CSS</p>
                </div>
                <div className="group text-5xl text-yellow-400 hover:text-yellow-300 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto">
                    <i className="fab fa-js"></i>
                    <p className="mt-2 text-lg text-gray-700 group-hover:text-gray-900">JavaScript</p>
                </div>
                <div className="group text-5xl text-blue-500 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto">
                    <i className="fab fa-react"></i>
                    <p className="mt-2 text-lg text-gray-700 group-hover:text-gray-900">React</p>
                </div>
                <div className="group text-5xl text-green-600 hover:text-green-500 transition-all duration-300 transform hover:scale-110 w-full sm:w-auto">
                    <i className="fab fa-node"></i>
                    <p className="mt-2 text-lg text-gray-700 group-hover:text-gray-900">Node.js</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
