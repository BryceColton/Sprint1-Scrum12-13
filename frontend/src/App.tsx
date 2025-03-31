import { Routes, Route } from "react-router-dom";
import { YouthActivities } from "./components/Login/YouthActivities";
import { HomePage } from "./components/HomePage/HomePage";
import { CalendarView } from "./components/Calendar/CalendarView";
import { ActivityBrowser } from "./components/ActivityDisplayed/ActivityBrowser";
import { NavigationMenu } from "./components/Menu/NavigationMenu";
import Layout from "./components/Layout";
import { BlogPosts } from './components/BlogPosts/BlogPosts';


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/Menu" element={<NavigationMenu />} />
          <Route path="/" element={<YouthActivities />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/activities" element={<ActivityBrowser />} />
          <Route path="/blog" element={<BlogPosts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
