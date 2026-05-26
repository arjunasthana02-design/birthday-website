import { useState } from "react";

import Todo from "./Todo";
function Moods({ goBack }) {

const [page,setPage]=useState("main")

if(page==="todo"){
return <Todo goBack={()=>setPage("main")}/>
}

if(page==="sad"){
return <Sad goBack={()=>setPage("main")}/>
}

if(page==="happy"){
return <Happy goBack={()=>setPage("main")}/>
}

if(page==="angry"){
return <Angry goBack={()=>setPage("main")}/>
}

if(page==="exhausted"){
return <Exhausted goBack={()=>setPage("main")}/>
}

if(page==="disappear"){
return <Disappear goBack={()=>setPage("main")}/>
}

return(

<div className="moodPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>


<h1>

pick current damage

</h1>


<div className="moodGrid">

<div
className="moodCard"
onClick={()=>setPage("exhausted")}
>
😴
<h2>exhausted</h2>
<p>too tired to exist today</p>
</div>

<div
className="moodCard"
onClick={()=>setPage("sad")}
>
🥺
<h2>sad</h2>
<p>everything feels heavy today</p>
</div>

<div
className="moodCard"
onClick={()=>setPage("angry")}
>
😡
<h2>angry</h2>
<p>world annoying you again?</p>
</div>

<div
className="moodCard"
onClick={()=>setPage("happy")}
>
✨
<h2>happy</h2>
<p>rare sighting detected</p>
</div>

<div
className="moodCard"
onClick={()=>setPage("disappear")}
>
🚗
<h2>disappear</h2>
<p>drive + music + vanish</p>
</div>

<div
className="moodCard"
onClick={()=>setPage("todo")}
>
📝
<h2>to do list</h2>
<p>tiny life missions</p>
</div>

</div>


<style>{`

.moodPage{

min-height:100vh;

padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;

text-align:center;

}

.backBtn{

position:absolute;

top:30px;
left:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

font-weight:700;

cursor:pointer;

box-shadow:
0 0 30px hotpink;

}

h1{

color:#ff9ed7;

margin-bottom:60px;

font-size:55px;

text-shadow:
0 0 25px hotpink;

}

.moodGrid{

display:grid;

grid-template-columns:repeat(3,260px);

justify-content:center;

gap:35px;

}

@media(max-width:900px){

.moodGrid{

grid-template-columns:repeat(2,260px);

}

}

@media(max-width:600px){

.moodGrid{

grid-template-columns:1fr;

}

}

.moodCard{

width:260px;

padding:40px;

border-radius:35px;

background:
rgba(255,105,180,.07);

cursor:pointer;

box-shadow:
0 0 30px rgba(255,20,147,.2);

transition:.4s;

}

.moodCard:hover{

transform:translateY(-10px);

box-shadow:
0 0 40px hotpink;

}

.moodCard h2{

color:#ff8bce;

font-size:35px;

}

.moodCard p{

font-size:22px;

line-height:1.5;

}

`}</style>


</div>

)

}


function Sad({goBack}){

const [sadness,setSadness]=useState(75)


return(

<div className="sadPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>

<h1>

🥺 sad mode

</h1>

<p className="subtitle">

everything feels heavy today.

</p>



<div className="energyCard">

<h2>

sadness level:
{sadness}%

</h2>

<input

type="range"

min="0"

max="100"

value={sadness}

onChange={(e)=>{

setSadness(e.target.value)

}}

className="slider"

/>

<p>

{
sadness>80
?

"world officially sucks"

:

sadness>40

?

"head a little crowded"

:

"small signs of recovery"
}

</p>

</div>



<div className="checklist">

<h2>

tiny survival checklist

</h2>

<label>
<input type="checkbox"/>
cried already?
</label>

<label>
<input type="checkbox"/>
drank water?
</label>

<label>
<input type="checkbox"/>
went outside?
</label>

<label>
<input type="checkbox"/>
remembered you matter?
</label>

</div>



<div className="buttons">

<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=cute%20dogs",
"_blank"
)}
>

🐶 cute dogs

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=cute%20cats",
"_blank"
)}
>

🐱 cute cats

</button>


<button
onClick={()=>window.open(
"https://open.spotify.com/search/talwiinder",
"_blank"
)}
>

