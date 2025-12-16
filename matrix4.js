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
    let value19 = parseFloat(document.getElementById("matrix-19").value) || 0;
    let value20 = parseFloat(document.getElementById("matrix-20").value) || 0;

    let value21 = parseFloat(document.getElementById("matrix-21").value) || 0;
    let value22 = parseFloat(document.getElementById("matrix-22").value) || 0;
    let value23 = parseFloat(document.getElementById("matrix-23").value) || 0;
    let value24 = parseFloat(document.getElementById("matrix-24").value) || 0;

    let value25 = parseFloat(document.getElementById("matrix-25").value) || 0;
    let value26 = parseFloat(document.getElementById("matrix-26").value) || 0;
    let value27 = parseFloat(document.getElementById("matrix-27").value) || 0;
    let value28 = parseFloat(document.getElementById("matrix-28").value) || 0;

    let value29 = parseFloat(document.getElementById("matrix-29").value) || 0;
    let value30 = parseFloat(document.getElementById("matrix-30").value) || 0;
    let value31 = parseFloat(document.getElementById("matrix-31").value) || 0;
    let value32 = parseFloat(document.getElementById("matrix-32").value) || 0;



    //Addition

    let arr = []

    arr[0] = value1 + value17
    arr[1] = value2 + value18
    arr[2] = value3 + value19
    arr[3] = value4 + value20

    arr[4] = value5 + value21
    arr[5] = value6 + value22
    arr[6] = value7 + value23
    arr[7] = value8 + value24

    arr[8] = value9 + value25
    arr[9] = value10 + value26
    arr[10] = value11 + value27
    arr[11] = value12 + value28

    arr[12] = value13 + value29
    arr[13] = value14 + value30
    arr[14] = value15 + value31
    arr[15] = value16 + value32


    // Result box
    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);
    document.getElementById("matrix-r10").innerText = Math.round(arr[9]) >= 1000 ? "ERR" : Math.round(arr[9]);
    document.getElementById("matrix-r11").innerText = Math.round(arr[10]) >= 1000 ? "ERR" : Math.round(arr[10]);
    document.getElementById("matrix-r12").innerText = Math.round(arr[11]) >= 1000 ? "ERR" : Math.round(arr[11]);
    document.getElementById("matrix-r13").innerText = Math.round(arr[12]) >= 1000 ? "ERR" : Math.round(arr[12]);
    document.getElementById("matrix-r14").innerText = Math.round(arr[13]) >= 1000 ? "ERR" : Math.round(arr[13]);
    document.getElementById("matrix-r15").innerText = Math.round(arr[14]) >= 1000 ? "ERR" : Math.round(arr[14]);
    document.getElementById("matrix-r16").innerText = Math.round(arr[15]) >= 1000 ? "ERR" : Math.round(arr[15]);


    // Console log
    console.log("Result Matrix Addition:");
    console.log(arr[0], arr[1], arr[2], arr[3]);
    console.log(arr[4], arr[5], arr[6], arr[7]);
    console.log(arr[8], arr[9], arr[10], arr[11]);
    console.log(arr[12], arr[13], arr[14], arr[15]);
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
    let value19 = parseFloat(document.getElementById("matrix-19").value) || 0;
    let value20 = parseFloat(document.getElementById("matrix-20").value) || 0;

    let value21 = parseFloat(document.getElementById("matrix-21").value) || 0;
    let value22 = parseFloat(document.getElementById("matrix-22").value) || 0;
    let value23 = parseFloat(document.getElementById("matrix-23").value) || 0;
    let value24 = parseFloat(document.getElementById("matrix-24").value) || 0;

    let value25 = parseFloat(document.getElementById("matrix-25").value) || 0;
    let value26 = parseFloat(document.getElementById("matrix-26").value) || 0;
    let value27 = parseFloat(document.getElementById("matrix-27").value) || 0;
    let value28 = parseFloat(document.getElementById("matrix-28").value) || 0;

    let value29 = parseFloat(document.getElementById("matrix-29").value) || 0;
    let value30 = parseFloat(document.getElementById("matrix-30").value) || 0;
    let value31 = parseFloat(document.getElementById("matrix-31").value) || 0;
    let value32 = parseFloat(document.getElementById("matrix-32").value) || 0;

    // Subtract
    let arr = []

    arr[0] = value1 - value17
    arr[1] = value2 - value18
    arr[2] = value3 - value19
    arr[3] = value4 - value20

    arr[4] = value5 - value21
    arr[5] = value6 - value22
    arr[6] = value7 - value23
    arr[7] = value8 - value24

    arr[8] = value9 - value25
    arr[9] = value10 - value26
    arr[10] = value11 - value27
    arr[11] = value12 - value28

    arr[12] = value13 - value29
    arr[13] = value14 - value30
    arr[14] = value15 - value31
    arr[15] = value16 - value32


    // Result box
    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);
    document.getElementById("matrix-r10").innerText = Math.round(arr[9]) >= 1000 ? "ERR" : Math.round(arr[9]);
    document.getElementById("matrix-r11").innerText = Math.round(arr[10]) >= 1000 ? "ERR" : Math.round(arr[10]);
    document.getElementById("matrix-r12").innerText = Math.round(arr[11]) >= 1000 ? "ERR" : Math.round(arr[11]);
    document.getElementById("matrix-r13").innerText = Math.round(arr[12]) >= 1000 ? "ERR" : Math.round(arr[12]);
    document.getElementById("matrix-r14").innerText = Math.round(arr[13]) >= 1000 ? "ERR" : Math.round(arr[13]);
    document.getElementById("matrix-r15").innerText = Math.round(arr[14]) >= 1000 ? "ERR" : Math.round(arr[14]);
    document.getElementById("matrix-r16").innerText = Math.round(arr[15]) >= 1000 ? "ERR" : Math.round(arr[15]);

    // Console log
    console.log("Result Matrix Subtraction:");
    console.log(arr[0], arr[1], arr[2], arr[3]);
    console.log(arr[4], arr[5], arr[6], arr[7]);
    console.log(arr[8], arr[9], arr[10], arr[11]);
    console.log(arr[12], arr[13], arr[14], arr[15]);
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
    let value19 = parseFloat(document.getElementById("matrix-19").value) || 0;
    let value20 = parseFloat(document.getElementById("matrix-20").value) || 0;

    let value21 = parseFloat(document.getElementById("matrix-21").value) || 0;
    let value22 = parseFloat(document.getElementById("matrix-22").value) || 0;
    let value23 = parseFloat(document.getElementById("matrix-23").value) || 0;
    let value24 = parseFloat(document.getElementById("matrix-24").value) || 0;

    let value25 = parseFloat(document.getElementById("matrix-25").value) || 0;
    let value26 = parseFloat(document.getElementById("matrix-26").value) || 0;
    let value27 = parseFloat(document.getElementById("matrix-27").value) || 0;
    let value28 = parseFloat(document.getElementById("matrix-28").value) || 0;

    let value29 = parseFloat(document.getElementById("matrix-29").value) || 0;
    let value30 = parseFloat(document.getElementById("matrix-30").value) || 0;
    let value31 = parseFloat(document.getElementById("matrix-31").value) || 0;
    let value32 = parseFloat(document.getElementById("matrix-32").value) || 0;

    // Multiply
    let arr = []

    arr[0] = value1 * value17 + value2 * value21 + value3 * value25 + value4 * value29
    arr[1] = value1 * value18 + value2 * value22 + value3 * value26 + value4 * value30
    arr[2] = value1 * value19 + value2 * value23 + value3 * value27 + value4 * value31
    arr[3] = value1 * value20 + value2 * value24 + value3 * value28 + value4 * value32

    arr[4] = value5 * value17 + value6 * value21 + value7 * value25 + value8 * value29
    arr[5] = value5 * value18 + value6 * value22 + value7 * value26 + value8 * value30
    arr[6] = value5 * value19 + value6 * value23 + value7 * value27 + value8 * value31
    arr[7] = value5 * value20 + value6 * value24 + value7 * value28 + value8 * value32

    arr[8] = value9 * value17 + value10 * value21 + value11 * value25 + value12 * value29
    arr[9] = value9 * value18 + value10 * value22 + value11 * value26 + value12 * value30
    arr[10] = value9 * value19 + value10 * value23 + value11 * value27 + value12 * value31
    arr[11] = value9 * value20 + value10 * value24 + value11 * value28 + value12 * value32

    arr[12] = value13 * value17 + value14 * value21 + value15 * value25 + value16 * value29
    arr[13] = value13 * value18 + value14 * value22 + value15 * value26 + value16 * value30
    arr[14] = value13 * value19 + value14 * value23 + value15 * value27 + value16 * value31
    arr[15] = value13 * value20 + value14 * value24 + value15 * value28 + value16 * value32



    // Result box
    document.getElementById("matrix-r1").innerText = Math.round(arr[0]) >= 1000 ? "ERR" : Math.round(arr[0]);
    document.getElementById("matrix-r2").innerText = Math.round(arr[1]) >= 1000 ? "ERR" : Math.round(arr[1]);
    document.getElementById("matrix-r3").innerText = Math.round(arr[2]) >= 1000 ? "ERR" : Math.round(arr[2]);
    document.getElementById("matrix-r4").innerText = Math.round(arr[3]) >= 1000 ? "ERR" : Math.round(arr[3]);
    document.getElementById("matrix-r5").innerText = Math.round(arr[4]) >= 1000 ? "ERR" : Math.round(arr[4]);
    document.getElementById("matrix-r6").innerText = Math.round(arr[5]) >= 1000 ? "ERR" : Math.round(arr[5]);
    document.getElementById("matrix-r7").innerText = Math.round(arr[6]) >= 1000 ? "ERR" : Math.round(arr[6]);
    document.getElementById("matrix-r8").innerText = Math.round(arr[7]) >= 1000 ? "ERR" : Math.round(arr[7]);
    document.getElementById("matrix-r9").innerText = Math.round(arr[8]) >= 1000 ? "ERR" : Math.round(arr[8]);
    document.getElementById("matrix-r10").innerText = Math.round(arr[9]) >= 1000 ? "ERR" : Math.round(arr[9]);
    document.getElementById("matrix-r11").innerText = Math.round(arr[10]) >= 1000 ? "ERR" : Math.round(arr[10]);
    document.getElementById("matrix-r12").innerText = Math.round(arr[11]) >= 1000 ? "ERR" : Math.round(arr[11]);
    document.getElementById("matrix-r13").innerText = Math.round(arr[12]) >= 1000 ? "ERR" : Math.round(arr[12]);
    document.getElementById("matrix-r14").innerText = Math.round(arr[13]) >= 1000 ? "ERR" : Math.round(arr[13]);
    document.getElementById("matrix-r15").innerText = Math.round(arr[14]) >= 1000 ? "ERR" : Math.round(arr[14]);
    document.getElementById("matrix-r16").innerText = Math.round(arr[15]) >= 1000 ? "ERR" : Math.round(arr[15]);

    // Console log
    console.log("Result Matrix Multiplication:");
    console.log(arr[0], arr[1], arr[2], arr[3]);
    console.log(arr[4], arr[5], arr[6], arr[7]);
    console.log(arr[8], arr[9], arr[10], arr[11]);
    console.log(arr[12], arr[13], arr[14], arr[15]);
}




