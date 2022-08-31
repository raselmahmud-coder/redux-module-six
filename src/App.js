import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import VideoDetails from "./pages/VideoDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:pageNumber" element={<Home />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
        </Routes>

          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
