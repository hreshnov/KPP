function createNewUser() {

    const firstName = prompt('Введите имя');
    const lastName = prompt('Введите  фамилию');
    const birthday = prompt('Введите вашу дату рождения');

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        getLogin() {
            return this.firstName.charAt(0).toLowerCase() + this.lastName.toLowerCase();
        },

        getAge() {
            const birthDateParts = this.birthday.split('.');
            const birthDate = new Date(+birthDateParts[2], birthDateParts[1] - 1, +birthDateParts[0]);
            const diff = Date.now() - birthDate.getTime();
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        getPassword() {
            const birthYear = this.birthday.split('.')[2];
            return this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + birthYear;
        }
    };

    return newUser;
}

const user = createNewUser();
console.log("Логин пользователя:", user.getLogin());
console.log("Возраст пользователя:", user.getAge());
console.log("Пароль пользователя:", user.getPassword());