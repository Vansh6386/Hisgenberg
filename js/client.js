import { auth, db } from "./firebase.js";
import { collection, query, where, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

auth.onAuthStateChanged(async user=>{
  if(!user) location.href="login.html";

  const q=query(collection(db,"payments"),where("user","==",user.email));
  const snap=await getDocs(q);

  let total=0,count=0;
  snap.forEach(d=>{
    const x=d.data();
    total+=x.amount;count++;
    payments.innerHTML+=`<tr><td>${x.plan}</td><td>₹${x.amount}</td><td><span class="badge">Paid</span></td></tr>`;
  });
  purchaseCount.innerText=count;
  totalSpent.innerText="₹"+total;
});

window.logout=()=>signOut(auth).then(()=>location.href="login.html");