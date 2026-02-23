// Loader
window.addEventListener("load",function(){
setTimeout(()=>{
document.getElementById("loader").style.opacity="0";
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},800);
},2000);
});

// Smooth Scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Login
function openLogin(){
document.getElementById("loginModal").style.display="flex";
}
function closeLogin(){
document.getElementById("loginModal").style.display="none";
}
function login(){
if(document.getElementById("username").value==="client" &&
document.getElementById("password").value==="1234"){
alert("Login Successful");
closeLogin();
}else{
alert("Invalid Credentials");
}
}

// Scroll Animation
const faders=document.querySelectorAll(".fade");
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("appear");
}
});
});
faders.forEach(f=>observer.observe(f));

// Custom Cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});
