import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import AboutPage from "./pages/AboutUs";
import GalleryPage from "./pages/Gallery";
import Home from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ServicesPage from "./pages/Services";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          
          <Route path={"/"}
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            }
          />
          <Route path={"/about"}
            element={
              <CommonContainer>
                <AboutPage />
              </CommonContainer>
            }
          />
          <Route path={"/gallery"}
            element={
              <CommonContainer>
                <GalleryPage />
              </CommonContainer>
            }
          />
          <Route path={"/services"}
            element={
              <CommonContainer>
                <ServicesPage />
              </CommonContainer>
            }
          />
          <Route path={"/projects"}
            element={
              <CommonContainer>
                <ProjectsPage />
              </CommonContainer>
            }
          />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
