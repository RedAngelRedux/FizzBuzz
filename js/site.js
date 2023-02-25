// CONTROLLER CONCERN
function getValues() {

    // Reset alert & results table to invisible
    // document.getElementById("alert").classList.add("invisible");
    // document.getElementById("tableFizzBuzz").classList.add("invisible");
    let resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.innerHTML = "";

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
        errorMsg += `${errorMsg} The value you entered for Fizz is not a valid integer<br>`;
    }
    if(!Number.isInteger(buzzNum)) {
        errorMsg = `${errorMsg} The value you entered for buzz is not a valid integer<br>`;
    }    
    if(!Number.isInteger(startRange)) {
        errorMsg = `${errorMsg} The value you entered for start of range is not a valid integer<br>`;
    }    
    if(!Number.isInteger(endRange)) {
        errorMsg = `${errorMsg} The value you entered for end of range is not a valid integer<br>`;
    }
    if(startRange > endRange) {
        errorMsg =  `${errorMsg} The starting number of the range must be less than the ending number`;
    }

    if( errorMsg == "") {

        let results = [];

        results = generateResults(fizzNum,buzzNum,startRange,endRange);

        displayResults(results);

    } else {

        // get handle to results div
        // let resultsDiv = document.getElementById("resultsDiv");

        // get handle to template
        let alertTemplate = document.getElementById("alertTemplate");

        // get handle to p tag via importNode
        let template = document.importNode(alertTemplate.content,true);
        let p = template.querySelector("p");

        // clear p tag
        p.innerHTML = "";

        // add new message
        p.innerHTML = errorMsg;

        // append template to results div
        resultsDiv.appendChild(template);

        // display error alert
        // document.getElementById("errorMsg").innerHTML = errorMsg;
        // document.getElementById("alert").classList.remove("invisible");
        
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
// function displayResults(results) {

//     let htmlRows = "";
//     let htmlColumns = 1;
//     let no = "";
//     let yes = ' class="fizzbuzz'

//     // loop through array, creating html table rows and starting a new row after every 5 columns
//     for (let index = 0; index < results.length; index++) {
        
//         if( htmlColumns == 1 ) {
//             // start a new html row
//             htmlRows = `${htmlRows}<tr>`;
//         }

//         if ( isNaN(results[index]) == true) {
//             htmlRows = `${htmlRows}<td class="fizzbuzz">`;
//         } else {
//             htmlRows = `${htmlRows}<td>`;
//         }

//         htmlRows = `${htmlRows}${results[index]}</td>`;
        
//         if( htmlColumns == 5 ) {
//             htmlRows = `${htmlRows}</tr>`;
//             htmlColumns = 1;
//         } else {
//             htmlColumns++;
//         }
//     }

//     // inject results into document
//     document.getElementById("tbodyFizzBuzz").innerHTML = htmlRows;
//     document.getElementById("tableFizzBuzz").classList.remove("invisible");

// }

// function displayResults(fbArray) {

//     // get the table body class from the DOM
//     let tableBody = document.getElementById("tbodyFizzBuzz");
    
//     // get the template row
//     let templateRow = document.getElementById("fbTemplate");

//     // clear table first
//     tableBody.innerHTML = "";

//     // add all the rows to the table
//     for (let index = 0; index < fbArray.length; index += 5) {
        
//         let tableRow = document.importNode(templateRow.content,true);

//         // grab just the td's and put them into an array
//         let rowCols = tableRow.querySelectorAll("td");
//         rowCols[0].textContent = fbArray[index];
//         rowCols[1].textContent = fbArray[index+1];
//         rowCols[2].textContent = fbArray[index+2];
//         rowCols[3].textContent = fbArray[index+3];
//         rowCols[4].textContent = fbArray[index+4];

//         tableBody.appendChild(tableRow);
//     }

//         document.getElementById("tableFizzBuzz").classList.remove("invisible");

// }

function displayResults(fbArray) {

    // get handle to results div
    let resultsDiv = document.getElementById("resultsDiv");

    // get handle to table template
    let tableTemplate = document.getElementById("tableTemplate");
    
    // get handle to tbody tag via importNode
    let table = document.importNode(tableTemplate.content,true);
    let tbodyFizzBuzz = table.querySelector("tbody");

    // clear p tag
    tbodyFizzBuzz.innerHTML = "";

    // // get handle to tbody DOM
    // let tbodyFizzBuzz = document.getElementById("tbodyFizzBuzz");
    
    // // get the template row
    // let templateRow = document.getElementById("fbTemplate");

    // clear table first
    // tbodyFizzBuzz.innerHTML = "";

    // add all the rows to the table
    for (let index = 0; index < fbArray.length; index += 5) {
        
        // let tableRow = document.importNode(tbodyFizzBuzz.content,true);
        let tableRow = tbodyFizzBuzz.insertRow();
        
        // insert 5 cells
        for (let index = 0; index < 5; index++) {
            tableRow.insertCell();            
        }

        // grab just the td's and put them into an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[index];
        rowCols[1].textContent = fbArray[index+1];
        rowCols[2].textContent = fbArray[index+2];
        rowCols[3].textContent = fbArray[index+3];
        rowCols[4].textContent = fbArray[index+4];

        tbodyFizzBuzz.appendChild(tableRow);
    }

        // document.getElementById("tableFizzBuzz").classList.remove("invisible");
    resultsDiv.appendChild(table);

}
