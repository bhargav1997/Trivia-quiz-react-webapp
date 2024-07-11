import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";

function App() {
   
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/quiz' element={<Quiz />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   );
}

export default App;
