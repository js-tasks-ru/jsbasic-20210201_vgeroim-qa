function showSalary(users, age) {
  let sortUsers = users.filter(user => user.age <= age);
  
  let usersNameSalary = sortUsers.map((user, index) => {
      if (index === sortUsers.length - 1) {
        return `${user.name}, ${user.balance}`;
      } else {
        return `${user.name}, ${user.balance}\n`
      }
  });
  
  return usersNameSalary.join('');
}
