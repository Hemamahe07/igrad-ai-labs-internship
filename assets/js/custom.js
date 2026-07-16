// =============================
// PREMIUM JS PART 1
// =============================

document.addEventListener("DOMContentLoaded",()=>{

// -----------------------------
// AOS
// -----------------------------

AOS.init({

duration:1200,
once:false,
offset:120,
easing:"ease-in-out"

});

// -----------------------------
// Cursor Glow
// -----------------------------

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

// -----------------------------
// Fade Animation
// -----------------------------

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll(

"h1,h2,h3,p,img,table,blockquote,.card,.stat-box,.workflow-box,.achievement-card"

).forEach(el=>{

el.classList.add("fade-in");

observer.observe(el);

});

// -----------------------------
// Floating Cards
// -----------------------------

document.querySelectorAll(

".card,.workflow-box,.achievement-card,.stat-box"

).forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.04)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// -----------------------------
// Image Tilt
// -----------------------------

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rx=-(y-rect.height/2)/20;

const ry=(x-rect.width/2)/20;

img.style.transform=

`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.06)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="perspective(900px) rotateX(0) rotateY(0) scale(1)";

});

});

});
// =============================
// PREMIUM JS PART 2
// =============================

// -----------------------------
// Scroll Progress Bar
// -----------------------------

const progress=document.createElement("div");

progress.id="progress-bar";

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.width="0";
progress.style.zIndex="99999";
progress.style.background=
"linear-gradient(90deg,#8B5CF6,#06B6D4,#3B82F6)";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const percent=(window.scrollY/total)*100;

progress.style.width=percent+"%";

});

// -----------------------------
// Scroll To Top
// -----------------------------

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>250){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// -----------------------------
// Counter Animation
// -----------------------------

document.querySelectorAll("[data-count]").forEach(counter=>{

const target=+counter.dataset.count;

let count=0;

const speed=target/120;

const update=()=>{

count+=speed;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target;

}

};

update();

});

// -----------------------------
// Skill Bar Animation
// -----------------------------

const skillObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const fill=entry.target.querySelector(".skill-fill");

if(fill){

fill.style.width=fill.dataset.width;

}

}

});

});

document.querySelectorAll(".skill").forEach(skill=>{

skillObserver.observe(skill);

});

// -----------------------------
// Stagger Animation
// -----------------------------

document.querySelectorAll(

".tech-card,.workflow-box,.achievement-card"

).forEach((card,index)=>{

card.style.animation=

`fadeUp .8s ease ${index*0.15}s forwards`;

card.style.opacity="0";

});

// -----------------------------
// Magnetic Buttons
// -----------------------------

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.transform=

`translate(${(x-rect.width/2)/8}px,

${(y-rect.height/2)/8}px)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translate(0,0)";

});

});

// -----------------------------
// Random Floating Icons
// -----------------------------

document.querySelectorAll(".logo").forEach(icon=>{

icon.style.animation=

`floating ${3+Math.random()*3}s ease-in-out infinite`;

});

// -----------------------------
// Console
// -----------------------------

console.log("🚀 Premium Portfolio Loaded");
// =============================
// PREMIUM JS PART 3
// =============================

// -----------------------------
// Page Loader
// -----------------------------

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// -----------------------------
// Hero Parallax
// -----------------------------

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

if(hero){

hero.style.transform=`translateY(${window.scrollY*0.2}px)`;

}

});

// -----------------------------
// Hero Title Glow
// -----------------------------

document.querySelectorAll("h1").forEach(title=>{

setInterval(()=>{

title.style.textShadow=

`0 0 10px #8B5CF6,

0 0 20px #06B6D4,

0 0 30px #3B82F6`;

setTimeout(()=>{

title.style.textShadow="none";

},1200);

},3500);

});

// -----------------------------
// Tech Logo Hover
// -----------------------------

document.querySelectorAll(".logo").forEach(logo=>{

logo.addEventListener("mouseenter",()=>{

logo.style.filter=

"drop-shadow(0 0 25px #06B6D4)";

});

logo.addEventListener("mouseleave",()=>{

logo.style.filter="none";

});

});

// -----------------------------
// Hero Buttons
// -----------------------------

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.boxShadow=

