enum UserRole {
  Admin = "ADMIN",
  Developer = "DEVELOPER",
  Guest = "GUEST"
}
const activeSessions = new Map<number, UserRole>();
activeSessions.set(101, UserRole.Admin);
activeSessions.set(102, UserRole.Developer);
activeSessions.set(103, UserRole.Guest);


if (activeSessions.has(102)) {
  const role = activeSessions.get(102);
  console.log(role);
}



