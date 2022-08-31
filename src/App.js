import AuthenticatedApp from "./AuthenticatedApp";
import Header from "./components/Header";
import { useAuth } from "./context/auth-context";
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
