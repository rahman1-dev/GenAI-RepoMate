import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AskQuestionPage from "./pages/AskQuestionPage";
import AnalysisPage from "./pages/AnalysisPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Header />

        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/" element={<Body />} />
          <Route path="/askquestion" element={<AskQuestionPage />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