"0 0 25px #8B5CF6,0 0 50px #06B6D4";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

});

// -----------------------------
// Card Shine
// -----------------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

card.style.background=

`radial-gradient(circle at

${e.clientX-rect.left}px

${e.clientY-rect.top}px,

rgba(255,255,255,.16),

rgba(255,255,255,.06))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});

// -----------------------------
// Smooth Anchor Scroll
// -----------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});

// -----------------------------
// Welcome Message
// -----------------------------

console.log("✨ Premium Animation Loaded Successfully");
// =============================
// PREMIUM JS PART 4
// =============================

// -----------------------------
// Typing Effect
// -----------------------------

document.querySelectorAll(".typing").forEach(el=>{

const text=el.innerHTML;

el.innerHTML="";

let i=0;

function type(){

if(i<text.length){

el.innerHTML+=text.charAt(i);

i++;

setTimeout(type,60);

}

}

type();

});

// -----------------------------
// Floating Particles
// -----------------------------

const particleContainer=document.createElement("div");

particleContainer.className="hero-bg";

document.body.appendChild(particleContainer);

for(let i=0;i<35;i++){

const p=document.createElement("span");

p.style.left=Math.random()*100+"%";

p.style.animationDelay=Math.random()*20+"s";

p.style.animationDuration=(10+Math.random()*10)+"s";

p.style.width=(10+Math.random()*20)+"px";

p.style.height=p.style.width;

particleContainer.appendChild(p);

}

// -----------------------------
// Workflow Animation
// -----------------------------

const workflowObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const boxes=entry.target.querySelectorAll(".workflow-box");

boxes.forEach((box,index)=>{

setTimeout(()=>{

box.style.opacity="1";

box.style.transform="translateY(0)";

},index*300);

});

}

});

});

document.querySelectorAll(".workflow").forEach(flow=>{

flow.querySelectorAll(".workflow-box").forEach(box=>{

box.style.opacity="0";

box.style.transform="translateY(60px)";

});

workflowObserver.observe(flow);

});

// -----------------------------
// Card Rotate
// -----------------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",e=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/18;

const rotateX=-(y-rect.height/2)/18;

card.style.transform=

`perspective(1200px)

rotateX(${rotateX}deg)

rotateY(${rotateY}deg)

translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(1200px) rotateX(0) rotateY(0) translateY(0)";

});

});

// -----------------------------
// Navbar Active Glow
// -----------------------------

document.querySelectorAll(".md-tabs__link").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.textShadow="0 0 12px #06B6D4";

});

link.addEventListener("mouseleave",()=>{

link.style.textShadow="none";

});

});

// -----------------------------
// Random Floating Animation
// -----------------------------

setInterval(()=>{

document.querySelectorAll(".logo").forEach(icon=>{

icon.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0)"

}

],{

duration:2000,

iterations:1

});

});

},5000);

// -----------------------------
// Console
// -----------------------------

console.log("🔥 Premium Animation Pack Enabled");
// =============================
// PREMIUM JS PART 5
// =============================

// -----------------------------
// Ripple Effect
// -----------------------------

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.style.position="absolute";
ripple.style.borderRadius="50%";
ripple.style.background="rgba(255,255,255,.4)";
ripple.style.transform="scale(0)";
ripple.style.animation="ripple .7s linear";
ripple.style.pointerEvents="none";

this.style.position="relative";
this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// -----------------------------
// Navbar Blur
// -----------------------------

window.addEventListener("scroll",()=>{

const header=document.querySelector(".md-header");

if(window.scrollY>50){

header.style.background="rgba(7,17,31,.78)";
header.style.backdropFilter="blur(25px)";

}else{

header.style.background="rgba(7,17,31,.55)";

}

});

// -----------------------------
// Image Popup
// -----------------------------

document.querySelectorAll(".md-typeset img").forEach(img=>{

img.style.cursor="zoom-in";

img.onclick=()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.88)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.zIndex="999999";

const clone=img.cloneNode();

clone.style.maxWidth="85%";
clone.style.maxHeight="85%";
clone.style.borderRadius="20px";

overlay.appendChild(clone);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

};

});

// -----------------------------
// Random Glow
// -----------------------------

