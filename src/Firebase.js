import { initializeApp } from "firebase/app";
import {
            getAuth,
            createUserWithEmailAndPassword,
            signInWithEmailAndPassword,
            updateProfile,
} from "firebase/auth";
import {
            getFirestore,
            doc,
            setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
            apiKey: "AIzaSyAEUVQTFzIbxznjqAHTDnQimrlGgvthFyw",
            authDomain: "netflix-c3544.firebaseapp.com",
            projectId: "netflix-c3544",
            storageBucket: "netflix-c3544.firebasestorage.app",
            messagingSenderId: "178286157176",
            appId: "1:178286157176:web:f1c0d494955d13c52dfc8d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const formatFirebaseError = (errorMessage) => {
  if (!errorMessage) return "Something went wrong. Try again.";

  const match = errorMessage.match(/\(auth\/(.*)\)/);
  if (!match || !match[1]) return "Unexpected error occurred.";

  const code = match[1].replace(/-/g, ' ');
  const formatted = code.charAt(0).toUpperCase() + code.slice(1);
  return formatted;
};


const signup = async (name, email, password) => {
            try {
                        const response = await createUserWithEmailAndPassword(auth, email, password);
                        const user = response.user;

                        await updateProfile(user, {
                                    displayName: name,
                        });

                        await setDoc(doc(db, "users", user.uid), {
                                    uid: user.uid,
                                    name: name,
                                    email: email,
                                    authProvider: "local",
                        });

                        console.log("User signed up & saved to Firestore");
            } catch (error) {
                        console.error("Error signing up:", error);
                        toast.error(formatFirebaseError(error.message));
            }
};

const login = async (email, password) => {
            try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password);
                        const user = userCredential.user;
                        return user;
            } catch (error) {
                        console.error("Error logging in:", error);
                        toast.error(formatFirebaseError(error.message));
            }
};

const logout = async () => {
            try {
                        await auth.signOut();
                        console.log("User logged out successfully");
            } catch (error) {
                        console.error("Error logging out:", error);
                        toast.error(formatFirebaseError(error.message));
            }
};

export { auth, db, signup, login, logout };
