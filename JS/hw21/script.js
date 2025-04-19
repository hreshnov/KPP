function filterCollection(array, keywords, matchAll, ...fields) {

    const keywordArray = keywords.toLowerCase().split(' ');

    return array.filter(item => {
        let matches = matchAll ? keywordArray.every(keyword => checkItem(item, keyword, fields)) : keywordArray.some(keyword => checkItem(item, keyword, fields));
        return matches;
    });
}

function checkItem(item, keyword, fields) {
    return fields.some(field => {
        let value = getNestedValue(item, field);
        if (typeof value === 'string') {
            return value.toLowerCase().includes(keyword);
        }
        if (Array.isArray(value)) {
            return value.some(innerItem => {
                if (typeof innerItem === 'object') {
                    return getNestedValue(innerItem, field.split('.').slice(1).join('.')).toLowerCase().includes(keyword);
                }
                return false;
            });
        }
        return false;
    });
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function applyFilter() {
    const keywords = document.getElementById('keywords').value;
    const matchAll = document.getElementById('filterType').value === 'true';
    const fields = document.getElementById('fields').value.split(',').map(field => field.trim());

    const vehicles = [
        {
            name: "Toyota Corolla",
            description: "A compact car",
            contentType: { name: "Car", description: "Vehicle" },
            locales: [{ name: "en_US", description: "English version" }, { name: "fr_FR", description: "French version" }]
        },
        {
            name: "Honda Civic",
            description: "A sedan car",
            contentType: { name: "Car", description: "Vehicle" },
            locales: [{ name: "en_US", description: "English version" }]
        },
        {
            name: "Ford F-150",
            description: "A pickup truck",
            contentType: { name: "Truck", description: "Vehicle" },
            locales: [{ name: "en_US", description: "English version" }]
        }
    ];

    const result = filterCollection(vehicles, keywords, matchAll, ...fields);

    document.getElementById('result').textContent = JSON.stringify(result, null, 2);
}
