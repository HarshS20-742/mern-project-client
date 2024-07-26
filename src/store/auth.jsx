import { createContext, useContext, useEffect, useState } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {  // Corrected children prop
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [service, setService] = useState([]);
    const API = import.meta.env.VITE_BASE_API;

    const authorizationToken =  `Bearer ${token}`;
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem('token', serverToken);
    }
// talking the logout functionality
    const LogoutUser = () =>{
        setToken('');
        localStorage.removeItem('token');
    }

// JWT authentication --- to get the currently logged in user data
    const userAuthentication = async() =>{
        try {
            setIsLoading(true);
            const response = await fetch(`${API}/api/auth/user`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authorizationToken,
                },
            });

            if(response.ok){
                const data = await response.json();
                setUserData(data.userData);
                setIsLoading(false);
                // console.log("userdata from auth", data.userData);
                
            }else{
                console.error('Error getting user data');
                setIsLoading(false);
               
            }
        } catch (error) {
            console.error('Error getting user data');
        }
    }
//  getting the services data to display in the services page
    const getServices = async() =>{
        try {
            const response = await fetch(`${API}/api/data/service`,{
                method: 'GET', });

                if(response.ok){
                    const data = await response.json();
                    setService(data.msg);
                    // console.log("services from auth", data.msg);
                }
        } catch (error) {
            console.log(`Services frontend error: ${error}`);
        }
    }


    useEffect(() =>{
        getServices();
        userAuthentication();
    },[]);

    let isLoggedIn = !!token; 

    return (
        <AuthContext.Provider value={{ isLoggedIn,storeTokenInLS, LogoutUser, userData, service, authorizationToken, isLoading, API }}>
            {children} 
        </AuthContext.Provider>
    );
}

// Custom hook to use AuthContext
export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return authContextValue;
}
