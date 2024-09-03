let num: number = 10
let str: string = "Jhon"

const arrNum: number[] = [1, 2, 3, 4, 5]

interface IUser {
    name: string;
    email: string;
    age: number
    // age?: number  <optional>
}

// type User = {
//     name: "John",
//     email: "john@gmail.com",
//     age: 20
// }

const user1: IUser ={
    name: "John",
    email: "john@gmail.com",
    age: 20
}

// jika type datanya void tidak mereturn apapun

function sum(a: number, b: number): /*void */ number {
    return a + b
}

sum(10, 5)

// jika type datanya void tidak mereturn apapun