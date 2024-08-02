import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/GitHubProjects.css';

const GitHubProjects = () => {
    const [repos, setRepos] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const minStars = 2;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch('https://api.github.com/users/aleff-eco/repos');
                const data = await response.json();
                const popularRepos = data.filter(repo => repo.stargazers_count >= minStars);
                setRepos(popularRepos);
                //console.log('Repositorios populares:', popularRepos);
            } catch (error) {
                console.error('Error fetching GitHub repositories:', error);
            }
        };

        fetchRepos();
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container mx-auto px-4 pt-6">
            <h2 className="text-3xl font-bold mb-4 text-center">My Popular GitHub Projects</h2>
            <button
                onClick={handleToggle}
                className="flex items-center justify-center bg-blue-600 text-white rounded-full p-2 mb-4 mx-auto"
            >
                <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} size={24} />
            </button>
            <div className={`overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen animate-fadeIn' : 'max-h-0 animate-fadeOut'}`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {repos.map(repo => (
                        <div
                            key={repo.id}
                            className="bg-github bg-cover bg-center border border-gray-200 rounded-lg shadow-md p-4 transform transition-transform duration-300 ease-in-out"
                        >
                            <h3 className="text-xl font-semibold mb-2">
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    {repo.name}
                                </a>
                            </h3>
                            <p className="text-gray-700 mb-2">{repo.description || 'No description'}</p>
                            <p className="text-gray-500">Stars: {repo.stargazers_count}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    );
};

export default GitHubProjects;





