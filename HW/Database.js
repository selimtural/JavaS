class Course{
    constructor(nm,tm,dt,rms){
        this.name=nm;
        this.time=tm;
        this.date=dt;
        this.rooms=rms;
        
    }
    toString(){
        return "Name: " + this.name + "Time " + this.time + "Date " + this.date + "Rooms "+this.rooms;
    }
}
class Student {
    constructor(i, nm, g, cr){
        this.id=i;
        this.name=nm;
        this.gpa=g;
        this.courses=cr;
    }
    toString(){
        return "Id "+ this.id + "Name "+ this.name + "Gpa "+ this.gpa + "Courses "+ this.courses;
    }
}
class Point{
    constructor(x, y){
        this.x=x;
        this.y=y;
    }
    toString(){
        return "X "+ this.x + "Y " + this.y;
    }
}
class Point3D extends Point {
    constructor(x,y,z){
        super(x,y);
        this.z=z;
    }
    toString(){
        return "Point x: " +this.x + "Point Y: " + this.y + "Point z" + this.z;
    }
}
class Distance {
    constructor(km,miles){
        this.km=km;
        this.miles=miles;
    }
    toString(){
        return "km : " + this.km + "miles:" + this.miles;
    }
}
class CW4 extends Menu{
    constructor(){
        super();
        this.course1 = new Course("321","12:30","12.05.2107","161");
        this.student = new Student ("321","Selim","1.67","161");
        this.point= new Point(4,8);
        this.point3d= new Point3D(4,8,10);
        this.distance=new Distance;(6500,2500);
    }
}
