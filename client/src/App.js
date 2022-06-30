import * as React from "react";

//Pages
import Index from "../src/pages/ageCalculator/Index";

// components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ThemeProvider } from "react-bootstrap";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider dir="rtl">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />

            <Route path="/login" element={<div>LOGIN</div>} />
            <Route path="/register" element={<Index />} />

            <Route path="/profile" element={<Index />} />
            <Route path="/profile/edit" element={<Index />} />

            <Route path="/friend" element={<Index />} />
            <Route path="/friend/edit" element={<Index />} />
            <Route path="/friend/add" element={<Index />} />

            <Route path={"*"} element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
