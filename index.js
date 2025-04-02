// document.getElementById("counter").innerHTML = 10;

let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

console.log(counter);

// Purpose: This function increments the counter and updates the HTML element with the new value.
function incrementFunc() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    }

// Purpose: This function decrements the counter and updates the HTML element with the new value.
// If the counter is less than 0, it resets to 0 and alerts the user.
function decrementFunc() {
    counter-=1;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    if (counter < 0) {
        alert("Counter cannot be negative!");
        counter = 0;
        document.getElementById("counter").innerHTML = counter;
    }
}

// Purpose: This function resets the counter to 0 and updates the HTML element with the new value.
function saveFunc(){
    let countStr = counter + " - ";
    saveEl.textContent += countStr;
    console.log(countStr);
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
}

// Purpose: This function resets the counter to 0 and updates the HTML element with the new value.
// It also clears the previous entries displayed in the saveEl element.
function resetFunc() {
    counter = 0;
    document.getElementById("counter").innerHTML = counter;
    saveEl.textContent = "Previous Entries: ";
    console.log(counter);

}