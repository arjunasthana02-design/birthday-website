import { useState } from "react";

function Todo({goBack}){

const [tasks,setTasks]=useState([

{name:"learn driving",progress:0},

{name:"do rock climbing",progress:0},

{name:"find a sponsor",progress:0},

{name:"find a hobby",progress:0}

])

const [newTask,setNewTask]=useState("")

function addTask(){

if(!newTask.trim()) return

setTasks([

...tasks,

{
name:newTask,
progress:0
}

])

setNewTask("")

}

function updateProgress(index,value){

const updated=[...tasks]

updated[index].progress=value

setTasks(updated)

}

function deleteTask(index){

const updated=[...tasks]

updated.splice(index,1)

setTasks(updated)

}

return(

<div className="todoPage">

<button
className="backBtn"
onClick={goBack}
>

← Back

</button>

<h1>

📝 to do list

</h1>

<p className="subtitle">

tiny life missions

</p>

<div className="addTask">

<input
value={newTask}
placeholder="add random task..."
onChange={(e)=>{

setNewTask(e.target.value)

}}
/>

<button onClick={addTask}>

add

</button>

</div>

<div className="taskWrap">

{

tasks.map((task,index)=>(

<div
className="taskCard"
key={index}
>

<h2>{task.name}</h2>

<p>

progress: {task.progress}%

</p>

<input

type="range"

min="0"
max="100"
value={task.progress}

onChange={(e)=>{

updateProgress(
index,
e.target.value
)

}}

className="slider"

/>

<button
className="deleteBtn"
onClick={()=>deleteTask(index)}
>

🗑 delete mission

</button>

</div>

))

}

</div>

<style>{`

.todoPage{

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

margin-bottom:40px;

}

.addTask{

display:flex;

justify-content:center;

gap:20px;

margin-bottom:50px;

}

.addTask input{

width:400px;

padding:18px;

border:none;

border-radius:999px;

background:black;

color:white;

}

.addTask button{

padding:18px 35px;

border:none;

border-radius:999px;

background:#ff71c6;

font-weight:700;

cursor:pointer;

box-shadow:
0 0 25px hotpink;

}

.taskWrap{

max-width:800px;

margin:auto;

display:flex;

flex-direction:column;

gap:30px;

}

.taskCard{

padding:35px;

border-radius:30px;

background:
rgba(255,105,180,.08);

box-shadow:
0 0 35px rgba(255,20,147,.2);

}

.slider{

width:100%;

margin-top:20px;

}

.deleteBtn{

margin-top:25px;

padding:14px 30px;

border:none;

border-radius:999px;

background:#ff4fa8;

color:white;

font-weight:700;

cursor:pointer;

box-shadow:
0 0 20px hotpink;

}

.deleteBtn:hover{

transform:scale(1.05);

}

`}</style>

</div>

)

}

export default Todo