function clear_matrix() {

    // Matrix box
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
    document.getElementById("matrix-19").value = null;
    document.getElementById("matrix-20").value = null;
    document.getElementById("matrix-21").value = null;
    document.getElementById("matrix-22").value = null;
    document.getElementById("matrix-23").value = null;
    document.getElementById("matrix-24").value = null;
    document.getElementById("matrix-25").value = null;
    document.getElementById("matrix-26").value = null;
    document.getElementById("matrix-27").value = null;
    document.getElementById("matrix-28").value = null;
    document.getElementById("matrix-29").value = null;
    document.getElementById("matrix-30").value = null;
    document.getElementById("matrix-31").value = null;
    document.getElementById("matrix-32").value = null;


    // Result box
    document.getElementById("matrix-r1").innerText = 0;
    document.getElementById("matrix-r2").innerText = 0;
    document.getElementById("matrix-r3").innerText = 0;
    document.getElementById("matrix-r4").innerText = 0;
    document.getElementById("matrix-r5").innerText = 0
    document.getElementById("matrix-r6").innerText = 0
    document.getElementById("matrix-r7").innerText = 0
    document.getElementById("matrix-r8").innerText = 0
    document.getElementById("matrix-r9").innerText = 0
    document.getElementById("matrix-r10").innerText = 0
    document.getElementById("matrix-r11").innerText = 0
    document.getElementById("matrix-r12").innerText = 0
    document.getElementById("matrix-r13").innerText = 0
    document.getElementById("matrix-r14").innerText = 0
    document.getElementById("matrix-r15").innerText = 0
    document.getElementById("matrix-r16").innerText = 0

}



function limitDigits(inputField) {
    if (inputField.value.length > 3) {
        inputField.value = inputField.value.slice(0, 3);
    }
}
