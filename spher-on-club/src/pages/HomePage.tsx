import { ReactElement, useState } from "react";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";

export function HomePage(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex  overflow-hidden bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <div className="flex flex-col flex-1 w-full">
        <Header handleSidebarToggle={handleSidebarToggle} />
      </div>
    </div>
  );
}
