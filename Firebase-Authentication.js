import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged , signOut, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCqnbEsNEoiVvURkidn7_LYO73VnQ5_grk",
    authDomain: "basic-firebase-webapp.firebaseapp.com",
    projectId: "basic-firebase-webapp",
    storageBucket: "basic-firebase-webapp.appspot.com",
    messagingSenderId: "288568907982",
    appId: "1:288568907982:web:aa7823c6669d572320589f",
    measurementId: "G-1SYEJJCX1T"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const form = document.getElementById("registerForm")
const formarea = document.getElementById("form-area")
const profile = document.getElementById("profile")
const welcome = document.getElementById("welcome")
const logout = document.getElementById("logout")
const loginForm = document.getElementById("loginForm")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = form.email.value
    const pass = form.password.value
    createUserWithEmailAndPassword(auth, email, pass)
    .then((result)=> {
        alert("Registered Successfully !!")
    }).cath((error)=> {
        alert(error.message)
    })
})

onAuthStateChanged(auth, (user)=> {
    if(user){
        profile.style.display="block"
        formarea.style.display="none"
        welcome.innerText=`Welcome ${user.email}`
    }else{
        profile.style.display="none"
        formarea.style.display="block"
    }
})


logout.addEventListener("click", (e)=> {
    signOut(auth).then(()=>{
        alert("Logout")
    }).cath((error)=>{
        alert(error.message)
    })
})  

loginForm.addEventListener("click", (e)=>{
    e.preventDefault()
    const email = loginForm.email.value
    const pass = loginForm.password.value
    signInWithEmailAndPassword(auth, email, pass)
    .then((result)=> {
        alert("Sign In!!! OK")
    }).cath((error)=> {
        alert(error.message)
    })
})