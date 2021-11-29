var btntranslate=document.querySelector("#btn_translate");
var textinput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");


function clickHandler(){
    outputDiv.innerText="translate "+textinput.value
    
}

btntranslate.addEventListener("click", clickHandler)
print("zyx")