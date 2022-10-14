import { useState } from "react";

//Redux
import { useDispatch } from "react-redux";
import { logOut } from "../../../features/user";

const useSidebar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleIsSidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return {
    isOpen,
    handleIsSidebarOpen,
    handleLogOut,
  };
};

export default useSidebar;
