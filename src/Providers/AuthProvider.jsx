import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";


 export const AuthContext = createContext()
 const auth = getAuth(app)

 export const AuthProvider = ({children}) => {
   const [user, SetUser] = useState(null)
   const [loading, setLoading]= useState(true)



const createdUser = (email, password) =>{
  setLoading(true)
  return createUserWithEmailAndPassword( auth, email,password)
} 
// singIn
const singIn = (email, password)=>{
     setLoading(true)
     return signInWithEmailAndPassword(auth, email, password)
}

    //  logout
    const logOut = ()=>{
      setLoading(true)
      return signOut (auth)

  }


useEffect(()=>{
 const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
        SetUser(currentUser)
        console.log('current user', currentUser);
        setLoading(false)
  })
  return ()=>{
    return unsubscribe()
  }
},[])

const authInfo ={
  user,
  loading,
  createdUser,
  singIn,
  logOut

}

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;