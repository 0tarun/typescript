// 
var Status;
(function (Status) {
    Status[Status["draft"] = 0] = "draft";
    Status[Status["private"] = 1] = "private";
    Status[Status["public"] = 2] = "public";
})(Status || (Status = {}));
const article1 = {
    title: "My first article",
    content: "This is the content of my first article.",
    status: Status.draft
};
const article2 = {
    title: "My second article",
    content: "This is the content of my second article.",
    status: Status.private
};
const article3 = {
    title: "My third article",
    content: "This is the content of my third article.",
    status: Status.public
};
console.log(article1);
console.log(article2);
console.log(article3);
export {};
