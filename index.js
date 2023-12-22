class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

personData = ()=>{

    return this.name , this.age;

}

}

let info = new person("sabika" , 25)
console.log(`Name: ${info.name} , Age: ${info.age}`);


class result1 extends person{
constructor(name , age , marks , grade){
    super(name ,age)
    this.marks = marks;
    this.grade = grade;
}

markSheet = ()=>{
    return this.marks = marks , this.grade = grade;


}

}
let result = new result1("sana" , 20 , 99 ,"A+")
console.log(`Name: ${result.name} , Age: ${result.age} ,marks: ${result.marks},grade: ${result.grade}`);

let result2 = new result1("Ali" , 22 , 80 ,"A")
console.log(`Name: ${result2.name} , Age: ${result2.age} ,marks: ${result2.marks},grade: ${result2.grade}`);