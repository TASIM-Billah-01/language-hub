import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();
const AuthProvider = ({children}) => {
    const [myUser, setMyUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
// const navigate = useNavigate()
    // const googleSignIn = () => {
    //     setLoading(true)
    //     return signInWithPopup(auth, googleProvider)
    //       .then(result => {
    //             setMyUser(result.user);   
    //             setLoading(false);
    //             return result.user
    //         })
    //         .catch(error => {
    //             setLoading(false);
    //             console.log(error);
    //         });
    // }
    // const googleSignIn = () => {
    // setLoading(true);

    // return signInWithPopup(auth, googleProvider)
    //   .then(result => {
    //     console.log(result.user);
        
    //       setMyUser(result.user);   
    //       setLoading(false);

    //       return result.user;
    //   })
    //   .catch(error => {
    //       setLoading(false);
    //       console.log(error);
    //   });
// };
// const googleSignIn = () => {
//     setLoading(true);

//     signInWithPopup(auth, googleProvider)
//         .then(result => {
//             setMyUser(result.user);
//             console.log(result.user);
             
//             setLoading(false);      
//                  // optional, in case you want to use it later
//         })
//         .catch(error => {
//             setLoading(false);
//             console.log(error);
//         });
// };

  const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                setMyUser(result.user);   
                setLoading(false);
                // return result.user;
            })
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
}


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    const info = {
        createUser,
        myUser,
        setMyUser,
        setLoading,
        loading,
        logOut,
        loginUser,
        googleSignIn
    }
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    setMyUser(user);
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);
    return (
        <authContext.Provider value={info}>
            {
                children
            }
        </authContext.Provider>
    );
};

export default AuthProvider;