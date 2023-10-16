import { ReactElement, useEffect, useState } from "react";
import Sidebar from "../components/SideBar";
import ClubForm from "../components/ClubForm";
import Header from "../components/Header";
import { FaUserCircle } from "react-icons/fa";

export function HomePage(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Dashboard");

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleLogoutClick = () => {
    console.log("Logging out...");
  };
  const handleSidebar = (selected: string) => {
    setSelectedPage(selected);
  };

  return (
    <div>
      <div className="flex h-screen overflow-hidden bg-gray-100">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
          handleSidebar={handleSidebar}
        />
        <div className="flex flex-col flex-1 w-full">
          <Header handleSidebarToggle={handleSidebarToggle} />
          {/* <header className="relative z-10 flex-shrink-0 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between w-full px-4 py-3 sm:px-6">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                onClick={handleSidebarToggle}
              >
                <span className="sr-only text-black">Open sidebar</span>
                <IoMenu className="text-xl" />
              </button>
              <h1 className="flex items-center text-xl font-bold text-gray-800">
                <IoLogoEdge className="text-2xl text-blue-500 mr-2" />
                Spheron Club
              </h1>
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                  <span className="sr-only">Notifications</span>
                  <FaRegBell className="text-xl" />
                </button>
                <div>
                  <button
                    className="flex items-center w-full px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50"
                    onClick={handleProfileClick}
                  >
                    <FaUserCircle size={24} className="mr-3 text-gray-400" />
                    <span>Profile</span>
                  </button>
                  {isProfileMenuOpen && (
                    <div className="absolute z-10 w-20 py-2 mt-2 bg-white rounded-md shadow-lg">
                      <button
                        className="block px-4 py-2 text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={handleLogoutClick}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header> */}
          <main className="flex-1 overflow-y-auto">
            {selectedPage === "Create Club" ? (
              <div className="m-10">
                <ClubForm />
              </div>
            ) : selectedPage === "Dashboard" ? (
              <div></div>
            ) : (
              <div></div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
