import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsSidebarOpen = () => {
    setIsOpen(!isOpen);
  };

  return {
    isOpen,
    handleIsSidebarOpen,
  };
};

export default useSidebar;
