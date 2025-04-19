function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        const arrCopy = [];
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    const objCopy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]);
        }
    }

    return objCopy;
}

function cloneObject() {
    const input = document.getElementById('inputObject').value;
    
    try {
        const parsedObject = JSON.parse(input);

        const clonedObject = deepClone(parsedObject);

        document.getElementById('result').textContent = JSON.stringify(clonedObject, null, 2);
    } catch (error) {

        document.getElementById('result').textContent = 'Ошибка: Неверный формат JSON';
    }
}
