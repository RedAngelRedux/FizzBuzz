// Code Along with Bobby - His Default Solution

// get values from the user (fizzValue & buzzValue)
function getValues() {

    // Reset alert & results table to invisible
    // document.getElementById("alert").classList.add("invisible");
    // document.getElementById("tableFizzBuzz").classList.add("invisible");

    // get the user values from the DOM
    let fizzValue = document.getElementById("fizzNum").value;
    let buzzValue = document.getElementById("buzzNum").value;
    
    // validate input

        // parse are numbers
        fizzValue = parseInt(fizzValue);
        buzzValue= parseInt(buzzValue);

        // check are integers
        if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

            // call fizzBuzz
            let fbArray = fizzBuzz(fizzValue, buzzValue);
        
            // call displayData
            displayData(fbArray);

        } else {
            alert("You must enter an integer")
        }
    
}

function fizzBuzz(fizzValue, buzzValue) {

    // initialize returnArray
    let returnArray = [];

    // loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        if( i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push("FizzBuzz");
        } else if( i % fizzValue == 0 ) {
            returnArray.push("Fizz");
        } else if( i % buzzValue == 0 ) {
            returnArray.push("Buzz");
        } else {
            returnArray.push(i);
        }

        returnArray.push(i);
    }

    return returnArray;
}

function displayData(fbArray) {

    // inject results into document
    // document.getElementById("tbodyFizzBuzz").innerHTML = htmlRows;
    document.getElementById("tableFizzBuzz").classList.remove("invisible");    

    // get handle to 
    let tableBody = document.getElementById("tbodyFizzBuzz");

    // get the template
    let templateRow = document.getElementById("fbTemplate");

    // clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+=5) {

        let tableRow = document.importNode(templateRow.content, true);

        // grab just the td's and put into an array
        let rowCols = tableRow.querySelectorAll("td"); 
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }

}

