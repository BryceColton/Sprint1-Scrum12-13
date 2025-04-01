import { LoginForm } from "./LoginForm";
import { Footer } from "./Footer";
import { StatusBar } from "../HomePage/StatusBar";
import { NavigationBar } from "../HomePage/NavigationBar";
// Adjust if path differs

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Top bars */}
      <StatusBar />
      <NavigationBar title="Login" />

      {/* Centered login form */}
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <LoginForm />
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}
