import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationDesktop from "./Components/NavigationDesktop/NavigationDesktop";
import NavigationMobile from "./Components/NavigationMobile/NavigationMobile";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import Loader from "./Components/Loader/Loader";
import MatchesPage from "./Pages/MatchesPage/MatchesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationDesktop />
        <NavigationMobile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loading" element={<Loader />} />
          <Route path="/profile/" element={<ProfilePage />} />
          <Route path="/find-matches" element={<MatchesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


{/* <Route path="*" element={<NotFoundPage />} /> */}