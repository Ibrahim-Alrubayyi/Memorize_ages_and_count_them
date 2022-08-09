import * as React from "react";
//Pages
import Index from "../src/pages/ageCalculator/Index";
import UserAge from "./pages/ageCalculator/UserAge";
import Profile from "../src/pages/profile/Profile";
import Register from "./pages/register&login/Register";
import Login from "./pages/register&login/Login";
import EditeFrinde from "./pages/profile/EditeFrinde";
import AddFrinde from "./pages/profile/AddFrinde";
import ProfileEdite from "./pages/profile/ProfileEdite";
// components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ThemeProvider } from "react-bootstrap";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import PrivateRoutes from "./helpers/PrivateRoutes";
import { getAllFrindes } from "./adapters/getAllFrindes";
import { loginDone } from "./redux-store/Actions/userAction";
function App() {
  const dispatch = useDispatch();

  const [auth] = React.useState(async () => {
    const testUserToken = await getAllFrindes(dispatch);

    if (testUserToken.status === 200) {
      loginDone(dispatch);
    }
  });

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider dir="rtl">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/age" element={<UserAge />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEdite />} />

              <Route path="/friend/edit" element={<EditeFrinde />} />
              <Route path="/friend/add" element={<AddFrinde />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
