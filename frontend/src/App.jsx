import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AskQuestionPage from "./pages/AskQuestionPage";
import AnalysisPage from "./pages/AnalysisPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Header />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/askquestion" element={<AskQuestionPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="min-h-screen bg-stone-50 text-stone-900">
    //   <Header />
    //   {/* <Body /> */}
    //   <AskQuestionPage />
    //   {/* <AnalysisPage /> */}
    //   {/* <Footer /> */}
    // </div>
  );
}

export default App;
