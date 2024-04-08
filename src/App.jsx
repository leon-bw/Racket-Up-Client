import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationDesktop from "./Components/NavigationDesktop/NavigationDesktop";
import NavigationMobile from "./Components/NavigationMobile/NavigationMobile";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationDesktop />
        <NavigationMobile />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
