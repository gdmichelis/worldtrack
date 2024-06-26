import { useContext } from "react";
import { AuthContext } from "./FakeAuthContext";

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Warning AuthContext is used outside the context!");
  }
  return context;
}

export { useAuth };
