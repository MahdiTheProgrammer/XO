//nikan is not oskol haaaaaa🫄🫄🤤🤤

document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div1 = document.getElementById('one');
    
    // Attach a click event listener to the div
    div1.addEventListener('click', function() {
        console.log("clicked")
        add_chois("one",0)
    });
    });
document.addEventListener('DOMContentLoaded', function() {

     var div2 = document.getElementById('two');
    
    // Attach a click event listener to the div
    div2.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("two",1)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div3 = document.getElementById('three');
    
    // Attach a click event listener to the div
    div3.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("three",2)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div4 = document.getElementById('four');
    
    // Attach a click event listener to the div
    div4.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("four",3)
    })
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div5 = document.getElementById('five');
    
    // Attach a click event listener to the div
    div5.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("five",4)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div6 = document.getElementById('six');
    
    // Attach a click event listener to the div
    div6.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("six",5)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div7 = document.getElementById('seven');
    
    // Attach a click event listener to the div
    div7.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("seven",6)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div8 = document.getElementById('eight');
    
    // Attach a click event listener to the div
    div8.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("eight",7)
    });
    });
document.addEventListener('DOMContentLoaded', function() {
    // Get the div with ID "1"
    var div9 = document.getElementById('nine');
    
    // Attach a click event listener to the div
    div9.addEventListener('click', function() {
        // Print a message when clicked
        add_chois("nine",8)
    });
    });
    
let x_point=0
let o_point=0
let turn="X"
let matris=[0,0,0,0,0,0,0,0,0]

function add_chois(s,num){
    if(turn=="X"){
        if(matris[num]==0){
            matris[num]="X"
            turn="O"
            document.getElementById(s).style.backgroundImage='url("X.png")';
        }
    }
    else{
        if(matris[num]==0){
            matris[num]="O";
            turn="X";
            document.getElementById(s).style.backgroundImage='url("O.png")';

        }
    }
    let t=""

    if (check_winner(matris)==true){//check

        if(turn=="O"){
            t="X"
            o_point+=1
        }
        else{
            t="O"
            x_point+=1
        }
        // document.getElementById("text").innerHTML =t+" won!.";

        console.log("resid");
        // document.getElementsByid("popup").style.display='';
        var divElement = document.getElementById('popup');
        divElement.style.display = 'block';
    }

}
function check_winner(matris){
    if(matris[0]==matris[1] && matris[1]==matris[2] && matris[0]!=0){
        console.log("1");
        return true;
    }
    if(matris[3]==matris[4] && matris[4]==matris[5] && matris[3]!=0)
    {
        console.log("2");
        return true;
    }
    if(matris[6]==matris[7] && matris[7]==matris[8] && matris[6]!=0)
    {
        console.log("3");
        return true;
    }
    //zabdar
    if(matris[0]==matris[4] && matris[4]==matris[8] && matris[0]!=0)
    {
        console.log("4");
        return true;
    }
    if(matris[2]==matris[4] && matris[4]==matris[6] && matris[2]!=0)
    {
        console.log("5");
        return true;
    }
    // ---coloom---
    if(matris[0]==matris[3] && matris[3]==matris[6] && matris[0]!=0)
    {
        console.log("6");
        return true;

    }
    if(matris[1]==matris[4] && matris[4]==matris[7] && matris[1]!=0)
    {
        console.log("7");
        return true;
    }
    if(matris[2]==matris[5] && matris[5]==matris[8] && matris[2]!=0)
    {
        console.log("8");
        return true;
    }
    return false;
}
function reset(){
    console.log("fuck u");
    list=["one","two","three","four","five","six","seven","eight","nine"];
    for(let i of list){
        console.log(i);
        document.getElementById(i).style.backgroundImage='url()';
        matris=[0,0,0,0,0,0,0,0,0];
        turn="X";
        var divElement = document.getElementById('popup');
        divElement.style.display = 'None';
    }
}
