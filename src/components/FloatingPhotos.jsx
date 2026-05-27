function FloatingPhotos({ goBack, openMoods }) {

const photos=[

`${import.meta.env.BASE_URL}photo1.jpeg`,
`${import.meta.env.BASE_URL}photo2.jpeg`,
`${import.meta.env.BASE_URL}photo3.jpeg`,
`${import.meta.env.BASE_URL}photo4.jpeg`,
`${import.meta.env.BASE_URL}photo5.jpeg`,
`${import.meta.env.BASE_URL}photo6.jpeg`,
`${import.meta.env.BASE_URL}photo7.jpeg`,
`${import.meta.env.BASE_URL}photo8.jpeg`,
`${import.meta.env.BASE_URL}photo9.jpeg`

]

const artists=[

{
name:"Talwiinder",
line:"late night drives and disappearing hours",
link:"https://open.spotify.com/search/talwiinder"
},

{
name:"CAS",
line:"for staring out windows dramatically",
link:"https://open.spotify.com/search/cigarettes%20after%20sex"
}

]


return(

<div className="memoryPage">

<button
className="backBtn"
onClick={()=>{
if(goBack) goBack()
}}
>
← Back to brownie
</button>


<div className="memoryHeader">

<p className="topLine">
for one day, the universe revolves around you ✨
</p>

<h1>
Today is about you
</h1>

<p className="subText">
ik you hate getting clicked.
<br/>
sucks to be you 😂
</p>

</div>



<div className="photoTrack">

{[...photos,...photos].map((photo,index)=>(

<div className="photoCard" key={index}>

<img
src={photo}
alt=""
/>

</div>

))}

</div>





<div className="extraSections">

<div className="miniCard">

<h3>Random facts 🖤</h3>

<p>• hates birthdays</p>
<p>• pink over every colour</p>
<p>• hates getting clicked</p>
<p>• loves food more than anything</p>
<p>• never has her guards down</p>
<p>• loves jhumkes</p>
<p>• hates me</p>

</div>



<div className="miniCard">

<h3>Tiny observations ✨</h3>

<p>you act like things don't matter.</p>
<p>but they do because you matter</p>
<p>more than you know</p>

</div>



<div className="miniCard">

<h3>Mood repair kit 🍫</h3>

<p>1 brownie</p>
<p>1 playlist</p>
<p>1 kit kat</p>
<p>salman ka khaana</p>
<p>drives</p>
<p>soft toys hmmmm</p>
<p>talwiinder hehehe</p>

</div>



<div className="miniCard">

<h3>tiny note 💗</h3>

<p>

you don't need to have
everything figured out.

existing is enough.

and ik one day you
actually will figure
everything out.

till then i will hear
your boring nonsense.

</p>

</div>

</div>





<div className="musicSection">

<h2>
late night person music 🎧
</h2>

<p className="nowPlaying">

currently playing:
<span> Talwiinder — Wishes ✨</span>

</p>



<div className="songGrid">

{artists.map((artist,index)=>(

<div

className="songCard"

key={index}

onClick={()=>
window.open(
artist.link,
"_blank"
)
}

>

<h3>{artist.name}</h3>

<p>{artist.line}</p>

<div className="playCircle">

🎵

</div>

</div>

))}

</div>



<button

className="spotifyBtn"

onClick={()=>
window.open(
"https://open.spotify.com/",
"_blank"
)
}

>

💗 connect your spotify

</button>


<button

className="nextBtn"

onClick={()=>{
if(openMoods){
openMoods()
}
}}

>

next slide →

</button>
</div>






<style>{`

.memoryPage{

min-height:100vh;
padding:70px;

background:
linear-gradient(
135deg,
#000,
#220010,
#580028
);

overflow:hidden;
color:white;

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



.memoryHeader{

text-align:center;
margin-bottom:80px;

}



.topLine{

color:#ff83ca;
letter-spacing:3px;
font-size:18px;

margin-bottom:20px;

}



.memoryHeader h1{

font-size:64px;

color:#ffafd8;

text-shadow:

0 0 25px hotpink,
0 0 60px deeppink;

margin-bottom:30px;

}



.subText{

font-size:28px;
line-height:1.7;

color:#ffd3ea;

}



.photoTrack{

display:flex;

gap:25px;

overflow:hidden;

animation:
slide 40s linear infinite;

margin-top:70px;

}



.photoCard{

min-width:300px;

height:450px;

border-radius:35px;

overflow:hidden;

box-shadow:
0 0 35px rgba(255,20,147,.55);

}



.photoCard img{

width:100%;
height:100%;
object-fit:cover;

}



@keyframes slide{

0%{

transform:translateX(0)

}

100%{

transform:
translateX(-50%)

}

}



.extraSections{

display:flex;

justify-content:center;

flex-wrap:wrap;

gap:35px;

margin-top:90px;

padding-bottom:100px;

}



.miniCard{

width:260px;

padding:28px;

border-radius:30px;

background:
rgba(255,105,180,.08);

border:
1px solid rgba(255,105,180,.25);

box-shadow:
0 0 30px rgba(255,20,147,.25);

color:#ffd4ea;

}



.miniCard h3{

margin-bottom:20px;

color:#ff8bce;

}



.miniCard p{

line-height:1.9;

}



.musicSection{

margin-top:80px;

text-align:center;

padding:50px;

border-radius:40px;

background:
rgba(255,255,255,.04);

box-shadow:
0 0 40px rgba(255,20,147,.3);

}



.musicSection h2{

font-size:50px;

color:#ff9ed7;

text-shadow:
0 0 25px hotpink;

}



.nowPlaying{

font-size:22px;

margin-top:15px;

color:#ffd8eb;

}



.nowPlaying span{

color:#ff7bc8;
font-weight:bold;

}



.songGrid{

display:flex;

justify-content:center;

gap:30px;

margin-top:45px;

}



.songCard{

width:290px;

padding:35px;

cursor:pointer;

border-radius:30px;

background:
rgba(255,105,180,.08);

transition:.4s;

box-shadow:
0 0 25px rgba(255,20,147,.2);

}



.songCard:hover{

transform:translateY(-10px);

box-shadow:
0 0 40px hotpink;

}



.songCard h3{

font-size:35px;

color:#ff91d2;

}



.songCard p{

margin-top:10px;

line-height:1.7;

}



.playCircle{

margin:auto;
margin-top:25px;

width:70px;
height:70px;

display:flex;

justify-content:center;
align-items:center;

border-radius:50%;

font-size:30px;

background:#ff5eb9;

}



.spotifyBtn,
.nextBtn{

margin-top:40px;

padding:18px 40px;

border:none;

border-radius:999px;

background:#ff6dc2;

cursor:pointer;

font-weight:700;

margin-left:15px;

box-shadow:
0 0 25px hotpink;

}

`}</style>

</div>

)

}

export default FloatingPhotos