setInterval(()=>{

document.querySelectorAll(".card,.achievement-card").forEach(card=>{

card.animate([

{

boxShadow:"0 0 0px rgba(6,182,212,.1)"

},

{

boxShadow:"0 0 25px rgba(6,182,212,.4)"

},

{

boxShadow:"0 0 0px rgba(6,182,212,.1)"

}

],{

duration:2500

});

});

},4500);

// -----------------------------
// Heading Animation
// -----------------------------

document.querySelectorAll("h2").forEach((heading,index)=>{

heading.style.animation=

`fadeUp .8s ease ${index*.15}s both`;

});

// -----------------------------
// Ripple Keyframe
// -----------------------------

const style=document.createElement("style");

style.innerHTML=`

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}

`;

document.head.appendChild(style);

// -----------------------------

console.log("🚀 Premium UI Fully Loaded");

// -----------------------------
// =============================
// PREMIUM JS PART 6 (FINAL)
// =============================

// -----------------------------
// Page Transition
// -----------------------------

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .8s ease";

document.body.style.opacity="1";

});

// -----------------------------
// Navigation Animation
// -----------------------------

document.querySelectorAll(".md-tabs__link").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-5px) scale(1.08)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0) scale(1)";

});

});

// -----------------------------
// Auto Glow
// -----------------------------

setInterval(()=>{

document.querySelectorAll("img").forEach(img=>{

img.animate([

{

filter:"drop-shadow(0 0 0px #06B6D4)"

},

{

filter:"drop-shadow(0 0 25px #06B6D4)"

},

{

filter:"drop-shadow(0 0 0px #06B6D4)"

}

],{

duration:2500

});

});

},4000);

// -----------------------------
// Table Animation
// -----------------------------

document.querySelectorAll("table").forEach(table=>{

table.addEventListener("mouseenter",()=>{

table.style.transform="scale(1.02)";

});

table.addEventListener("mouseleave",()=>{

table.style.transform="scale(1)";

});

});

// -----------------------------
// Card Auto Float
// -----------------------------

setInterval(()=>{

document.querySelectorAll(".card").forEach(card=>{

card.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-8px)"

},

{

transform:"translateY(0)"

}

],{

duration:3500

});

});

},4500);

// -----------------------------
// Hero Pulse
// -----------------------------

document.querySelectorAll(".hero-title").forEach(title=>{

setInterval(()=>{

title.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.03)"

},

{

transform:"scale(1)"

}

],{

duration:2000

});

},5000);

});

// -----------------------------
// Console
// -----------------------------

console.log("✨ Phase 3 Premium Animation Completed ✨");
function showPopup(type){

const title=document.getElementById("popup-title");
const content=document.getElementById("popup-content");

if(type==="duration"){

title.innerHTML="📅 Internship Duration";

content.innerHTML=`
<b>Start Date:</b> June 15, 2026<br>
<b>End Date:</b> July 15, 2026<br><br>

📆 <b>Duration:</b> 30 Days
`;

}

else if(type==="courses"){

title.innerHTML="📚 Courses Completed";

content.innerHTML=`
<ul>
<li>n8n Quickstart (QS101)</li>
<li>n8n Essentials</li>
<li>n8n Integrations</li>
<li>n8n In Practice</li>
<li>Linux Foundation LFD102</li>
<li>GitHub LFD140</li>
</ul>
`;

}

else if(type==="projects"){

title.innerHTML="💻 Projects";

content.innerHTML=`
<ul>
<li>DevSecOps Periodic Table</li>
<li>Invoice Payment Reminder Bot</li>
<li>Internship Documentation Website</li>
</ul>
`;

}

else{

title.innerHTML="🛠 Skills Learned";

content.innerHTML=`
<ul>
<li>Git</li>
<li>GitHub</li>
<li>Python</li>
<li>HTML5</li>
<li>CSS3</li>
<li>JavaScript</li>
<li>MkDocs</li>
<li>n8n</li>
<li>AWS Basics</li>
<li>AI Tools</li>
<li>Technical Documentation</li>
<li>Open Source</li>
</ul>
`;

}

document.getElementById("popup").style.display="flex";

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

window.onclick=function(e){

const popup=document.getElementById("popup");

if(e.target===popup){

popup.style.display="none";

}

}