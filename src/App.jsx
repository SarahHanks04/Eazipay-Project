import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingPage from "./Component/Landing Page/Landing Page/LandingPage";
import MainDashboard from "./Component/Dashboard/Dashboard/MainDashboard";
import DashboardLayout from "./Component/Dashboard/DashboardLayout/DashboardLayout";
import MainSidebar from "./Component/Dashboard/Sidebar/MainSidebar";
import IndividualProvider from "./Component/Individual/IndividualProvider";
import MainIndividualComponent from "./Component/Individual/MainIndividualComponent";
import TeamContainer from "./Component/Eazipay Team/TeamContainer/TeamContainer";
import AddEmployee from "./Component/Eazipay Team/AddnewEmployee/AddEmployee";
import MainSettings from "./Component/Settings/MainSettings";
import LoginPage from "./Component/Login Page/LoginPage";
import RegisterPage from "./Component/Register Page/RegisterPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div>
        <IndividualProvider>
          <Routes>
            {/* <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <div>
                    <HeroPage />
                    <AboutPage />
                    <HowItWork />
                    <SubscribeToEasyLife />
                    <EasypayDemo />
                  </div>
                }
              />
            </Route> */}
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<LandingPage />} />
            </Route>
            <Route path="/dashboard-layout" element={<DashboardLayout />} />
            <Route path="/dashboard" element={<MainDashboard />} />
            <Route path="/sidebar" element={<MainSidebar />} />
            <Route path="/individual" element={<MainIndividualComponent />} />
            <Route path="/employee" element={<TeamContainer />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/settings" element={<MainSettings />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </IndividualProvider>
      </div>
    </>
  );
}

export default App;
