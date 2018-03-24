interface pointer2d{
    x:number;
    y:number;
}
function somefunc1({x ,y }:pointer2d){
    console.log(x,y,'xy')
}

interface Db{
    host:string;
    port:number;
    port2?:number;
}
class MySQL implements Db{
    host:string;
    port:number;
    constructor(a,b,c){
        console.log(a,b,c,this.host);
    }
    showHost():string{
        return this.host;
    }
}
let mysql = new MySQL(1,2,3);
mysql.host = 'newhost'
console.log(mysql.showHost())
mysql.host = 'news'




//somefunc1({x:5,y:9});






