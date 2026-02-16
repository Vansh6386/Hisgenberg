import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.register = () => {
  createUserWithEmailAndPassword(auth, regEmail.value, regPass.value)
  .then(()=>alert("Registered"))
  .catch(e=>alert(e.message));
};

window.login = () => {
  signInWithEmailAndPassword(auth, logEmail.value, logPass.value)
  .then(()=>location.href="client.html")
  .catch(e=>alert(e.message));
};