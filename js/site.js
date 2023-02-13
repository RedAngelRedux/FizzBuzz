// CONTROLLER CONCERN
function getValues() {

    // Reset alert & results table to invisible
    document.getElementById("alert").classList.add("invisible");
    document.getElementById("tableFizzBuzz").classList.add("invisible");

    // obtain user values
    let fizzNum = document.getElementById("fizzNum").value;
    let buzzNum = document.getElementById("buzzNum").value;
    let startRange = document.getElementById("startRange").value;
    let endRange = document.getElementById("endRange").value;


    // validate input
    fizzNum = parseInt(fizzNum);
    buzzNum = parseInt(buzzNum);
    startRange = parseInt(startRange);
    endRange = parseInt(endRange);

    let errorMsg = "";

    if(!Number.isInteger(fizzNum)) {
        errorMsg = `${errorMsg} The value you entered for Fizz is not a valid integer<br>`
    }
    if(!Number.isInteger(buzzNum)) {
        errorMsg = `${errorMsg} The value you entered for buzz is not a valid integer<br>`
    }    
    if(!Number.isInteger(startRange)) {
        errorMsg = `${errorMsg} The value you entered for start of range is not a valid integer<br>`
    }    
    if(!Number.isInteger(endRange)) {
        errorMsg = `${errorMsg} The value you entered for end of range is not a valid integer<br>`
    }
    if( errorMsg == "" && (startRange <= endRange) ) {

        let results = [];

        results = generateResults(fizzNum,buzzNum,startRange,endRange);

        displayResults(results);

    } else {

        // display error alert
        document.getElementById("errorMsg").innerHTML = errorMsg;
        document.getElementById("alert").classList.remove("invisible");

    }

}

// LOGIC CONCERN
function generateResults(fizz, buzz, start, end) {

    let results = []; 

    // loop through range
    let strFizzBuzz = "";
    for (let num = start; num <= end; num++) {
        // build array with each index containing the number, fizz, buzz, or fizzbuzz
        strFizzBuzz = "";
        strFizzBuzz = (num % fizz == 0) ? "Fizz" : "" ;
        strFizzBuzz = (num % buzz == 0) ? `${strFizzBuzz}Buzz` : strFizzBuzz;
        if( strFizzBuzz == "" ) { strFizzBuzz = num.toString();}
        results.push(strFizzBuzz);
    }

    // return array
    return results;

}

// UI CONCERN
function displayResults(results) {

    let htmlRows = "";
    let htmlColumns = 1;
    let no = "";
    let yes = ' class="fizzbuzz'

    // loop through array, creating html table rows and starting a new row after every 5 columns
    for (let index = 0; index < results.length; index++) {
        
        if( htmlColumns == 1 ) {
            // start a new html row
            htmlRows = `${htmlRows}<tr>`;
        }

        if ( isNaN(results[index]) == true) {
            htmlRows = `${htmlRows}<td class="fizzbuzz">`;
        } else {
            htmlRows = `${htmlRows}<td>`;
        }

        htmlRows = `${htmlRows}${results[index]}</td>`;
        
        if( htmlColumns == 5 ) {
            htmlRows = `${htmlRows}</tr>`;
            htmlColumns = 1;
        } else {
            htmlColumns++;
        }
    }

    // inject results into document
    document.getElementById("tbodyFizzBuzz").innerHTML = htmlRows;
    document.getElementById("tableFizzBuzz").classList.remove("invisible");

}