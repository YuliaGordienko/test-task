let age: object = {}
let id: number | string | boolean
const arrial: readonly number[] = [1, 2, 3] //the same, только чтение
const array: Array<number> = [2, 4, 5] // the same
const colors: [number, number, string] = [1,2,"tyu"] //tabl для описания массивов

type ID = number | string // type для переиспользования, описывает примитивы
const userId: ID = 6;
const ownerId: ID = "qwe"

type ReqStatus = "sucsess" | "error"
const answer: ReqStatus = "error" //конструкция юнион для определённых значений

interface Plagin {       //описываем обЪект
    selector?: string;
    id: number;
  readonly draggable: boolean;
}

const obj: Plagin = {
    selector: "string",
    id: 1,
   draggable: true
}
interface Employes {
    [key: string]: number; //объект произвольной длины
}
const employees: Employes = {
    a: 5,
    b: 2,
    c: 7
}
interface View { 
    color: string
}
interface Person extends View {  //наследование интерфейсов
    rase: string
}
const yulai: Person = {
    color: "white",
    rase: "ukr"
}

enum PizzaSize {
    Small = "s",
    Medium = "m",
    Large = "l"
}

type Foo = (a: number, b: number) => number;
interface IFoo {
   ( a: number,b:number): number
}
const addFoo: Foo = (a, b) => {
    return a+b
}
const addF: IFoo = (a, b) => {
    return a+b
}
interface IDish{                 //Interface обЪекта с методами
    id: string,
    ingridients: string[],
    timeToPrep: number,
    show(): void,
    howManyIngr(param: string[]): void
}
const dish: IDish = {
    id: "qwerty",
    ingridients: ["cheese", "becon", "tomato"],
    timeToPrep: 40,
    show () {
       console.log(id);
        
    },
    howManyIngr (...ingridients) {
        console.log(ingridients);
    }

}
const reverse = <T>(array: T[]) => {    //generic если не знаешь тип данных, что прилетит. Массив строк, чисел, объектов
    return [...array].reverse()
}
const isEqual = <T, Y>(obj1: T, obj2: Y) => {  //generic если аргументов больше одного и у них разные типы
    return Object.is(obj1,obj2)
}
const foo = <N, A>(mult: N, ...rest: A[]) => {} //generic с двумя аргументами, первый простой тип, второй массив


interface ILength {
length: number
}
const countLength = <T extends ILength>(arg: T) => { //generic extends - расширяет тип. Пример показывает, что в функцию можно передать только тот аргумент, у которого есть свойство length
    return arg.length
}
interface IPerson {
    firstName: string,
    lastName: string 
}
const Person = <P extends IPerson>(person: P) => {  //generic, функция которая принимает объект с обязательными двумя свойствами firstName lastName
    return {
        ...person,
        fullName: `${person.firstName} ${person.lastName}` 
    }
}

Person({ firstName: "yulai", lastName: "Gordi", age: 33 })

interface ITabs <T>{
    id: string,
    name: string,
    content: T
}
const tab: ITabs<number[]> = {
    id: "12",
    name: "string",
    content: [1,2,3]
}

const tab2: ITabs<string> = {
    id: "12",
    name: "string",
    content: "erte"
}