import React, { useState, useRef } from 'react';
import ClickOutside from '../ClickOutside'; // Custom hook to detect clicks outside the component
import { Link } from 'react-router-dom';
import { NotificationImportant } from '@mui/icons-material';

const NotificationDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const notificationButtonRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} exceptionRef={notificationButtonRef}>
      <li>
        <button
          ref={notificationButtonRef}
          onClick={(e) => {
            setNotifying(false);
            toggleDropdown(e); // Open or close dropdown
          }}
          className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border border-stroke bg-gray text-golden dark:border-strokedark dark:bg-meta-4 dark:text-white"
        >
          <span
            className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${notifying ? 'inline' : 'hidden'}`}
          >
            <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
          </span>
        <NotificationImportant/>
        </button>

        {dropdownOpen && (
          <div className="absolute mt-2.5 flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark z-9999 sm:right-0 sm:w-80 w-full max-w-xs sm:max-w-sm pr-2">
            <div className="px-4.5 py-3">
              <h5 className="text-sm font-medium text-bodydark2">Notifications</h5>
            </div>
            <ul className="flex flex-col overflow-y-auto max-h-72">
              {[ 
                {
                  text: 'Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
                  date: '12 May, 2025',
                },
                {
                  text: 'It is a long established fact that a reader will be distracted by the readable.',
                  date: '24 Feb, 2025',
                },
                {
                  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                  date: '04 Jan, 2025',
                },
                {
                  text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                  date: '01 Dec, 2024',
                }
              ].map((notification, index) => (
                <li key={index}>
                  <Link
                    className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
                    to="#"
                  >
                    <p className="text-sm">
                      <span className="text-black dark:text-white">{notification.text.split(' ')[0]}</span>{' '}
                      {notification.text.slice(notification.text.indexOf(' ') + 1)}
                    </p>
                    <p className="text-xs">{notification.date}</p>
                  </Link>
                </li>
              ))}
            </ul>

            {/* View All Button */}
            <div className="px-4.5 py-2 mt-2">
              <Link
                to="/activities"  
                className="block text-center text-sm font-medium text-golden"
              >
                View All
              </Link>
            </div>
          </div>
        )}
      </li>
    </ClickOutside>
  );
};

export default NotificationDropdown;
