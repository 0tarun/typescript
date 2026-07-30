// 


enum Status {
    draft,
    private,
    public
}

type Article = {
    title: string;
    content: string;
    status: Status
}

const article1: Article = {
    title: "My first article",
    content: "This is the content of my first article.",
    status: Status.draft
}

const article2: Article = {
    title: "My second article",
    content: "This is the content of my second article.",
    status: Status.private
}

const article3: Article = {
    title: "My third article",
    content: "This is the content of my third article.",
    status: Status.public
}


console.log(article1);
console.log(article2);
console.log(article3);


// literal type example

// type Method = "GET" | "POST" | "PUT" | "DELETE";

// const method: Method = "UPDATE"; // Error: Type '"UPDATE"' is not assignable to type 'Method'.
// const method: Method = "DELETE"

// type status = "draft" | "private" | "public";
// type color = "red" | "green" | "blue";
// const Status: status = "draft";