import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationDesktop from "./Components/NavigationDesktop/NavigationDesktop";
import NavigationMobile from "./Components/NavigationMobile/NavigationMobile";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
// import MobileNav from "./Components/MobileNav/MobileNav";

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <MobileNav /> */}
        <NavigationDesktop />
        <NavigationMobile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/find-matches" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


{/* <Route path="*" element={<NotFoundPage />} /> */}