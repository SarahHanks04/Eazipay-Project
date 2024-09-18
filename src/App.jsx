import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Component/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "./Component/Landing Page/HeroPage/HeroPage";
import AboutPage from "./Component/Landing Page/Aboutpage/AboutPage";
import HowItWork from "./Component/Landing Page/HowItWorks/HowItWork";
import SubscribeToEasyLife from "./Component/Landing Page/SubscribeToEasyLife/SubscribeToEasyLife";
import EasypayDemo from "./Component/Landing Page/EasyPayDemo/EasypayDemo";
import Sidebar from "./Component/Dashboard/Sidebar/Sidebar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
    // Aos.refresh();
  }, []);

  return (
    <>
      <div>
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
          <Route path="/" element={<Sidebar />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
