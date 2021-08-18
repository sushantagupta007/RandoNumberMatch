function  getPin (){
    const pin= Math.floor(Math.random()*10000);
    const pinString = pin+"";

    if(pinString.length=='4'){
        document.getElementById('randomNumberDisplay').value= pin; 
    }
    else{
        getPin(); 
    }
}

function getRandomNumber(){
    return getPin(); 
}

let buttonClicked = 0;
function countTrace(){
    const countPlace= document.getElementById('count'); 
    let countValue = countPlace.innerText;
    buttonClicked++; 
    if(buttonClicked==1){
        countValue--; 
        countPlace.innerText= countValue; 
    }
    else if(buttonClicked==2){
        countValue--; 
        countPlace.innerText= countValue; 
    }
    else if(buttonClicked==3){
        countValue--; 
        countPlace.innerText= countValue; 
    }
    if(countValue==0){
        countPlace.innerText= 3;
    }
}
 
function play() {
    var audio = new Audio('/mixkit-arabian-mystery-harp-notification-2489.wav');
    audio.play();
  }

document.getElementById('ranndomNumberGenerate').addEventListener('click',function(){
    getRandomNumber(); 
})

document.getElementById('key-pad').addEventListener('click', function(event){
    const previousNumber = document.getElementById('displayTypedNumber'); 
   
    const typedNumber = event.target.innerText; 
    if(!isNaN(typedNumber)){
        const newNumber = previousNumber.value+typedNumber; 
        previousNumber.value = newNumber; 
    }
    if(isNaN(typedNumber)){
        if(typedNumber=='C'){
            previousNumber.value= "";
        }
    }
})

document.getElementById('submitBtn').addEventListener('click',function(){
    countTrace(); 
    const randomPin = document.getElementById('randomNumberDisplay').value;
    
    const succcss= document.getElementById('successNumber'); 
    const error = document.getElementById('errorNumber'); 
    const typed = document.getElementById('displayTypedNumber').value;
 
    
    if(typed==randomPin){
        succcss.style.display="block";
        play();          
    }
    if(typed!=randomPin){
        error.style.display="block"; 
    }
})