🎵 talwiinder

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=Saudi%20Arabia",
"_blank"
)}
>

🌙 saudi pinterest

</button>


<button
onClick={()=>window.open(
"https://www.swiggy.com",
"_blank"
)}
>

🍫 order brownie?

</button>

</div>



<div className="broCard">

📞 call Arjun. you have the number.

</div>



<div className="quoteCard">

you don't need to fix everything today.

seriously.

just survive today.

</div>



<div className="dumpCard">

<h2>

brain dump

</h2>

<p>

Huge text area:
say it. messy allowed.

</p>

<textarea
placeholder="type whatever nonsense is in your head..."
/>

</div>

<div className="listenerCard">

<h2>

late night reminder

</h2>

<p>

you don't need to explain everything.

some days are just weird.

some days hurt.

surviving the day still counts 🤍

</p>

</div>

<style>{`

.sadPage{

min-height:100vh;
padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;
text-align:center;

}

.backBtn{

position:absolute;

left:30px;
top:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}

h1{

font-size:60px;

color:#ffafd8;

text-shadow:
0 0 25px hotpink;

}

.subtitle{

font-size:28px;

color:#ffd8ea;

margin-bottom:60px;

}

.energyCard{

width:600px;

margin:auto;

padding:40px;

border-radius:35px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

}

.slider{

width:90%;
margin-top:30px;

}

.checklist{

margin-top:60px;

display:flex;

flex-direction:column;

gap:20px;

font-size:24px;

}

.buttons{

margin-top:70px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}

.buttons button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}

.quoteCard,
.dumpCard,
.listenerCard,
.broCard{

width:650px;

margin:auto;

margin-top:50px;

padding:30px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 30px rgba(255,20,147,.2);

font-size:24px;

line-height:1.8;

color:#ffd8ea;

}

textarea{

width:100%;
height:140px;

margin-top:20px;

background:black;

border:none;

border-radius:20px;

padding:20px;

color:white;

font-size:18px;

}


`}</style>

</div>

)

}


function Happy({goBack}){

const [yap,setYap]=useState("")

return(

<div className="happyPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>

<h1>

✨ happy mode

</h1>

<p className="subtitle">

rare sighting detected.

documentation required.

</p>


<div className="yapCard">

<h2>

yap box

</h2>

<p>

okay explain immediately.

why are we happy.

spill everything.

</p>

<textarea

value={yap}

onChange={(e)=>{

setYap(e.target.value)

}}

placeholder="START YAPPING..."

/>

</div>


<div className="buttons">

<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=jhumkas",
"_blank"
)}
>

✨ jhumkas

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=girl%20tattoos",
"_blank"
)}
>

🖤 tattoos

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=girl%20outfit%20ideas",
"_blank"
)}
>

👗 great outfits

</button>


<button
onClick={()=>window.open(
"https://open.spotify.com",
"_blank"
)}
>

🎵 victory music

</button>

</div>


<div className="quoteCard">

today we celebrate.

no sadness allowed.

main character energy active ✨

</div>


<style>{`

.happyPage{

min-height:100vh;

padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;

text-align:center;

}

.backBtn{

position:absolute;

top:30px;
left:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

font-weight:700;

cursor:pointer;

box-shadow:
0 0 25px hotpink;

}

h1{

font-size:60px;

color:#ffafd8;

text-shadow:
0 0 25px hotpink;

}

.subtitle{

font-size:28px;

margin-bottom:60px;

color:#ffd8ea;

}

.yapCard,
.quoteCard{

width:650px;

margin:auto;

margin-top:50px;

padding:35px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

font-size:24px;

line-height:1.7;

}

textarea{

width:100%;

height:180px;

margin-top:20px;

background:black;

border:none;

border-radius:20px;

padding:20px;

color:white;

font-size:18px;

}

.buttons{

margin-top:60px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}

.buttons button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}

`}</style>

</div>

)

}



