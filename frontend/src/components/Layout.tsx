import { Outlet, useLocation } from "react-router-dom";
import { NavigationBar } from "./HomePage/NavigationBar";
import { StatusBar } from "./HomePage/StatusBar";

const Layout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Login";
      case "/HomePage":
        return "Home Page";
      case "/activities":
        return "Activities";
      case "/calendar":
        return "Calendar";
      case "/blog":
        return "Blog";
      default:
        return "";
    }
  };

  return (
    <>
      <StatusBar />
      <NavigationBar title={getPageTitle()} />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
