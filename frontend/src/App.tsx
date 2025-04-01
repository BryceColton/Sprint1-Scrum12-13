import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import { NavigationMenu } from "./components/Menu/NavigationMenu";
import { CalendarView } from "./components/Calendar/CalendarView";
import { ActivityBrowser } from "./components/ActivityDisplayed/ActivityBrowser";
import { BlogPosts } from "./components/BlogPosts/BlogPosts";
import { ScheduleActivityForm } from "./components/ScheduledForm/ScheduleForm";
import { LoginPage } from "./components/Login/LoginPage"; // use this not NewLoginForm

function App() {
  return (
    <Routes>
      {/* Unwrapped Login */}
      <Route path="/" element={<LoginPage />} />

      {/* All others go through Layout */}
      <Route element={<Layout />}>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Menu" element={<NavigationMenu />} />  {/* ✅ ADD THIS */}
      <Route path="/calendar" element={<CalendarView />} />
      <Route path="/activities" element={<ActivityBrowser />} />
      <Route path="/blog" element={<BlogPosts />} />
      <Route path="/scheduleForm" element={<ScheduleActivityForm />} />
      </Route>
    </Routes>
  );
}

export default App;
