let extendDemo = function () {
    class Dad {
        protected surname: string = 'xiaoming';
        private private_money;
        constructor() { }
    }
    class Son extends Dad {
        surname: string;
        constructor() {
            super();
            console.log(this.surname, 'surname');
        }
    }
    let son = new Son();











    
}
export default extendDemo;