function Angry({goBack}){

const [rage,setRage]=useState(70)

const [text,setText]=useState(
"world annoying you again?"
)

const roasts=[

"world annoying you again?",

"understandable reaction honestly.",

"someone definitely earned this anger.",

"deep breaths before committing crimes.",

"today has been testing your patience.",

"violence? no. dramatic staring? yes."

]

return(

<div className="angryPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>


<h1>

😡 angry mode

</h1>


<p className="subtitle">

okay who irritated you.

names immediately.

</p>



<div className="rageCard">

<h2>

rage meter:
{rage}%

</h2>

<input

type="range"

min="0"

max="100"

value={rage}

onChange={(e)=>{

setRage(e.target.value)

}}

className="slider"

/>

<p>

{
rage>80

?

"destruction levels detected"

:

rage>40

?

"irritated but surviving"

:

"unexpected emotional maturity"

}

</p>

</div>




<div className="quoteCard">

{text}

<br/><br/>

<button
onClick={()=>{

setText(

roasts[
Math.floor(
Math.random()*roasts.length
)
]

)

}}
>

generate another

</button>

</div>




<div className="buttons">

<button
onClick={()=>window.open(
"https://open.spotify.com/search/phonk",
"_blank"
)}
>

🎵 angry music

</button>



<button
onClick={()=>window.open(
"https://www.google.com/search?q=cute+cats",
"_blank"
)}
>

🐱 emergency cat fix

</button>



<button
onClick={()=>window.open(
"https://www.youtube.com/results?search_query=makeup+transformation+videos",
"_blank"
)}
>

💥 satisfying

</button>



<button
onClick={()=>window.open(
"https://www.swiggy.com",
"_blank"
)}
>

🍟 anger fuel

</button>

</div>




<div className="rantCard">

<h2>

rant box

</h2>

<p>

type names.

type paragraphs.

curse freely.

</p>

<textarea
placeholder="drop all allegations here..."
/>

</div>




<div className="leaveCard">

<h2>

leave earth package includes:

</h2>

<p>

🚗 drive

<br/>

🍟 fries

<br/>

🎵 loud music

</p>

</div>




<div className="destroyCard">

<h2>

destroy this page

</h2>

<p>

completely unnecessary but acceptable.

</p>

<button

onClick={()=>{

document.body.style.transform=

"rotate("+

(Math.random()*8-4)

+"deg)"

}}

>

💥 click repeatedly

</button>

</div>




<style>{`

.angryPage{

min-height:100vh;

padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;

text-align:center;

}


.backBtn{

position:absolute;

left:30px;

top:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}


h1{

font-size:60px;

color:#ffafd8;

text-shadow:
0 0 25px hotpink;

}


.subtitle{

font-size:28px;

margin-bottom:60px;

color:#ffd8ea;

}


.rageCard,
.quoteCard,
.rantCard,
.leaveCard,
.destroyCard{

width:650px;

margin:auto;

margin-top:50px;

padding:35px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

font-size:24px;

line-height:1.7;

}


.slider{

width:90%;

margin-top:30px;

}


.buttons{

margin-top:60px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}


.buttons button,
.quoteCard button,
.destroyCard button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

transition:.3s;

}


.buttons button:hover,
.quoteCard button:hover,
.destroyCard button:hover{

transform:scale(1.06);

}


textarea{

width:100%;

height:140px;

margin-top:20px;

background:black;

border:none;

border-radius:20px;

padding:20px;

color:white;

font-size:18px;

}

`}</style>

</div>

)

}

function Exhausted({goBack}){

const [energy,setEnergy]=useState(30)

return(

<div className="exhaustedPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>

<h1>

😴 exhausted mode

</h1>

<p className="subtitle">

existing counts today.

</p>



<div className="energyCard">

<h2>

energy remaining:
{energy}%

</h2>

<input

type="range"

min="0"

max="100"

value={energy}

onChange={(e)=>{

setEnergy(e.target.value)

}}

className="slider"

/>

<p>

{
energy<25
?

"critical condition detected"

:

energy<60

?

"functioning somehow"

:

"unexpected energy sighting"
}

</p>

</div>



<div className="checklist">

<h2>

tiny survival checklist

</h2>

<label>

<input type="checkbox"/>

drank water

</label>


<label>

<input type="checkbox"/>

ate something

</label>


<label>

<input type="checkbox"/>

left bed

</label>


<label>

<input type="checkbox"/>

survived today

</label>

</div>




<div className="buttons">

<button
onClick={()=>window.open(
"https://www.swiggy.com",
"_blank"
)}
>

🍔 swiggy

</button>



<button
onClick={()=>window.open(
"https://www.zomato.com",
"_blank"
)}
>

🍟 zomato

</button>



<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=cute%20plushies",
"_blank"
)}
>

