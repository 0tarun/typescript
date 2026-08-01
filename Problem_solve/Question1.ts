interface User {
  id: number;
  name: string;
  email: string;
}


type UserInput = Omit<User, 'id'>;

// 2. Complete the generic function signature
function createRecord<T>(input: UserInput): User {
  return {
    id: Math.floor(Math.random() * 1000),
    ...input
  };
}

  const newUser = createRecord({ name: "Tarun Chandra Das", email: "tarunchandradas91@gmail.com" })
  console.log(newUser)

