import { Route, Routes, HashRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={"/"}
            element={<CommonContainer>
              <Home />
            </CommonContainer>} />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;
