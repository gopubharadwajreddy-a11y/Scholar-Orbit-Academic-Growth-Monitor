/* STACK */

class Stack{
constructor(){
this.items=[];
}

push(x){
this.items.push(x);
}

pop(){
return this.items.pop();
}
}

let assignmentStack=new Stack();

assignmentStack.push("DS Assignment");
assignmentStack.push("Java Project");
assignmentStack.push("OS Case Study");


/* QUEUE */

class Queue{
constructor(){
this.items=[];
}

enqueue(x){
this.items.push(x);
}

dequeue(){
return this.items.shift();
}
}

let attendanceQueue=new Queue();

attendanceQueue.enqueue("DS 90%");
attendanceQueue.enqueue("Math 82%");
attendanceQueue.enqueue("OS 78%");


/* ARRAY */

let subjects=[
"Data Structures",
"Mathematics",
"Operating Systems",
"Java Programming"
];


/* LINEAR SEARCH */

function linearSearch(arr,key){

for(let i=0;i<arr.length;i++){

if(arr[i]==key){
return i;
}

}

return -1;

}


/* BUBBLE SORT */

let scores=[75,80,77];

function bubbleSort(arr){

for(let i=0;i<arr.length;i++){

for(let j=0;j<arr.length-i-1;j++){

if(arr[j]>arr[j+1]){

let temp=arr[j];
arr[j]=arr[j+1];
arr[j+1]=temp;

}

}

}

return arr;

}


/* LOGIN */

function login(){

if(email.value==""||password.value==""){
alert("Enter details");
return;
}

loginPage.style.display="none";
dashboardPage.style.display="block";

startCounters();
loadCharts();

}


/* LOGOUT */

function logout(){
location.reload();
}


/* NAVIGATION */

function showSection(e,id){

document.querySelectorAll(".section").forEach(s=>{
s.style.display="none";
});

document.getElementById(id).style.display="block";

document.querySelectorAll(".sidebar li").forEach(li=>{
li.classList.remove("active");
});

e.target.classList.add("active");

}


/* COUNTER */

function startCounters(){

document.querySelectorAll(".counter").forEach(c=>{

let target=+c.dataset.target;

let count=0;

let step=setInterval(()=>{

count++;
c.innerText=count;

if(count>=target) clearInterval(step);

},20);

});

}


/* CHARTS */

let donutChart=null;
let lineChart=null;

function loadCharts(){

if(!donutChart){

donutChart=new Chart(document.getElementById("donut"),{

type:"doughnut",

data:{
labels:["Completed","Progress","Pending"],
datasets:[{
data:[32,14,54],
backgroundColor:["#22c55e","#f59e0b","#e5e7eb"]
}]
}

});

}

if(!lineChart){

lineChart=new Chart(document.getElementById("line"),{

type:"line",

data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
data:[60,65,70,72,78,85],
borderColor:"#3b82f6",
fill:false
}]
}

});

}

}


/* DARK MODE */

function toggleTheme(){
document.body.classList.toggle("dark");
}