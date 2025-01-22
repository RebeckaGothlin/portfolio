import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from "./components/layout/NavBar";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage"


function App() {


  return (
    <div className="flex flex-col w-auto min-h-screen">
  
        
        <Router>
        <NavBar />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="*" element={<ErrorPage />} /> 
            </Routes>
          </main>
          <Footer />
       
        
        </Router>

    </div>
  );
}

export default App;
