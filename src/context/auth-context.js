import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../services/users";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    getUser().then(dataUser => (
      setUsers(dataUser)
    ))
      .catch((error) => console.log(error));
  }, []);

  function filterUser(dataform) {
    let user = users.filter((item) => (item.phone === dataform.celular));
    if (user.length >= 1) {
      const currentuser = user.map(element => {
        return { ...element, placa: dataform.placa };
      });
      setCurrentUser(currentuser);
    }
    return user;
  }

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        filter: filterUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }