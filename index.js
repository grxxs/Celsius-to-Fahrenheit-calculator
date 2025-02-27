const myTemp = document.getElementById("myTemp");
const celToFah = document.getElementById("celToFah");
const fahToCel = document.getElementById("fahToCel");
const result = document.getElementById("result");
let temp;
let inTemp;


function conversion(){
    if(celToFah.checked){
        inTemp = Number(myTemp.value);
        temp = Number(myTemp.value);
        temp = temp * 9/5 + 32;
        result.innerHTML = inTemp + "°C equals to " + temp.toFixed(1) + "°F";
    } else if (fahToCel.checked){
        inTemp = Number(myTemp.value);
        temp = Number(myTemp.value);
        temp = (temp - 32) * 5/9;
        result.innerHTML = inTemp + "°F equals to " + temp.toFixed(1) + "°C";
    } else {
        result.innerHTML = "Please select conversation type";
    }
}