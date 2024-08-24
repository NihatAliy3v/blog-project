import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<></>} />
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
