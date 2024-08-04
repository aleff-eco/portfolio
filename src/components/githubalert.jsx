import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/NotificationButton.css'; // Importa el archivo CSS

export default function NotificationButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="notification-button">
      <button
        id="dropdownNotificationButton"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="icon-button"
        type="button"
      >
        <FaGithub className="w-12 h-12" />
        <div className="notification-badge">
          <span>1</span>
        </div>
      </button>
      {dropdownOpen && (
        <div
          id="dropdownNotification"
          className="notification-dropdown"
          aria-labelledby="dropdownNotificationButton"
        >
          <div className="header">
            Notifications
          </div>
          <div className="content">
            <a href="#" className="item">
              <div className="w-full text-left">
                <div className="text-gray-500 text-sm mb-1.5 ">
                  New message from <span className="font-semibold text-gray-900 ">Jese Leos</span>: "Hey, what's up? All set for the presentation?"
                </div>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="footer w-full"
          >
            <div className="inline-flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 14"
              >
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
              View all
            </div>
          </a>
        </div>
      )}
      
    </div>
  );
}
