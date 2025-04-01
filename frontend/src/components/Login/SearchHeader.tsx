import { useLocation, useNavigate } from "react-router-dom";

export function SearchHeader() {
  const navigate = useNavigate();
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
      case "/scheduleForm":
        return "Schedule Activity";
      default:
        return "Menu"; // fallback for /Menu or unknown routes
    }
  };

  return (
    <header className="w-full">
      <nav className="mx-auto max-w-7xl flex gap-4 items-center justify-between px-4 mt-2 bg-[linear-gradient(180deg,#0098C9_0%,#0085B1_9.51%,#007399_37%,#007CA5_55.5%,#008DBB_100%)] h-[60px] rounded-b-lg shadow-md">
        {/* Home Button */}
        <button
          aria-label="Home"
          onClick={() => navigate("/HomePage")}
          className="p-2"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 29.3333V16H20V29.3333M4 12L16 2.66667L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z"
              stroke="#1E1E1E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Page Title */}
        <h1 className="text-white text-lg font-semibold">
          {getPageTitle()}
        </h1>

        {/* Menu Button */}
        <button
          aria-label="Menu"
          onClick={() => navigate("/Menu")}
          className="p-2"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 16H28M4 8H28M4 24H28"
              stroke="#1E1E1E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
