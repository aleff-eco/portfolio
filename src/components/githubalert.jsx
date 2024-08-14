import { useState, useEffect } from 'react';
import { FaGithub, FaHeart } from 'react-icons/fa';
import '../styles/NotificationButton.css'; // Importa el archivo CSS

export default function NotificationButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchPopularRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/aleff-eco/repos');
        const data = await response.json();
        const filteredRepos = data.filter(repo => repo.stargazers_count >= 2);
        setRepositories(filteredRepos);
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
        <FaGithub className="w-10 h-10" />
        <div className="notification-badge">
          <span>{repositories.length}</span>
        </div>
      </button>
      {dropdownOpen && (
        <div
          id="dropdownNotification"
          className="notification-dropdown"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="header">
            Mis proyectos populares:
          </div>
          <div className="content">
            {repositories.length === 0 ? (
              <div className="text-gray-500 text-sm">
                No hay proyectos populares cargados.
              </div>
            ) : (
              repositories.map(repo => (
                <a href={repo.html_url} target="_blank" className="item" key={repo.id}>
                  <div className="w-full text-left">
                    <div className="font-semibold text-gray-900">
                      {repo.name}
                    </div>
                    <div className="text-gray-500 text-xs m-2">
                      {repo.description || 'No description'}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
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
            className="footer w-full h-12 text-sm"
          >
            <div className="inline-flex items-center py-1 bg-muted-">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 25 14"
              >
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              Ver más
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
