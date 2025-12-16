// Addition Method
function add_matrix() {
    // Get values and convert to numbers
    let value1 = parseFloat(document.getElementById("matrix-1").value) || 0;
    let value2 = parseFloat(document.getElementById("matrix-2").value) || 0;
    let value3 = parseFloat(document.getElementById("matrix-3").value) || 0;
    let value4 = parseFloat(document.getElementById("matrix-4").value) || 0;

    let value5 = parseFloat(document.getElementById("matrix-5").value) || 0;
    let value6 = parseFloat(document.getElementById("matrix-6").value) || 0;
    let value7 = parseFloat(document.getElementById("matrix-7").value) || 0;
    let value8 = parseFloat(document.getElementById("matrix-8").value) || 0;

    // Addition

    let arr = []

    arr[0] = value1 + value5
    arr[1] = value2 + value6
    arr[2] = value3 + value7
    arr[3] = value4 + value8


    // Display results
    // document.getElementById("matrix-r1").innerText = arr[0];
    // document.getElementById("matrix-r2").innerText = arr[1];
    // document.getElementById("matrix-r3").innerText = arr[2];
    // document.getElementById("matrix-r4").innerText = arr[3];



    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);


    // Console log
    console.log("Result Matrix Addition:");
    console.log(arr[0], arr[1]);
    console.log(arr[2], arr[3]);
}

// function add_matrix() {
//     // Get values and convert to numbers
//     let value1 = parseFloat(document.getElementById("matrix-1").value) || 0;
//     let value2 = parseFloat(document.getElementById("matrix-2").value) || 0;
//     let value3 = parseFloat(document.getElementById("matrix-3").value) || 0;
//     let value4 = parseFloat(document.getElementById("matrix-4").value) || 0;

//     let value5 = parseFloat(document.getElementById("matrix-5").value) || 0;
//     let value6 = parseFloat(document.getElementById("matrix-6").value) || 0;
//     let value7 = parseFloat(document.getElementById("matrix-7").value) || 0;
//     let value8 = parseFloat(document.getElementById("matrix-8").value) || 0;

//     // Matrix addition
//     let result1 = value1 + value5;
//     let result2 = value2 + value6;
//     let result3 = value3 + value7;
//     let result4 = value4 + value8;

//     // Display results
//     document.getElementById("matrix-r1").innerText = result1;
//     document.getElementById("matrix-r2").innerText = result2;
//     document.getElementById("matrix-r3").innerText = result3;
//     document.getElementById("matrix-r4").innerText = result4;

//     // Console log
//     console.log("Result Matrix:");
//     console.log(result1, result2);
//     console.log(result3, result4);
// }

// Subtract Method
function subtract_matrix() {
    // Get values and convert to numbers
    let value1 = parseFloat(document.getElementById("matrix-1").value) || 0;
    let value2 = parseFloat(document.getElementById("matrix-2").value) || 0;
    let value3 = parseFloat(document.getElementById("matrix-3").value) || 0;
    let value4 = parseFloat(document.getElementById("matrix-4").value) || 0;

    let value5 = parseFloat(document.getElementById("matrix-5").value) || 0;
    let value6 = parseFloat(document.getElementById("matrix-6").value) || 0;
    let value7 = parseFloat(document.getElementById("matrix-7").value) || 0;
    let value8 = parseFloat(document.getElementById("matrix-8").value) || 0;

    // Subtract
    let arr = []

    arr[0] = value1 - value5
    arr[1] = value2 - value6
    arr[2] = value3 - value7
    arr[3] = value4 - value8


    // Display results
    // document.getElementById("matrix-r1").innerText = arr[0];
    // document.getElementById("matrix-r2").innerText = arr[1];
    // document.getElementById("matrix-r3").innerText = arr[2];
    // document.getElementById("matrix-r4").innerText = arr[3];

    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    // Console log
    console.log("Result Matrix Subtraction:");
    console.log(arr[0], arr[1]);
    console.log(arr[2], arr[3]);
}


// Multiplication Method
function multiply_matrix() {
    // Get values and convert to numbers
    let value1 = parseFloat(document.getElementById("matrix-1").value) || 0;
    let value2 = parseFloat(document.getElementById("matrix-2").value) || 0;
    let value3 = parseFloat(document.getElementById("matrix-3").value) || 0;
    let value4 = parseFloat(document.getElementById("matrix-4").value) || 0;

    let value5 = parseFloat(document.getElementById("matrix-5").value) || 0;
    let value6 = parseFloat(document.getElementById("matrix-6").value) || 0;
    let value7 = parseFloat(document.getElementById("matrix-7").value) || 0;
    let value8 = parseFloat(document.getElementById("matrix-8").value) || 0;

    // Multiply
    let arr = []

    arr[0] = value1 * value5 + value2 * value7

    arr[1] = value1 * value6 + value2 * value8

    arr[2] = value3 * value5 + value4 * value7

    arr[3] = value3 * value6 + value4 * value8

    // Display results
    // document.getElementById("matrix-r1").innerText = arr[0];
    // document.getElementById("matrix-r2").innerText = arr[1];
    // document.getElementById("matrix-r3").innerText = arr[2];
    // document.getElementById("matrix-r4").innerText = arr[3];

    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);

    // Console log
    console.log("Result Matrix Multiplication:");
    console.log(arr[0], arr[1]);
    console.log(arr[2], arr[3]);
}


function clear_matrix() {

    document.getElementById("matrix-1").value = null;
    document.getElementById("matrix-2").value = null;
    document.getElementById("matrix-3").value = null;
    document.getElementById("matrix-4").value = null;
    document.getElementById("matrix-5").value = null;
    document.getElementById("matrix-6").value = null;
    document.getElementById("matrix-7").value = null;
    document.getElementById("matrix-8").value = null;

    document.getElementById("matrix-r1").innerText = 0;
    document.getElementById("matrix-r2").innerText = 0;
    document.getElementById("matrix-r3").innerText = 0;
    document.getElementById("matrix-r4").innerText = 0;

}


function limitDigits(inputField) {
    if (inputField.value.length > 3) {
        inputField.value = inputField.value.slice(0, 3);
    }
}