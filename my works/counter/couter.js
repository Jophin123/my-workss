var counter = document.querySelector("#counter");
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
var reset = document.querySelector("#reset");
let countervalue=0;
incre=()=>
{
    countervalue+=1;
    counter.innerHTML=countervalue;
}
decre =()=>
{
    countervalue-=1;
    counter.innerHTML=countervalue;
}
reset =()=>
{
    countervalue=0;
    counter.innerHTML=countervalue;
}