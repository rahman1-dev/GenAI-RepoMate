import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AskQuestionPage from "./pages/AskQuestionPage";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      {/* <Body /> */}
      <AskQuestionPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
