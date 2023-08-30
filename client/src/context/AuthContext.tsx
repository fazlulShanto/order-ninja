import { createContext, useState } from 'react';
import {ReactNode} from 'react';

type MyComponentProps = {
    children: ReactNode;
  };

const AuthContext = createContext({});

export function AuthProvider({ children  } : MyComponentProps) {
    const [user_id, setUserId] = useState('');
    const [token, setToken] = useState(false);
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [role, setRole] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [cart , setCart] = useState("");
    return (
        <AuthContext.Provider
            value={{
                user_id,setUserId,
                token,setToken,
                name,setName,
                email,setEmail,
                role,setRole,
                loggedIn,setLoggedIn,
                cart,setCart
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
