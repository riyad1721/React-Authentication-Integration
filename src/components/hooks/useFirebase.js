import initializeAuthentication from "../Firebase/firebase.inialize"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.result);
            })
            .catch(error => {
                setError(error.massage);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                console.log('inside state change', user);
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;