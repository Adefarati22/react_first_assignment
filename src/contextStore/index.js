import { createContext, useContext } from "react";

export const AuthContext = createContext({})

export const useAuth = () => {
    const authStore = useContext(AuthContext);
    if (authStore === undefined) {
        throw new Error("useAuth must be provided within a provided context")
    }
    return authStore
}