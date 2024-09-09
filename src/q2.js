/*
    Task 1: 
    - Declare an array that are going to be used to store patient's name.

    Task 2: 
    - Add code to add patient's name into the array declared in task 1.

    Task 3: 
    - Implement listPatient() function to print all patient's name stored in the array
*/


// Task 1: Add code here
const Patients = [];
let i = 0;
function addPatient(patientName){
    // Task 2: Add code here
    Patients[i] = patientName;
    i++;
}

function listPatient(){
    for (let j = 0; j < i; j++){
console.log(Patients[j] );
    }
}

// Task 3: Add code here


addPatient("John");
addPatient("Mary");
addPatient("Mark");

listPatient(); // This should list ["John", "Mary", "Mark"]