let student = {
    name: '',
    lastName: '',
    tabel: []
};

function addSubject() {
    const subjectsDiv = document.getElementById('subjects');

    const newSubjectInput = document.createElement('div');
    newSubjectInput.classList.add('subject-input');

    newSubjectInput.innerHTML = `
        <label for="subject">Название предмета:</label>
        <input type="text" class="subject" placeholder="Введите название предмета" required>
        
        <label for="grade">Оценка:</label>
        <input type="number" class="grade" placeholder="Введите оценку" min="1" max="10" required>
    `;

    subjectsDiv.appendChild(newSubjectInput);
}

document.getElementById('student-form').addEventListener('submit', function(event) {
    event.preventDefault();

    student.name = document.getElementById('name').value;
    student.lastName = document.getElementById('lastName').value;

    const subjectInputs = document.querySelectorAll('.subject');
    const gradeInputs = document.querySelectorAll('.grade');

    student.tabel = [];
    for (let i = 0; i < subjectInputs.length; i++) {
        const subject = subjectInputs[i].value;
        const grade = parseInt(gradeInputs[i].value);

        if (subject && !isNaN(grade)) {
            student.tabel.push({ subject, grade });
        }
    }

    analyzeStudent(student);
});

function analyzeStudent(student) {
    let badGradesCount = 0;
    let totalGrades = 0;
    let subjectsCount = student.tabel.length;

    student.tabel.forEach(item => {
        if (item.grade < 4) badGradesCount++;
        totalGrades += item.grade;
    });

    let resultMessage = `Студент: ${student.name} ${student.lastName}\n`;

    if (badGradesCount > 0) {
        resultMessage += `Количество плохих оценок: ${badGradesCount}\n`;
    } else {
        resultMessage += 'Студент переведен на следующий курс.\n';
    }

    if (subjectsCount > 0) {
        const avgGrade = totalGrades / subjectsCount;
        resultMessage += `Средний балл: ${avgGrade.toFixed(2)}\n`;

        if (avgGrade > 7) {
            resultMessage += 'Студенту назначена стипендия.\n';
        }
    } else {
        resultMessage += 'Нет данных для расчета.\n';
    }


    document.getElementById('result').innerText = resultMessage;
}
