// To generate a Random number b/w 1-6
let ran = ()=>{
    return Math.ceil(Math.random()*6);
}

let r2=ran();    //Random no. 1
let r1=ran();    //Random no. 1

let st1 = ()=> "./images/dice"+r1+".png";   //Random img 1
let st2 = ()=> "./images/dice"+r2+".png";   //Random img 2

let img1 =document.querySelector('.img1');   //Selecting dice 1
let img2 =document.querySelector('.img2');   //Selecting dice 2
let heading = document.querySelector('h1');  //Selecting Heading 


img1.setAttribute("src" , st1())        //Setting dice img
img2.setAttribute("src" , st2())        //Setting dice img


//Conditions for Heading display

if(r1>r2){      
    heading.innerHTML="🏆 Player 1 Wins"    
}
else if(r2>r1){
    heading.innerHTML="Player 2 Wins 🏆"
}
else{
    heading.innerHTML ="DRAW"
}