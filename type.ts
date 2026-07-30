// const user: {
//     id: number;
//     name: string
// } = {
//     id: 10,
//     name: "Rudra Kumar Das"

// }
// user.id= 20;



type User = {
    id: number;
    name: string;
}

const person: User = {
    id: 10,
    name: "Tarun Chandra Das"
}

const person1: User = {
    id: 39,
    name: "Farhan Khan"
}


//if i use interface instead of type then it will work same as type but the difference is that we can extend the interface but we can't extend the type.
interface User1 {
    id: number;
    name: string;
}

const person2: User1= {
    id:10,
    name:"Hasib Adnan"

}