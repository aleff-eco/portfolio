import { useState, useEffect } from 'react';
import { FaGithub, FaHeart, FaStar } from 'react-icons/fa';
import '../styles/NotificationButton.css';

export default function NotificationButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [totalStars, setTotalStars] = useState(0);

  useEffect(() => {
    const fetchPopularRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/aleff-eco/repos');
        const data = await response.json();
        const filteredRepos = data
          .filter(repo => repo.stargazers_count >= 3)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepositories(filteredRepos);
        
        const total = data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        setTotalStars(total);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchPopularRepositories();
  }, []);

  return (
    <div className="notification-button">
      <button
        id="dropdownNotificationButton"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="icon-button"
        type="button"
      >
        <FaGithub className="w-10 h-10 text-gray-800 dark:text-gray-200" />
        <div className="notification-badge bg-black dark:bg-white text-white dark:text-black">
          <span>{repositories.length}</span>
        </div>
      </button>
      {dropdownOpen && (
        <div
          id="dropdownNotification"
          className="notification-dropdown bg-white dark:bg-gray-800 shadow-lg"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="header text-black dark:text-white font-bold py-2 px-4">
            Mis proyectos populares:
          </div>
          <div className="content">
            {repositories.length === 0 ? (
              <div className="text-gray-500 dark:text-gray-400 text-sm px-4 py-2">
                No hay proyectos populares cargados.
              </div>
            ) : (
              repositories.map(repo => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="item block py-2 px-4 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  key={repo.id}
                >
                  <div className="w-full text-left">
                    <div className="font-semibold text-gray-900 dark:text-gray-200">
                      {repo.name}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs my-1">
                      {repo.description || 'No description'}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <FaHeart className="mr-1 text-red-500" /> {repo.stargazers_count}
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
          <a
            href="https://github.com/aleff-eco"
            target="_blank"
            className="w-full h-12 text-sm flex justify-center items-center text-white"
          >
            <FaStar className="mr-2" />
            Ver más ({totalStars} estrellas)
          </a>
        </div>
      )}
    </div>
  );
}
