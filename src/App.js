import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";


function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/armatuplan" element={<p>Arma tu plan</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
