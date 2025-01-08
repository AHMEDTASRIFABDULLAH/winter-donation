import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const HideRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return (
      <div className="flex justify-center mt-6">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default HideRoute;
