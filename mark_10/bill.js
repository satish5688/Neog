const  billAmount=document.querySelector("#bill-amount");
const  cashGiven=document.querySelector("#cash-given");
const  checkButton=document.querySelector("#check-button");
const  message=document.querySelector("#error-message");
const  noOfNotes=document.querySelectorAll(".no-of-notes");
const availableNotes=[2000,500,100,20,10,5,1];
var bill = billAmount.value
var cash= cashGiven.value

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    
    message.style.display="none";
    if(billAmount.value > 0){
        if(cash>=bill){
            const amountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(amountToBeReturned);
        }else{ 
            showMessage("Do you wanna wash plates?")
        }
    }else{
        showMessage("Invalid bill  amount   ")
    }
});

function calculateChange(amountToBeReturned){   
    for (let i=0; i<availableNotes.length; i++) {
        var numberOfNotes=Math.trunc(
            amountToBeReturned/availableNotes[i]);
            amountToBeReturned = amountToBeReturned % availableNotes[i];
            if (numberOfNotes>0){
                noOfNotes[i].innerText=numberOfNotes;
            }else{
                showMessage("Do you wanna wash plates?")
            }
            
            
    };
};

function showMessage(msg){
    message.style.display="block";
    message.innerText=msg; 
}