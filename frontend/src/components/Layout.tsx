import { Outlet } from "react-router-dom";
import { NavigationBar } from "./HomePage/NavigationBar";
import { StatusBar } from "./HomePage/StatusBar";

const Layout = () => {
  return (
    <>
      <StatusBar />
      <NavigationBar />
      <main className="p-4">
        <Outlet /> {/* This renders the selected page */}
      </main>
    </>
  );
};

export default Layout;
