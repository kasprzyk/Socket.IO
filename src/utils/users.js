const users = [];

const addUser = ({ id, username, room }) => {
  username: username.trim().toLowerCase();
  room: room.trim().toLowerCase();
  if (!username || !room) {
    return {
      error: 'Username and room are required',
    };
  }

  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  if (existingUser) {
    return {
      error: 'Username is in use',
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

addUser({
  id: 22,
  username: 'Piotr',
  room: 'Ilawa',
});

addUser({
  id: 23,
  username: 'PiotrPiotr',
  room: 'Ilawa',
});

addUser({
  id: 24,
  username: 'PiotrPiotrPiotr',
  room: 'Ilawa',
});

const user = getUser(24);
const userList = getUsersInRoom(Ilawa);
console.log(userList);
const removedUser = removeUser(22);
console.log(removedUser);
console.log(users);
console.log(user);
