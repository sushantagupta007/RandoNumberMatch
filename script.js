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


function countTrace(isMatch){
    const countPlace= document.getElementById('count'); 
    let countValue = countPlace.innerText;
    console.log(countValue)
    if(isMatch==true){
        countValue++;
        countPlace.innerText= countValue; 
    }
    if(isMatch==false){
        countValue--;
        countPlace.innerText= countValue; 
    }
}
 
function play() {
    var audio = new Audio('mixkit-arabian-mystery-harp-notification-2489.wav');
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
     
    const randomPin = document.getElementById('randomNumberDisplay').value;
    
    const succcss= document.getElementById('successNumber'); 
    const error = document.getElementById('errorNumber'); 
    const typed = document.getElementById('displayTypedNumber').value;
 
    
    if(typed==randomPin){
        play();
        succcss.style.display="block";
        countTrace(true);
                  
    }
    if(typed!=randomPin){
        error.style.display="block"; 
        countTrace(false);
    }
})
