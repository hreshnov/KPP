function getData() {
    let name = prompt('What is your name?');

    if (name === '') {
        alert('Please enter a valid name');
        return getData();
    }

    let age = prompt('Age');

    if (age === null || isNaN(age) || age === '') {
        alert('Please enter a valid age number');
        return getData();
    }
    
    if (age < 18) {
        alert(`You are not allowed to visit this website, ${age}!`);
    }
    else if (age >= 18 && age <= 22) {
        let isConfirm = confirm(`Are you sure you want to continue?`);
        if(isConfirm){
            alert(`Welcome, ${name}`)
        }
    }
    else if(age > 22){
        alert(`Welcome, ${name}`)
    }
}
