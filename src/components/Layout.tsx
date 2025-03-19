import { Outlet } from "react-router-dom";
import { NavigationMenu } from "./Menu/NavigationMenu";

const Layout = () => {
  return (
    <>
      <NavigationMenu />
      <main className="p-4">
        <Outlet /> {/* This renders the selected page */}
      </main>
    </>
  );
};

export default Layout;
