import { createContext,useState } from "react";

export const USer= createContext({});

export default function USerProvider({children}){
    const [auth, setauth] = useState({});
    return<USer.Provider value={{auth,setauth}}>{children}</USer.Provider>;
}

