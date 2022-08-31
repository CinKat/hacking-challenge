import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import { useAuth } from "./context/auth-context";
import ShowPlan from "./pages/ArmaTuPlan";
import Login from "./pages/Login";
import UnauthenticatedApp from "./UnauthenticatedApp";


function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Header />
      {currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
}

export default App;
