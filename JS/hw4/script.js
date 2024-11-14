function createNewUser() {
    const firstName = prompt('Введите  имя');
    const lastName = prompt('Введите  фамилию');

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        }
    };

    return newUser;
}


const user = createNewUser();
console.log(user.getLogin());