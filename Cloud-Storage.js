import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import {getStorage,ref,uploadBytes} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-storage.js";

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
const fileUpload = document.getElementById('fileUpload');
const storage = getStorage(app);

fileUpload.addEventListener('change', (e)=>{
    const file = e.target.files[0]
    const imageRef = ref(storage, "myimage")
    uploadBytes(imageRef,file)
    .then((result)=> {
        alert("Uploaded File !!!!!!!!!")
    })
})