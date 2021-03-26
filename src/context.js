import { createContext, useRef } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const sidebarRef = useRef();
  const openSidebar = () => sidebarRef.current.style.setProperty('transform', 'translateX(0)');
  const closeSidebar = () => sidebarRef.current.style.setProperty('transform', 'translateX(100%)');

  const contextValue = {
    sidebarRef,
    openSidebar,
    closeSidebar,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
