const blocks=document.querySelectorAll('.grid-item')
    
let x_point=0;
let o_point=0;
let turn="X";
let matris=[0,0,0,0,0,0,0,0,0];

var choice ="friend"
reset()

//changing play matris
function add_chois(s){
    num=parseInt(s)
    if(turn=="X"){
        if(matris[num]==0){
            matris[num]="X";
            turn="O";
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
    let t="";

    if (check_winner(matris)==true){//check

        if(turn=="O"){
            t="X";
            o_point+=1;
        }
        else{
            t="O";
            x_point+=1;
        }
        show_popup(t+" WON!")

    }
    if(!matris.includes(0)){
        show_popup("DRAW!")

    }

}

function show_popup(s){
    var divElement = document.getElementById('popup');
    divElement.style.display = 'block';
    document.getElementById("msg").innerHTML =s;

}

function check_winner(matris){
    if(matris[0]==matris[1] && matris[1]==matris[2] && matris[0]!=0){
        return true;
    }
    if(matris[3]==matris[4] && matris[4]==matris[5] && matris[3]!=0)
    {
        return true;
    }
    if(matris[6]==matris[7] && matris[7]==matris[8] && matris[6]!=0)
    {
        return true;
    }
    //zabdar
    if(matris[0]==matris[4] && matris[4]==matris[8] && matris[0]!=0)
    {
        return true;
    }
    if(matris[2]==matris[4] && matris[4]==matris[6] && matris[2]!=0)
    {
        return true;
    }
    // ---coloom---
    if(matris[0]==matris[3] && matris[3]==matris[6] && matris[0]!=0)
    {
        return true;

    }
    if(matris[1]==matris[4] && matris[4]==matris[7] && matris[1]!=0)
    {
        return true;
    }
    if(matris[2]==matris[5] && matris[5]==matris[8] && matris[2]!=0)
    {
        return true;
    }
    return false;
}
function reset(){
    for(let i of blocks){
        i.style.backgroundImage='url()';
        matris=[0,0,0,0,0,0,0,0,0];
        turn="X";
        var divElement = document.getElementById('popup');
        divElement.style.display = 'None';
        i.addEventListener('click',function(){add_chois(i.id)})
    }
}

function best_move(cp){
    if(!matris.includes(cp)){
        if(matris[0]==cp||matris[2]==cp||matris[6]==cp||matris[8]==cp){
            return 4
        }
        else
        return
    }
}
// detecting threats
function two_together(cp)
{
    // duobles list contains indices of threats 
    doubles = []
    // we have computers mark so we can find user's mark to 
    if (cp == "X")
    {
        u = 'O'
    }
    else
    {
        u = "X"
    }
    // for horizental
    for (f1 = 0; f1 < 8; f1++) {
        if (matris[f1]==u && f1 != 2 && f1 != 5 && f1 != 8){
            if(matris[f1+1]==u){ 
                doubles.push(f1)
            }
        }
    }
}


function change_chice(s){
if(s=="computer"){
    document.getElementById("fr").style.backgroundColor="rgba(255,255,255,0.1)"

    document.getElementById("cp").style.backgroundColor="blue"
}

if(s=="friend"){
    document.getElementById("cp").style.backgroundColor="rgba(255,255,255,0.1)"

    document.getElementById("fr").style.backgroundColor="blue"
}

}