import { useState, useEffect } from "react";
import { FaGithub, FaHeart, FaStar } from "react-icons/fa";
import "../styles/NotificationButton.css";

export default function NotificationButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [totalStars, setTotalStars] = useState(0);
  const [hovered, setHovered] = useState(false); // Estado para hover

  useEffect(() => {
    const fetchPopularRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/aleff-eco/repos"
        );
        const data = await response.json();
        const filteredRepos = data
          .filter((repo) => repo.stargazers_count >= 3)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepositories(filteredRepos);

        const total = data.reduce(
          (acc, repo) => acc + repo.stargazers_count,
          0
        );
        setTotalStars(total);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchPopularRepositories();
  }, []);

  return (
    <div className="notification-button fixed top-2 right-2 z-[9999]">
      <button
        id="dropdownNotificationButton"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="icon-button relative"
        type="button"
        onMouseEnter={() => setHovered(true)} // Evento onMouseEnter
        onMouseLeave={() => setHovered(false)} // Evento onMouseLeave
      >
        <FaGithub
          className={`w-10 h-10 text-foreground dark:text-foreground ${
            hovered ? "hovered-github" : ""
          }`}
        />
        <div className="notification-badge absolute top-0 right-0 transform translate-x-2 -translate-y-2">
          <span>{repositories.length}</span>
        </div>
      </button>
      {dropdownOpen && (
        <div
          id="dropdownNotification"
          className="notification-dropdown bg-[hsl(var(--background))] dark:bg-gray-800 shadow-lg absolute right-0 mt-2 w-64 z-[9999]"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="header bg-navbar text-primary-foreground flex justify-center items-center font-bold h-12 py-4 px-4">
            Mis proyectos populares:
          </div>
          <div className="content max-h-64 overflow-y-auto">
            {repositories.length === 0 ? (
              <div className="text-primary-foreground text-sm px-4 py-2">
                No hay proyectos populares cargados.
              </div>
            ) : (
              repositories.map((repo) => (
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="item block py-2 px-4 border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  key={repo.id}
                >
                  <div className="w-full text-left">
                    <div className="font-semibold text-[hsl(var(--foreground))]">
                      {repo.name}
                    </div>
                    <div className="text-[hsl(var(--foreground))] text-xs my-1">
                      {repo.description || "No description"}
                    </div>
                    <div className="flex items-center text-[hsl(var(--foreground))] text-sm">
                      <FaHeart className="mr-1 text-destructive" />{" "}
                      {repo.stargazers_count}
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
          <a
            href="https://github.com/aleff-eco"
            target="_blank"
            className="footer w-full h-10 text-sm flex justify-center items-center bg-primary text-primary-foreground"
          >
            <FaStar className="mr-2" />
            Ver más ({totalStars} estrellas)
          </a>
        </div>
      )}
    </div>
  );
}
