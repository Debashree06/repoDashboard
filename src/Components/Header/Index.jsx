import { Link } from 'react-router-dom';
import DropdownMessage from "./Message";
import DropdownNotification from './Notification';
import DropdownUser from './User';
import DarkModeSwitcher from './DarkModeSwitcher';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebarToggle = (e) => {
    e.stopPropagation();
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 p-4 shadow-2 md:px-6 2xl:px-8">
        
        {/* Hamburger Menu for Small Screens Only */}
        <div className="flex items-center gap-2 sm:gap-4 sm:hidden"> {/* This will hide the hamburger on screens larger than 'sm' */}
          <button
            aria-controls="sidebar"
            onClick={handleSidebarToggle}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                {/* Hamburger icon for small screens */}
                <span className={`relative block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${sidebarOpen && 'rotate-45 top-3'}`}></span>
              <span
                className={`relative block h-0.5 w-full rounded-sm bg-black mt-2 duration-200 ease-in-out dark:bg-white ${sidebarOpen && 'opacity-0'}`}
              ></span>
              <span
                className={`relative block h-0.5 w-full rounded-sm bg-black mt-2 duration-200 ease-in-out dark:bg-white ${sidebarOpen && '-rotate-45 bottom-2'}`}
              ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Hamburger for Large Screens */}
       <div className='flex gap-5'>
       <div className="hidden 2xl:block"> {/* This will show the hamburger on larger screens */}
          <button
            aria-controls="sidebar"
            onClick={handleSidebarToggle}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              {/* Hamburger icon for large screens */}
              <span className={`relative block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${sidebarOpen && 'rotate-0'}`}></span>
              <span
                className={`relative block h-0.5 w-full rounded-sm bg-black mt-2 duration-200 ease-in-out dark:bg-white ${sidebarOpen && 'rotate-0'}`}
              ></span>
              <span
                className={`relative block h-0.5 w-full rounded-sm bg-black mt-2 duration-200 ease-in-out dark:bg-white ${sidebarOpen && '-rotate-0'}`}
              ></span>
            </span>
          </button>
        </div>

        {/* Logo (Visible on Medium Screens and Above) */}
        <div className="hidden sm:block">
          <Link className="block flex-shrink-0 " to="/">
            <h2 className='lg:text-xl text-md font-semibold text-golden'>KINGSREACH</h2>
          </Link>
        </div>
       </div>

        {/* Search Bar (Desktop) */}
        {/* <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pl-9 pr-4 text-black focus:outline-none dark:text-white xl:w-125"
              />
            </div>
          </form>
        </div> */}

        {/* Right-side icons */}
        <div className="flex items-center gap-3 2xsm:gap-4">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <DropdownNotification />
          
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;