// const fruits: string[]=["Apple","Banana","Mango","Jackfruit"]
// const number: number[]=[2,3,4,5,3,2]

// function getFirstItem(item: string[] | number[]): string | number{
//     return item[0]
// }

// const firstFruits=getFirstItem(fruits)
// const firstNumber= getFirstItem(number)



const fruits: string[]=["Apple","Banana","Mango","Jackfruit"]
const number: number[]=[2,3,4,5,3,2]

// function getFirstItem(item: string[] | number[]): string | number{
//     return item[0]
// }
function getFirstItem<T>(item: T[]): T{
    return item[0]
}


const firstFruits=getFirstItem(fruits)
const firstNumber= getFirstItem(number)
console.log(firstFruits.toLowerCase())
console.log(firstNumber.toFixed(4))