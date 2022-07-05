import { useContext, useState } from "react";
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const register = async (values) => {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.email);
        resolve('success');
      })
      .catch((error) => {
        reject('El correo ya se encuentra registrado') ;
      });
    });
  }

  const login = async (values) => {    
    const auth = getAuth();

    return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user.email);
        resolve('success');
      })
      .catch((error) => {
        reject('Credenciales inválidas');
      });
    });
  }

  const logout = async () => {
    const auth = getAuth();

    return new Promise((resolve, reject) => {
      signOut(auth).then(() => {
        setUser('');
        resolve('success');
      }).catch((error) => {
        reject('Ocurrió un error al cerrar sesión, intentalo luego');
      });
  });
  }

  return(
    <AuthContext.Provider value={{ user, setUser, register, login, logout }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContext = createContext();
