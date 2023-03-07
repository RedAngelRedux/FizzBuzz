// CONTROLLER CONCERN
function getValues() {

    // Reset alert & results table to invisible
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

        const start = performance.now();
        results = generateResults(fizzNum,buzzNum,startRange,endRange);
        const end = performance.now();

        displayResults(results);

        alert (`Execution time: ${end-start} ms `);

    } else {

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

function generateResultsB(fizz, buzz, start, end) {

    let results = [];
    let Fizz = false;
    let Buzz = false;

    for (let num = start; num <= end; num++) {
        
        Fizz = num % fizz == 0;
        Buzz = num % buzz == 0;

        switch(true) {
            case Fizz && Buzz: {
                results.push("FizzBuzz");
                break;
            }
            case Fizz: {
                results.push("Fizz");
                break;
            }
            case Buzz: {
                results.push("Buzz");
            }
            default: {
                results.push(num);
                break;
            }
        }
    }
    

    return results;
}

function generateResultsC(fizz,buzz,start,end) {
    // Metastrap

    let results = [];

    for (let num = start; num <= end; num++) {
        let value =  ( (num % fizz == 0 ? "Fizz" : "") + (num % buzz == 0 ? "Buzz" : "") || num );
        results.push(value);
    }

    return results;

}

function generateResultsD(fizz,buzz,start,end) {
    let results = [];

    for (let num = start; num <= end; num++) {

        if(num % fizz == 0 && num % buzz == 0) {
            results.push("FizzBuzz");
        } else if (num % fizz == 0) {
            results.push("Fizz");
        } else if (num % buzz == 0) {
            results.push("Buzz");
        } else {
            results.push(num);
        }

    }

    return results;
}

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
        rowCols[0].classList.add(fbArray[index]);

        rowCols[1].textContent = fbArray[index+1];
        rowCols[1].classList.add(fbArray[index+1]);

        rowCols[2].textContent = fbArray[index+2];
        rowCols[2].classList.add(fbArray[index+2]);

        rowCols[3].textContent = fbArray[index+3];
        rowCols[3].classList.add(fbArray[index+3]);

        rowCols[4].textContent = fbArray[index+4];
        rowCols[4].classList.add(fbArray[index+4]);

        tbodyFizzBuzz.appendChild(tableRow);
    }

        // document.getElementById("tableFizzBuzz").classList.remove("invisible");
    resultsDiv.appendChild(table);
}
