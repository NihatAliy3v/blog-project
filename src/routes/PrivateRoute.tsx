import { Navigate, Outlet } from "react-router-dom";
import Cookies from "cookies-ts"
const PrivateRoute = () => {
  const cookies = new Cookies();
  return cookies.get("access-token") ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
