import { auth, db } from "./firebase.js";
import { collection, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

auth.onAuthStateChanged(async user=>{
  if(!user) location.href="login.html";

  const snap=await getDocs(collection(db,"payments"));
  let revenue=0,count=0;

  snap.forEach(d=>{
    const x=d.data();
    revenue+=x.amount;count++;
    allPayments.innerHTML+=`<tr><td>${x.user}</td><td>${x.plan}</td><td>₹${x.amount}</td><td><span class="badge">Paid</span></td></tr>`;
  });

  totalRevenue.innerText="₹"+revenue;
  paymentCount.innerText=count;
});

window.logout=()=>signOut(auth).then(()=>location.href="login.html");