const USERS_KEY = "users";

export default {
  getAllUsers() {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    return users;
  },

  addUser(user) {
    const users = this.getAllUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  deleteUser(userId) {
    const users = this.getAllUsers();
    const updatedUsers = users.filter((user) => user.id !== userId);
    localStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
  },
};
