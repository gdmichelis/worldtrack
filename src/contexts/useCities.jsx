import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined) {
    throw new Error("Warning! Context is outside Provider");
  }
  return context;
}

export { useCities };
