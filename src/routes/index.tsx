import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { Header } from "../layouts/Header";

const AppRouter = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<></>} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/a" element={<>safasf</>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
