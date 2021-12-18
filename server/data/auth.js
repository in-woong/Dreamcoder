let users = [
  {
    id: "1",
    username: "ellie",
    password: "$2b$10$4HRXP76rkUqDOY9/bUa0duaeI8BebbuhV.BSuO00Rn3ONAcXi6UD.",
    name: "Ellie",
    email: "ellie@gmail.com",
    url: "https://widgetwhats.com/app/uploads/2019//11/free-profile-photo-whatsapp-1.png",
  },
];

export function findByUsername(username) {
  return users.find((user) => user.username == username);
}

export function createUser(user) {
  const newUser = { id: Date.now().toString(), ...user };
  users.push(user);
  return newUser
}
