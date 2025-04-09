const statusText = document.getElementById("status-text");
const infoText = document.getElementById("info-text");
const buttons = document.querySelectorAll(".circle-btn");
const btnGo = document.getElementById("btn-go");

class Elevator {
  constructor(status) {
    this.currentFloor = 1;
    this.status = status;
    this.targetFloor = null;
    this.isMoving = false;
    this.input = "";
  }
}

const elevator = new Elevator(statusText);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Esteteään kerroksen valitseminen, jos hissi liikkuu
    if (elevator.isMoving) {
      infoText.textContent = "Elevator is moving. Please wait until it stops.";
      return;
    }

    const value = button.innerText.trim();

    // Jos napin arvo on numero (0-9)
    if (/\d/.test(value)) {
      elevator.input += value;
      elevator.targetFloor = parseInt(elevator.input, 10);
      statusText.textContent = elevator.input;
      btnGo.style.backgroundColor = "";
      updateStatus();

      // Jos painetaan C
    } else if (value === "C") {
      elevator.input = "";
      elevator.targetFloor = null;
      elevator.isMoving = false;
      updateStatus();

      // GO-painike
    } else if (value === "GO") {
      // Tarkistetaan, että targetFloor on 1-100 välillä
      const targetFloor = parseInt(elevator.input, 10);
      if (targetFloor < 1 || targetFloor > 100 || isNaN(targetFloor)) {
        btnGo.style.backgroundColor = "red";
        infoText.textContent = "Invalid floor. Please select a floor between 1 and 100.";
        elevator.input = ""; 
        statusText.textContent = ""; 
        return; 
      }

      elevator.targetFloor = targetFloor;
      elevator.isMoving = true;
      updateStatus();
      
    }
  });
});

infoText.textContent = `Elevator is now on floor ${elevator.currentFloor}`;

// Päivittää hissin tilan ja tekstin
function updateStatus() {
  if (elevator.isMoving && elevator.targetFloor !== null) {
    statusText.textContent = `${elevator.targetFloor}`;
    infoText.textContent = `Elevator is moving to floor: ${elevator.targetFloor}`;

    // Hissillä menee 5 sekuntia mennä kerrokseen
    setTimeout(() => {
      elevator.currentFloor = elevator.targetFloor;
      elevator.isMoving = false; 
      infoText.textContent = `Elevator is now in floor: ${elevator.currentFloor}`;
    }, 5000); 
  } else {
    infoText.textContent = `Elevator is now in floor: ${elevator.currentFloor}`;
  }
}

