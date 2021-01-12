function bulb(value)
{
if(value==0){
    var pic="img/off.png";
}else{
    var pic="img/on.png";
}
document.querySelector("#bulb").src=pic;
}
