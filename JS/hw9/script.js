const tabs = document.querySelectorAll('.tabs-title');
const contents = document.querySelectorAll('.tabs-content li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        tab.classList.add('active');
        const activeContentId = tab.getAttribute('data-tab');
        document.getElementById(activeContentId).classList.add('active');
    });
});