import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "../MenuItems";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // Handle submenu toggle
  const handleSubmenuClick = (id) => {
    setActiveSubmenu((prev) => (prev === id ? null : id)); // Toggle the active submenu
  };

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-16"
      } bg-black text-white h-screen transition-all duration-300 overflow-y-auto`}
    >
      {/* Sidebar Header */}
      <div
        className={`p-4 flex items-center ${
          sidebarOpen ? "justify-start" : "justify-center"
        }`}
      >
        <img
          src="logo/placeholder.png"
          alt="logo"
          className={`${sidebarOpen ? "h-10" : "w-10"}`}
        />
      </div>

      {/* Sidebar Menu */}
      <ul className="mt-4">
        {menuItems.map((item) => (
          <li key={item.id} className="relative">
            <NavLink
              to={item.route || "#"}
              className={`flex items-center p-4 hover:text-yellow-600 ${
                sidebarOpen ? "justify-start" : "justify-center"
              }`}
              onClick={() => {
                if (item.submenu && item.submenu.length > 0) {
                  handleSubmenuClick(item.id); // Toggle submenu if it exists
                }
              }}
            >
              <span className="text-xl">{item.icon && <item.icon />}</span>
              {sidebarOpen && <span className="ml-4">{item.title}</span>}
              {item.submenu && item.submenu.length > 0 && sidebarOpen && (
                <span className="ml-auto">
                  {activeSubmenu === item.id ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              )}
            </NavLink>

            {/* Render Submenu if active */}
            {item.submenu &&
              item.submenu.length > 0 &&
              activeSubmenu === item.id &&
              sidebarOpen && (
                <ul className="pl-8 mt-2 space-y-2">
                  {item.submenu.map((subItem) => (
                    <li key={subItem.title}>
                      <NavLink
                        to={subItem.route}
                        className="block py-2 hover:text-yellow-400"
                      >
                        {subItem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
