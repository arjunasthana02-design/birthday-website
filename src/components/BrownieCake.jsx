import brownieImg from "../assets/brownie-cake.png"

function BrownieCake({ enterWorld }) {

const target = new Date("June 3, 2026 00:00:00")
const now = new Date()

const diff = target - now

const days = Math.floor(
diff / (1000 * 60 * 60 * 24)
)

const hours = Math.floor(
(diff % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
)

return(

<div className="container">

<div className="countdown">
{days}d {hours}h until her day ✨
</div>


<h1 className="mainText">

You hate birthdays.

<br/>

Very inconvenient for the people
who care about you.

</h1>


<div className="cakeWrap">

<div className="leftDecor">

♡ ✦ ♡

</div>

<img
src={brownieImg}
className="cake"
alt="Brownie Cake"
/>

<div className="rightDecor">

✦ ♡ ✦

</div>

</div>


<h1 className="title">

Brownie Cake

</h1>


<p className="sub">

This day and this brownie are officially yours now ✨

</p>


<p className="line">

No pressure. Just exist for a while.

</p>


<p className="line2">

You don't need to smile for the world.

<br/>

Just know you matter more than you think 🤍

</p>


<button
className="enterBtn"
onClick={()=>{
enterWorld()
}}
>

ENTER NOW ✨

</button>


<style>{`

.container{

min-height:100vh;

padding-top:70px;

text-align:center;

padding-bottom:100px;

}

.countdown{

font-size:26px;

font-weight:700;

color:#ff75bc;

margin-bottom:50px;

text-shadow:
0 0 20px #ff4fa3;
}

.mainText{

font-size:50px;

max-width:900px;

margin:auto;

line-height:1.35;

font-weight:700;

color:#ffaad6;

text-shadow:
0 0 25px #ff4fa3;

margin-bottom:50px;
}

.cake{

width:760px;

max-width:90%;

border-radius:35px;

box-shadow:
0 0 70px rgba(255,0,140,.35);
}

.cakeWrap{

display:flex;

justify-content:center;

align-items:center;

gap:60px;

flex-wrap:wrap;
}

.leftDecor,
.rightDecor{

font-size:60px;

color:#ff75bc;
}

.title{

font-size:80px;

color:#ffaad6;

margin-top:50px;

text-shadow:
0 0 20px #ff4fa3,
0 0 45px #ff4fa3;
}

.sub{

font-size:28px;

font-style:italic;
}

.line,
.line2{

font-size:24px;

margin-top:30px;

line-height:1.7;
}

.enterBtn{

margin-top:50px;

padding:18px 45px;

border:none;

border-radius:999px;

font-size:20px;

font-weight:700;

cursor:pointer;

background:
linear-gradient(
90deg,
#ff4fa3,
#ff8ccc
);

color:white;

box-shadow:
0 0 25px #ff4fa3;
}

.enterBtn:hover{

transform:scale(1.05);

transition:.3s;
}

`}</style>

</div>

)

}

export default BrownieCake