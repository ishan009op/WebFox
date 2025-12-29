import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("WEBtoken");

  if (!token) return <Navigate to="/" />;

  try {
    const decoded = jwtDecode(token);

    const isAdmin =
      decoded.role === "admin" || decoded.isAdmin === true;

    if (!isAdmin) return <Navigate to="/" />;

    return children;
  } catch (error) {
    return <Navigate to="/" />;
  }
};

export default AdminRoute;

