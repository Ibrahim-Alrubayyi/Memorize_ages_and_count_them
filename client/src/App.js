import * as React from "react";

//Pages
import Index from "../src/pages/ageCalculator/Index";
import UserAge from "./pages/ageCalculator/UserAge";
import Profile from "../src/pages/profile/Profile";
// components
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import { ThemeProvider } from "react-bootstrap";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Register from "./pages/register&login/Register";
import Login from "./pages/register&login/Login";
import EditeFrinde from "./pages/profile/EditeFrinde";
import AddFrinde from "./pages/profile/AddFrinde";
import { useDispatch } from "react-redux";

import ProfileEdite from "./pages/profile/ProfileEdite";
import PrivateRoutes from "./helpers/PrivateRoutes";
import { getAllFrindes } from "./adapters/getAllFrindes";
import { loginDone } from "./redux/Actions/userAction";
function App() {
  //check httpOnly Token to proteced routes
  const [auth, setAuth] = React.useState(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const testUserState = async () => {
      const a = await getAllFrindes(dispatch);

      if (a.status === 200) {
        setAuth(true);
        loginDone(dispatch);
      } else {
        setAuth(false);
      }
    };
    testUserState();
  }, []);
  console.log(auth);
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

            <Route element={<PrivateRoutes auth={auth} />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<ProfileEdite />} />

              <Route path="/friend/edit" element={<EditeFrinde />} />
              <Route path="/friend/add" element={<AddFrinde />} />
            </Route>

            <Route path={"*"} element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
