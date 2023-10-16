import React, { useState } from "react";
import { IoLogoEdge, IoBookmark } from "react-icons/io5";
import {
  BsImageFill,
  BsFillSuitClubFill,
  BsDatabaseAdd,
  BsHouseFill,
} from "react-icons/bs";
import { IoCreateSharp } from "react-icons/io5";
import { RiSettings4Fill } from "react-icons/ri";
import classNames from "classnames";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  handleSidebar: (route: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  handleSidebar,
}) => {
  const navigationData = ["Dashboard", "My Club", "Create Club"];
  const [currentRoute, setCurrentRoute] = useState<string>("Dashboard");

  const handleNavigationClick = (route: string) => {
    console.log(`Navigating to ${route}`);
    setCurrentRoute(route);
    handleSidebar(route);
    onClose();
  };

  return (
    <div className={classNames("fixed inset-0 z-50", { hidden: !isOpen })}>
      <div
        className="absolute inset-0 bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <IoLogoEdge className="text-2xl text-blue-500" />
            <span className="text-lg font-medium text-gray-800">
              Spheron Club
            </span>
          </div>
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={onClose}
          >
            <span className="sr-only">Close sidebar</span>
            {/* <IoBookmark className="text-xl" /> */}
          </button>
        </div>
        <div className="px-4 py-2">
          <ul className="space-y-2">
            {navigationData.map((route) => (
              <li key={route}>
                <button
                  className={classNames(
                    "flex items-center w-full px-2 py-2 text-sm font-medium rounded-md",
                    { "bg-gray-100 text-gray-900": currentRoute === route },
                    { "text-gray-600 hover:bg-gray-50": currentRoute !== route }
                  )}
                  onClick={() => handleNavigationClick(route)}
                >
                  {route === "Dashboard" && (
                    <BsHouseFill className="mr-3 text-gray-400" />
                  )}
                  {route === "My Club" && (
                    <BsImageFill className="mr-3 text-gray-400" />
                  )}
                  {route === "Create Club" && (
                    <IoCreateSharp className="mr-3 text-gray-400" />
                  )}
                  {/* {route === 'Favorites' && <BsFillStarFill className="mr-3 text-gray-400" />}
                  {route === 'Saved' && <RiSettings4Fill className="mr-3 text-gray-400" />} */}
                  <span>{route}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
