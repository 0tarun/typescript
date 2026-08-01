var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Developer"] = "DEVELOPER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
const activeSessions = new Map();
if (activeSessions.has(102)) {
    const role = activeSessions.get(102);
    console.log(role);
}
activeSessions.set(101, UserRole.Admin);
activeSessions.set(102, UserRole.Developer);
activeSessions.set(103, UserRole.Guest);
export {};
