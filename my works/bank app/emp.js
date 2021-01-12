class employe
{
    constructor(eid,ename,desigination,salary){
        this.eid=eid
        this.ename=ename
        this.desigination=desigination
        this.salary=salary
    }
    getemp = () =>
    {
        console.log("employee name"+this.ename)
        console.log("designation is"+this.desigination)
    }
}
var obj=new employe(1001,"jo","developer",30000)
var obj1=new employe(1002,"amal","teter",20000)
var obj2=new employe(1003,"raju","qa",25000)
var arr=[]
arr.push(obj)
arr.push(obj1)
arr.push(obj2)
var high=arr.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(high)
var high=arr.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2)
console.log(high)
var srt=arr.map(obj=>obj.salary).sort((obj1,obj2)=>obj2-obj1)
console.log(srt)