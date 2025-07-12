import { useState, useEffect } from "react"
import { AuthContext } from "."
import { getAuthenticatedUser } from "../api/auth"




export default function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(null)
    const [error, setError] = useState(null)
    const [isCheckingAuth, setIsCheckingAuth] = useState(false)

useEffect(() => {
  const token = localStorage.getItem("accessToken");
  if(token) {
    setAccessToken(token)
  }
}, []);

useEffect(() => {
if(!accessToken)
  return
 const getAuth = async () => {
  setIsCheckingAuth(true);
  try {
    const res = await getAuthenticatedUser(accessToken);
    if (res.status === 200) {
        setUser(res.data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsCheckingAuth(false);
  }
  };
  getAuth();
}, [accessToken]);

console.log(user);




  return (
    <AuthContext.Provider value={{user, setAccessToken, isCheckingAuth}}>{children}</AuthContext.Provider>
  );
}
