//类型数组
let someObj :string[] =['a','b']
someObj = ['hah'];
console.log(someObj,'someobj')
//泛型
function one<T>(a:T):T{
    return a;
}
let a1 = one<number>(1);
let a2 = one<number[]>([2,3,4])

let a3:<T>(a:T[]) =>T = function(a){
    return a[0]
}









