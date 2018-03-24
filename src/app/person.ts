enum Choose{Wife = 1,Mother = 2}
class Person {
    name :string;
    age:number;
    labels:Array<string>;
    wives:string[];
    contact:[string,number];
    other:any;
    saveMonth:boolean = true;
    constructor(){};
    answer():Choose {
        if(this.saveMonth === false){
            return Choose.Wife;
        }
        else{
            return Choose.Mother;
        } 
    }
    hello():void{
        console.log('hello,I am function')
    }
}
let person = new Person();
person.hello();

let word : string = 'how';
console.log(word,'word')
 let [a,b,c] = [2,6,8];
 console.log(a,b,c,'abc');

 















