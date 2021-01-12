class student{
    constructor(sname,sroll,total,course)
    {
        this.sname=sname;
        this.sroll=sroll;
        this.total=total;
        this.course=course;
    }
    getdata = () =>
    {
        console.log("student roll no"+this.sname);
        console.log("student total is"+this.total);
        console.log("student course is"+this.course);
    }
}
var obj=new student("jofin",10,300,"mca")
var obj1=new student("aju",11,200,"bca");
var obj2=new student("raju",12,250,"mca");
var ar=[];
ar.push(obj);
ar.push(obj1);
ar.push(obj2);
var stud=ar.filter(obj=>obj.total>135);
//console.log(stud);
for(st of stud){
    console.log(st.sname)
}
var course=ar.filter(obj=>obj.course=="mca")
for(st of course){
    console.log(st.sname)
}
var cou=ar.filter(obj=>obj.course=="mca")
//console.log(cou);
var c=cou.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log(c);
var high=ar.map(obj=>obj.sroll).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(high)