
function checkProjectDeadline() {

    const teamSpeedInput = document.getElementById('teamSpeed').value;
    const backlogInput = document.getElementById('backlog').value;
    const deadlineInput = document.getElementById('deadline').value;

    const teamSpeed = teamSpeedInput.split(',').map(Number);
    const backlog = backlogInput.split(',').map(Number);


    const totalTeamSpeed = teamSpeed.reduce((sum, speed) => sum + speed, 0);


    const totalBacklog = backlog.reduce((sum, points) => sum + points, 0);

    const totalDaysRequired = totalBacklog / totalTeamSpeed;

    const currentDate = new Date();
    const deadlineDate = new Date(deadlineInput);

    const timeLeftInMilliseconds = deadlineDate - currentDate;
    const timeLeftInDays = timeLeftInMilliseconds / (1000 * 60 * 60 * 24);

    if (timeLeftInDays >= totalDaysRequired) {
        const daysBeforeDeadline = Math.floor(timeLeftInDays - totalDaysRequired);
        document.getElementById('result').textContent = `Все задачи будут успешно выполнены 
        за ${daysBeforeDeadline} дней до наступления дедлайна!`;
    } else {

        const additionalHoursRequired = Math.ceil((totalDaysRequired - timeLeftInDays) * 8);
        document.getElementById('result').textContent = `Команде разработчиков придется потратить
         дополнительно ${additionalHoursRequired} часов после дедлайна, чтобы выполнить все задачи.`;
    }
}
