var data=document.querySelector("#cal1");
function cal(num){
    data.value+=num;
}
 clr=()=> {
     data.value=" ";
 }
 ev = () =>{
     let data1=eval(data.value);
     data.value=data1;

 }