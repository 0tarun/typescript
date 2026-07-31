enum Status{
    pending,
    shipped,
    delivered
}

type User = {
    id: number;
    name: string;
    email: string;
}

type Product = {
    id: number;
    name: string;
    price: number;
}

type Order = {
    id: number;
    userId: number;
    total: number;
    status: Status
}

// api/users   api/products  api/orders  //

// async function getUser(): Promise<User[]>{
//     const Data = await fetch('/app/users')
//     return Data.json()
// }

// async function getProduct(): Promise<Product[]>{
//     const Data = await fetch('/api/products')
//     return Data.json()
// }

// async function getOrder(): Promise<Order[]>{
//     const Data = await fetch('/api/orders')
//     return Data.json()
// }

// const users = await getUser()
// const products = await getOrder()
// const orders = await getOrder()


async function get<T>(apiEndpoint: string): Promise<T>{
    const Data= await fetch(apiEndpoint)
    return Data.json()
}

const users = await get<User[]>('/api/users')
const orders = await get<Order[]>('api/orders')
const products = await get<Product[]>('api/products')


