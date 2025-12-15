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
    let value9 = parseFloat(document.getElementById("matrix-9").value) || 0;

    let value10 = parseFloat(document.getElementById("matrix-10").value) || 0;
    let value11 = parseFloat(document.getElementById("matrix-11").value) || 0;
    let value12 = parseFloat(document.getElementById("matrix-12").value) || 0;
    let value13 = parseFloat(document.getElementById("matrix-13").value) || 0;
    let value14 = parseFloat(document.getElementById("matrix-14").value) || 0;
    let value15 = parseFloat(document.getElementById("matrix-15").value) || 0;
    let value16 = parseFloat(document.getElementById("matrix-16").value) || 0;
    let value17 = parseFloat(document.getElementById("matrix-17").value) || 0;
    let value18 = parseFloat(document.getElementById("matrix-18").value) || 0;



    //Addition

    let arr = []

    arr[0] = value1 + value10
    arr[1] = value2 + value11
    arr[2] = value3 + value12
    arr[3] = value4 + value13
    arr[4] = value5 + value14
    arr[5] = value6 + value15
    arr[6] = value7 + value16
    arr[7] = value8 + value17
    arr[8] = value9 + value18


    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);


    // Console log
    console.log("Result Matrix Addition:");
    console.log(arr[0], arr[1], arr[2]);
    console.log(arr[3], arr[4], arr[5]);
    console.log(arr[6], arr[7], arr[8]);
}



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

    let value9 = parseFloat(document.getElementById("matrix-9").value) || 0;
    let value10 = parseFloat(document.getElementById("matrix-10").value) || 0;
    let value11 = parseFloat(document.getElementById("matrix-11").value) || 0;
    let value12 = parseFloat(document.getElementById("matrix-12").value) || 0;

    let value13 = parseFloat(document.getElementById("matrix-13").value) || 0;
    let value14 = parseFloat(document.getElementById("matrix-14").value) || 0;
    let value15 = parseFloat(document.getElementById("matrix-15").value) || 0;
    let value16 = parseFloat(document.getElementById("matrix-16").value) || 0;
    let value17 = parseFloat(document.getElementById("matrix-17").value) || 0;
    let value18 = parseFloat(document.getElementById("matrix-18").value) || 0;

    // Subtract
    let arr = []

    arr[0] = value1 - value10
    arr[1] = value2 - value11
    arr[2] = value3 - value12
    arr[3] = value4 - value13
    arr[4] = value5 - value14
    arr[5] = value6 - value15
    arr[6] = value7 - value16
    arr[7] = value8 - value17
    arr[8] = value9 - value18


    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);
    // Console log
    console.log("Result Matrix Subtraction:");
    console.log(arr[0], arr[1], arr[2]);
    console.log(arr[3], arr[4], arr[5]);
    console.log(arr[6], arr[7], arr[8]);
}




// / Multiplication Method
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

    let value9 = parseFloat(document.getElementById("matrix-9").value) || 0;
    let value10 = parseFloat(document.getElementById("matrix-10").value) || 0;
    let value11 = parseFloat(document.getElementById("matrix-11").value) || 0;
    let value12 = parseFloat(document.getElementById("matrix-12").value) || 0;

    let value13 = parseFloat(document.getElementById("matrix-13").value) || 0;
    let value14 = parseFloat(document.getElementById("matrix-14").value) || 0;
    let value15 = parseFloat(document.getElementById("matrix-15").value) || 0;
    let value16 = parseFloat(document.getElementById("matrix-16").value) || 0;
    let value17 = parseFloat(document.getElementById("matrix-17").value) || 0;
    let value18 = parseFloat(document.getElementById("matrix-18").value) || 0;

    // Multiply
    let arr = []

    arr[0] = value1 * value10 + value2 * value13 + value3 * value16
    arr[1] = value1 * value11 + value2 * value14 + value3 * value17
    arr[2] = value1 * value12 + value2 * value15 + value3 * value18
    arr[3] = value4 * value10 + value5 * value13 + value6 * value16
    arr[4] = value4 * value11 + value5 * value14 + value6 * value17
    arr[5] = value4 * value12 + value5 * value15 + value6 * value18
    arr[6] = value7 * value10 + value8 * value13 + value9 * value16
    arr[7] = value7 * value11 + value8 * value14 + value9 * value17
    arr[8] = value7 * value12 + value8 * value15 + value9 * value18


    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);

    // Console log
    console.log("Result Matrix Multiplication:");
    console.log(arr[0], arr[1], arr[2]);
    console.log(arr[3], arr[4], arr[5]);
    console.log(arr[6], arr[7], arr[8]);
}




// Divided Method
function division_matrix() {
    // Get values and convert to numbers
    let value1 = parseFloat(document.getElementById("matrix-1").value) || 0;
    let value2 = parseFloat(document.getElementById("matrix-2").value) || 0;
    let value3 = parseFloat(document.getElementById("matrix-3").value) || 0;
    let value4 = parseFloat(document.getElementById("matrix-4").value) || 0;

    let value5 = parseFloat(document.getElementById("matrix-5").value) || 0;
    let value6 = parseFloat(document.getElementById("matrix-6").value) || 0;
    let value7 = parseFloat(document.getElementById("matrix-7").value) || 0;
    let value8 = parseFloat(document.getElementById("matrix-8").value) || 0;

    let value9 = parseFloat(document.getElementById("matrix-9").value) || 0;
    let value10 = parseFloat(document.getElementById("matrix-10").value) || 0;
    let value11 = parseFloat(document.getElementById("matrix-11").value) || 0;
    let value12 = parseFloat(document.getElementById("matrix-12").value) || 0;

    // Divide
    let arr = []

    arr[0] = value1 / value5 / value9
    arr[1] = value2 / value6 / value10
    arr[2] = value3 / value7 / value11
    arr[3] = value4 / value8 / value12


    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);

    // Console log
    console.log("Result Matrix Divison:");
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
    document.getElementById("matrix-9").value = null;
    document.getElementById("matrix-10").value = null;
    document.getElementById("matrix-11").value = null;
    document.getElementById("matrix-12").value = null;
    document.getElementById("matrix-13").value = null;
    document.getElementById("matrix-14").value = null;
    document.getElementById("matrix-15").value = null;
    document.getElementById("matrix-16").value = null;
    document.getElementById("matrix-17").value = null;
    document.getElementById("matrix-18").value = null;


    document.getElementById("matrix-r1").innerText = 0;
    document.getElementById("matrix-r2").innerText = 0;
    document.getElementById("matrix-r3").innerText = 0;
    document.getElementById("matrix-r4").innerText = 0;

    document.getElementById("matrix-r5").innerText = 0;
    document.getElementById("matrix-r6").innerText = 0;
    document.getElementById("matrix-r7").innerText = 0;
    document.getElementById("matrix-r8").innerText = 0;
    document.getElementById("matrix-r9").innerText = 0;

}



function limitDigits(inputField) {
    if (inputField.value.length > 3) {
        inputField.value = inputField.value.slice(0, 3);
    }
}
