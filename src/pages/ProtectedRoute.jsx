import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";
import { useEffect } from "react";
import PropTypes from "prop-types";

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) {
        navigate("/");
      }
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export { ProtectedRoute };
