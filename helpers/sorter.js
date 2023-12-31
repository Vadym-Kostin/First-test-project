function sortBySalary(users) {
    return users.sort((user1, user2) => {
        if (user1.salary !== user2.salary) {
            return user1.salary - user2.salary;
        } else {
            return user1.id - user2.id;
        }
    });
}

export default sortBySalary;