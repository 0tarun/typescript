type Data = {
    id: number;
    name: string;
    email: string;
}

type apiResponse = {
    success: boolean;
    message: string;
    data: Data;
}

const response: apiResponse = {
    success: true,
    message: "User data fetched successfully",
    data: {
        id: 101,
        name: "Tarun Chandra Das",
        email: "tarunchandradas91@gmail.com"
    }
}

console.log(response)