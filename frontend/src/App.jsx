import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AskQuestionPage from "./pages/AskQuestionPage";
import AnalysisPage from "./pages/AnalysisPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage";
import About from "./pages/About";
import ProtectedRoutes from "./components/ProtectedRoutes";
import ExtraVerification from "./components/ExtraVerification";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-stone-50 text-stone-900">
        <Header />

        {/* <ExtraVerification /> */}

        <Routes>
          {/* Public routes */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Body />} />
            <Route path="/askquestion" element={<AskQuestionPage />} />
            <Route path="/analysis" element={<AnalysisPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>
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
