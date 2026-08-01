// 2. Complete the generic function signature
function createRecord(input) {
    return {
        id: Math.floor(Math.random() * 1000),
        ...input
    };
}
const newUser = createRecord({ name: "Tarun Chandra Das", email: "tarunchandradas91@gmail.com" });
console.log(newUser);
export {};
