import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc , doc} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
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
const db = getFirestore(app);
const table = document.getElementById("table")
const form = document.getElementById("addForm")


async function getEmployees(db){
    const empCol = collection(db, 'Employees')
    const empSnapshot = getDocs(empCol)
    return empSnapshot
}

function showData(Employees){
    const row = table.insertRow(-1)
    const nameCol = row.insertCell(0) 
    const ageCol = row.insertCell(1)
    const deleteCol = row.insertCell(2)
    nameCol.innerHTML = Employees.data().name
    ageCol.innerHTML = Employees.data().age

    // Create button Delete
    let btn = document.createElement('button')
    btn.textContent="Delete"
    btn.setAttribute('class', 'btn btn-danger')
    btn.setAttribute('data-id', Employees.id)
    deleteCol.appendChild(btn)
    btn.addEventListener('click', (e)=> {
        let id = e.target.getAttribute('data-id')
        deleteDoc(doc(db,"Employees", id))
        alert("Delete Successfully !!!!!!")
    })
}

// ดึงกลุ่ม document
const data = await getEmployees(db)
data.forEach(Employees => {
    showData(Employees)
})

// ดึงdata form ADD  
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addDoc(collection(db,'Employees'), {
        name:form.name.value,
        age:form.age.value
    })
    form.name.value = ""
    form.age.value = ""
    alert("Successfully. !!!!!")
})