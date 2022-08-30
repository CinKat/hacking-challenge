import { Navigate, Route, Routes } from "react-router-dom";
import ShowPlan from "./pages/ArmaTuPlan";

function AuthenticatedApp() {
  return (
    <Routes>
      <Route index element={<Navigate to="/armatuplan" />} />
      <Route path="*" element={<Navigate to="/armatuplan" />} />
      <Route path="/armatuplan" element={<ShowPlan />} />
    </Routes>
  )
}

export default AuthenticatedApp;