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
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <div>
                  <HeroPage />
                  <AboutPage />
                  <HowItWork />
                  <SubscribeToEasyLife />
                </div>
              }
            />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
