let displayValue = 0;

function add(valOne, valTwo){
    return valOne + valTwo;
}

function subtract(valOne, valTwo){
    return valOne - valTwo;
}

function multiply(valOne, valTwo){
    return valOne * valTwo;
}

function divide(valOne, valTwo){
    return valOne/valTwo;
}

function operate(operator, valOne, valTwo){
    return operator(valOne, valTwo);
}

$("#btn-clearAll").click(function(){
    $(".screen").text(0);
});



$("#btn-clear").click(function(){
    if ($(".screen").text() === "0"){
        //...... 
    } else{
        let screenText = $(".screen").text();

        if (screenText.length === 1){
            displayValue = 0;
            $(".screen").text(0);
        } else {
            screenText = screenText.split('');
        displayValue = displayValue.toString();
        displayValue = displayValue.split('');

        screenText.pop();
        displayValue.pop();

        screenText = screenText.join('');
        displayValue = displayValue.join('');
        
        $(".screen").text(screenText); 
        }  
    }
});




let turnedOff = false;

function turnOff(){
    
}

$("#btn-power").click(function(){
    
});



$("button.numbers").click(function(){
    let btnText = $(this).text();
    if ($(".screen").text() === "0"){
        $(".screen").text(btnText);
        displayValue = $(".screen").text();
    } else {
        document.querySelector(".screen").append(btnText);
        displayValue = $(".screen").text();
    }
    // console.log(btnText);
});