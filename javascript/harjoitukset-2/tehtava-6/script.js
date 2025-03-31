function getTheDay() {
    const now = new Date();
    const result = document.getElementById("result");

    const currentYear = now.getFullYear();
    const currentHour = now.getHours().toString().padStart(2, "0"); // Add a leading zero
    const currentDay = now.getDay();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth();
    const currentMinutes = now.getMinutes().toString().padStart(2, "0"); 
    const currentSeconds = now.getSeconds().toString().padStart(2, "0"); 

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDayName = weekdays[currentDay];

    result.innerHTML = `${currentDayName}, ${currentDate}.${currentMonth + 1}.${currentYear}, ${currentHour}:${currentMinutes}:${currentSeconds}`;
}

// Call getTheDay every second
setInterval(getTheDay, 1000);