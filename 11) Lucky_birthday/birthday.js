const dateOfBirth = document.querySelector("#d-o-b");
const luckyNumber  = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputbox = document.querySelector("#output-box");


function tryluck(){
    var dob=dateOfBirth.value;
    var sum=calculateSum(dob);
    compareValues(sum,luckyNumber.value)
};

function calculateSum(dob){
    dob=dob.replaceAll("-","");
    let sum=0;
    for(let i=0;i<dob.length;i++){
        sum=sum+Number(dob.charAt(i));
    };
    return sum;

};

function compareValues(sum,luckyNumber){
    if (sum%luckyNumber===0){
        outputbox.innerText=("your birthday is lucky")
    }else{
        outputbox.innerText=("your birthday is unlucky")
    };
};

checkNumberButton.addEventListener("click",tryluck);

    

 
 