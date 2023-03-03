var a=0;
function hide(){

    if(a==0){

        document.getElementById("menu1").style.display="block";

        a=1;
        console.log("block",a);
    }
    else{
        document.getElementById("menu1").style.display="none"
        a=0;
        console.log("none",a);
    }
   
}

// var a=0;
// function hide(){

//     if(a==0){

//         document.getElementById("menu2").style.display="block";

//         a=1;
//         console.log("block",a);
//     }
//     else{
//         document.getElementById("menu2").style.display="none"
//         a=2;
//         console.log("none",a);
//     }
   
// }
