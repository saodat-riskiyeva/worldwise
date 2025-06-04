import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAutheticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAutheticated) navigate("/");
    },
    [isAutheticated, navigate]
  );

  return children;
}

export default ProtectedRoute;
