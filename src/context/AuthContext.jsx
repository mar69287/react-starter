import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const userData = await getCurrentUser();
    //             setUser(userData);
    //             console.log("User data fetched:", userData);
    //         } catch (error) {
    //             console.error("Error fetching user:", error);
    //             setUser(null); 
    //         }
    //     };

    //     fetchUser();
    // }, []);
    
    
    // const login = async ({ email, password }) => {
        
    // };
    
    
    // const signOut = async () => {
        
    // }

    // const signup = async ({ name, email, password }) => {
       
    // };
    


    
    // const getCurrentUser = async () => {
       
    // };
    
    
    const contextData = {
        user,
        // login,
        // signup,
        // signOut,
    }
    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {return useContext(AuthContext)}

export default AuthContext;