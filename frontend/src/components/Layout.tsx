import { Outlet } from "react-router-dom";
import { NavigationBar } from "./HomePage/NavigationBar";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <main className="p-4">
        <Outlet /> {/* This renders the selected page */}
      </main>
    </>
  );
};

export default Layout;
