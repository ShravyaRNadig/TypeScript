// class HelloWorld {
//     constructor(message){
//         console.log(message)
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// const helloWorld = new HelloWorld('Welcome to typescript');
// console.log(helloWorld)
// genatic function
// function LoggerAndReturn<T>(thing:T) : T{
//     return thing;
// }
// // 1st way
// const message: string = LoggerAndReturn("Hello World");
// const message2: number = LoggerAndReturn(2)
// // Another way
// // const message: string = LoggerAndReturn<string>("Hello World")
// console.log(message)
// console.log(message2)
// genatic array
// function getArray<T>(items:T[]) : T[]{
//     return new Array<T>().concat(items);
// }
// // let myNumArr = getArray<number>([1,2,3]);
// // let myStrArr = getArray<string>(['Hello','World']);
// let myNumArr = getArray([1,2,3]);
// let myStrArr = getArray(['Hello','World']);
// console.log(myNumArr);
// console.log(myStrArr);
// genatic multiple types
// function getInfo<T, U>(id: T, name: U): void {
//     console.log(typeof id + "," + typeof name,'getInfo',getInfo)
// }
// getInfo<number,string>(1,'Jane');
// // genatic with non genatic type
// function displayType<T>(id: T, name:string): void{
//     console.log(typeof id + "," + typeof name,'displayType',displayType)
// }
// displayType<number>(2,'Malik')
// genatic Constraints
// class Customer {
//     firstName: string;
//     lastName: string;
//     constructor(fname:string,lname:string){
//         this.firstName = fname;
//         this.lastName = lname;
//     }
// }
// function customerLogger<T extends Customer>(customer: T): void{ // cant accept string/number can accept only customer type
//     console.log(`${customer.firstName} ${customer.lastName}`);
// }
// let customer = new Customer('Jane','Doe');
// customerLogger(customer);
// customerLogger('JaneDoe'); // Argument of type 'string' is not assignable to parameter of type 'Customer'.
// genatic interface to describe obj properties
// interface Pair<T, U> {
//     first: T;
//     last: U;
// }
// let p: Pair<string, number> = { first: '10K', last: 1000 };
// console.log(p);
// let person: Pair<string, string> = { first: 'Jane', last: 'Malik' };
// console.log(person);
// 2nd example
// interface Command<T,R>{
//     id: T;
//     run(): R;
// }
// let c: Command<string,number> ={
//     // id: Math.random().toString(36),
//     id: "sdfg2345",
//     run() {
//         return 3;
//     }
// };
// console.log(c.id);
// console.log(c.run());
// genatic create interface to describefunction types
// interface ElementChecker {
//     <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
// }
// function checkElemntAt<T>(
//     items: T[],
//     toBeChecked: T,
//     atIndex: number
// ):boolean{
//     return items[atIndex] == toBeChecked;
// }
// let checker: ElementChecker = checkElemntAt;
// let items = [1,3,5,7];
// let b:boolean = checker<number>(items,5,1);
// console.log(b);
// let b2:boolean = checker<number>(items,5,2);
// console.log(b2);
// 2nd example Interface decribing indexables
// interface States<R> {
//     [state: string]: R;
// }
// let s: States<boolean> = {enabled: true,maximized:false};
// console.log(s);
// console.log(s['maximized']);
// genatic classes and interface
// class GenericNumber<T> {
//     zeroValue: T;
//     add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     return x + y;
// };
// interface Collection<T> {
//     add(t: T): void;
//     remove(t: T): void;
//     asArray(): T[];
// }
// class List<T> implements Collection<T> {
//     private data:T[]=[];
//     add(t:T):void{
// this.data.push(t);
//     }
//     remove(t: T): void {
//         let index =  this.data.indexOf(t);
//         if(index >-1){
//             this.data.slice(index,1);
//         }
//     }
//     asArray(): T[] {
//         return this.data
//     }
// }
// let numbers: Collection<number> = new List();
// numbers.add(11);
// numbers.add(12);
// numbers.add(13);
// numbers.remove(12);
// let numArray = numbers.asArray();
// console.log(numArray);
// Method decorator
function log(target, key, descriptor) {
    console.log("".concat(key, " was called"));
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // using the @log decorator
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
