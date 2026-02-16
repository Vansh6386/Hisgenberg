import { db, auth } from "./firebase.js";
import { collection, addDoc } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.payNow = (plan,amount)=>{
  const rzp = new Razorpay({
    key:"rzp_test_XXXXXXX",
    amount:amount*100,
    currency:"INR",
    handler: async res=>{
      await addDoc(collection(db,"payments"),{
        user:auth.currentUser?.email || "Guest",
        plan,amount,
        paymentId:res.razorpay_payment_id
      });
      alert("Payment Successful");
    }
  });
  rzp.open();
};

window.sendEmail = ()=>{
  emailjs.send("Hisgenberg","template_5ehtuvy",{
    from_name:name.value,
    from_email:email.value,
    message:message.value
  });
  alert("Message Sent");
};