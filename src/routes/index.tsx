import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { Header } from "../layouts/Header";
import PostDetail from "../pages/PostDetail";
import CreatePost from "../pages/CreatePost";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:id" element={<PostDetail/>} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route element={<PrivateRoute />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
