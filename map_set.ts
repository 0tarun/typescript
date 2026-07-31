
const orders = new Map<string, number>()

function addFruits(fruits: string) {
    const quantity = (orders.get(fruits) ?? 0) + 1

    orders.set(fruits, quantity)
}

addFruits("Malta")
addFruits("Malta")
addFruits("Mango")
addFruits("Mango")
addFruits("Pine apple")
addFruits("Mango")
addFruits("Jackfruit")
addFruits("Mango")
addFruits("Mango")
addFruits("Water melon")
addFruits("Pine apple")
addFruits("Pine apple")

console.log(orders)