import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCftJI0N_fPCkzjtz-NKSbyzvUEtNeOoR0",
  authDomain: "auctigram.firebaseapp.com",
  projectId: "auctigram",
  storageBucket: "auctigram.appspot.com",
  messagingSenderId: "210021065742",
  appId: "1:210021065742:web:d480263e73588e466d485f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth,email, password);
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id: user.uid,
            username: username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"uvailable",
            lastSeen:Date.now(),
        });
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
        console.log("created");
        
    } catch (error) {
        console.error("Error creating user:", error);
        toast.error(error.code);
    }
}


const login = async (email,password) => {
    try {
        await signInWithEmailAndPassword(auth,email, password);
        console.log("Logged in");
        
    } catch (error) {
        console.error("Error logging in:", error);
        toast.error(error.code);
    }
}

const logout = async () => {
    try {
        await signOut(auth);
        console.log("Logged out successfully");
    } catch (error) {
        console.error("Error logging out:", error);
        // Custom error handling to format error codes more human-readable
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
export {signup,login,logout,auth,db}