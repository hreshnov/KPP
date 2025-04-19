const drawBtn = document.getElementById('drawBtn');
const circleDiameterInput = document.getElementById('circleDiameter');
const container = document.getElementById('container');

drawBtn.addEventListener('click', function() {
    const diameter = parseInt(circleDiameterInput.value);

    if (isNaN(diameter) || diameter <= 0) {
        alert('Пожалуйста, введите корректный диаметр!');
        return;
    }

    container.style.display = 'none';

    const circleContainer = document.createElement('div');
    circleContainer.id = 'circleContainer';
    document.body.appendChild(circleContainer);

    for (let i = 0; i < 100; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = getRandomColor();
        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;

        circle.addEventListener('click', function() {
            removeCircle(circle);
        });

        circleContainer.appendChild(circle);
    }
});

function removeCircle(circle) {
    const container = document.getElementById('circleContainer');
    container.removeChild(circle);

    const circles = Array.from(container.getElementsByClassName('circle'));
    circles.forEach((circle, index) => {
        container.appendChild(circle);
    });
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
