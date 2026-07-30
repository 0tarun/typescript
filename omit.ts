// basic way solve
// -------------------------

type User = {
    id: number;
    name: string;
    email: string;
}

const users: User[] = []
let lastId: number = 0;

function addUser(name: string, email: string): User {
    const user: User = {
        id: ++lastId,
        name,
        email
    }

    users.push(user)
    return user


}

addUser("Tarun", "tarundas112002@gmail.com")
addUser("Farhan", "farhan1900@gmail.com")
console.log(users)


//using Omit paramiter

type User = {
    id: number;
    name: string;
    email: string
}

const user1: User[] = []
let lastId: number = 0;


function addUser(user: Omit<User, 'id'>): User {
    const newUser: User = {
        ...user,
        id: ++lastId
    }
    user1.push(newUser)
    return newUser
}

addUser({ name: "alice", email: "alice@gmail.com" })
addUser({ name: "bob", email: "bob@gmail.com" })
console.log(user1)


// solve without Omit just give a ? mark on missing variable

type User = {
    id?: number;
    name: string;
    email: string
}

const user1: User[] = []
let lastId: number = 0;


function addUser(user: User): User {
    const newUser: User = {
        ...user,
        id: ++lastId
    }
    user1.push(newUser)
    return newUser
}

addUser({ name: "alice", email: "alice@gmail.com" })
addUser({ name: "bob", email: "bob@gmail.com" })
console.log(user1)