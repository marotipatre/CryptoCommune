import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useDispatch } from "react-redux";
import { setCustomerAddress } from "../redux/slices/user";
import { IoLogoEdge, IoMenu } from "react-icons/io5";

interface HeaderProps {
  handleSidebarToggle?: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleSidebarToggle }) => {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    console.log("jjjj", address);
    address && dispatch(setCustomerAddress(address));
  }, [address]);

  return (
    <nav className="bg-white border-gray-200 border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  p-4">
        {handleSidebarToggle && (
          <button
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            onClick={handleSidebarToggle}
          >
            <span className="sr-only text-black">Open sidebar</span>
            <IoMenu className="text-xl" />
          </button>
        )}
        <a href="https://flowbite.com/" className="flex items-start ">
          <IoLogoEdge className="text-2xl text-blue-500 mr-2" />
          <span className="self-start text-2xl font-semibold whitespace-nowrap ">
            Spheron Club
          </span>
        </a>
        <div className="left-10 ">
          <ConnectButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
