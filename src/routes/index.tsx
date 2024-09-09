import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { Header } from "../layouts/Header";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<PrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