🧸 plushies

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=dim%20room%20ideas",
"_blank"
)}
>

🌙 dim room ideas

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=oversized%20hoodies",
"_blank"
)}
>

🖤 oversized hoodies

</button>


<button
onClick={()=>window.open(
"https://open.spotify.com/search/talwiinder",
"_blank"
)}
>

🎵 talwiinder

</button>

</div>



<div className="broCard">

call your brother and irritate him

😈

</div>




<style>{`

.exhaustedPage{

min-height:100vh;

padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;

text-align:center;

}

.backBtn{

position:absolute;

left:30px;
top:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}

h1{

font-size:60px;

color:#ffafd8;

text-shadow:
0 0 25px hotpink;

}

.subtitle{

font-size:28px;

color:#ffd8ea;

margin-bottom:60px;

}

.energyCard{

width:600px;

margin:auto;

padding:40px;

border-radius:35px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

}

.slider{

width:90%;

margin-top:30px;

}

.checklist{

margin-top:60px;

display:flex;

flex-direction:column;

gap:20px;

font-size:24px;

}

.buttons{

margin-top:70px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}

.buttons button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

transition:.3s;

}

.buttons button:hover{

transform:scale(1.06);

}

.broCard{

margin-top:70px;

width:500px;

margin-left:auto;

margin-right:auto;

padding:30px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 30px rgba(255,20,147,.2);

font-size:28px;

color:#ffd8ea;

line-height:1.8;

}

`}</style>

</div>

)

}

function Disappear({goBack}){

const [place,setPlace]=useState("")

return(

<div className="disappearPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>


<h1>

🚗 disappear mode

</h1>


<p className="subtitle">

drive + music + vanish.

understandable honestly.

</p>



<div className="tripCard">

<h2>

tiny escape planner

</h2>

<p>

if teleportation worked right now

where are we going?

</p>

<input

value={place}

onChange={(e)=>{

setPlace(e.target.value)

}}

placeholder="mountains? saudi? random road trip?"

/>

{

place &&

<p style={{

marginTop:"25px"

}}>

approved.

bags mentally packed for:

🤍 {place}

</p>

}

</div>




<div className="buttons">

<button
onClick={()=>window.open(
"https://open.spotify.com/search/talwiinder",
"_blank"
)}
>

🎵 night drive music

</button>


<button
onClick={()=>window.open(
"https://maps.google.com",
"_blank"
)}
>

🗺 random map scrolling

</button>


<button
onClick={()=>window.open(
"https://in.pinterest.com/search/pins/?q=night%20drives",
"_blank"
)}
>

🌙 night drive vibes

</button>


<button
onClick={()=>window.open(
"https://www.youtube.com/results?search_query=india+trip+ideas",
"_blank"
)}
>

✈️ trip ideas

</button>

</div>




<div className="packageCard">

<h2>

leave earth package includes:

</h2>

<p>

🚗 drive

<br/>

🍟 fries

<br/>

🎵 loud music

<br/>

🌃 city lights

<br/>

📵 ignoring everyone

</p>

</div>




<div className="quoteCard">

temporary permission granted:

disappear for a bit.

come back later.

the world can wait.

</div>




<style>{`

.disappearPage{

min-height:100vh;

padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

color:white;

text-align:center;

}


.backBtn{

position:absolute;

left:30px;

top:30px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff75c8;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

}


h1{

font-size:60px;

color:#ffafd8;

text-shadow:
0 0 25px hotpink;

}


.subtitle{

font-size:28px;

margin-bottom:60px;

color:#ffd8ea;

}


.tripCard,
.packageCard,
.quoteCard{

width:650px;

margin:auto;

margin-top:50px;

padding:35px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

font-size:24px;

line-height:1.7;

}


.tripCard input{

width:100%;

padding:20px;

margin-top:20px;

border:none;

border-radius:999px;

background:black;

color:white;

font-size:18px;

}


.buttons{

margin-top:60px;

display:flex;

justify-content:center;

gap:25px;

flex-wrap:wrap;

}


.buttons button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

cursor:pointer;

font-weight:700;

box-shadow:
0 0 25px hotpink;

transition:.3s;

}


.buttons button:hover{

transform:scale(1.06);

}

`}</style>

</div>

)

}


export default Moods