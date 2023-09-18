const corazon1= document.querySelector('#rot');
const corazon2= document.querySelector("#ro");
const corazon3= document.querySelector("#po");
const corazon4= document.querySelector("#pr");
const corazon5= document.querySelector("#lp");
let contador=[];
const boton= document.querySelector('#bton');
corazon1.addEventListener('click',(e)=>{
    e.preventDefault();
    corazon1.src="./assets/corazon.png";
    contador[0]++;
    if(contador[0]==2){ 
        corazon1.src="./assets/heartb.png";
    }else{
        contador[0]=1;
    }
});
corazon2.addEventListener('click',(e)=>{
    e.preventDefault();
    corazon2.src="./assets/corazon.png";
    contador[1]++;
    if(contador[1]==2){ 
        corazon2.src="./assets/heartb.png";
    }else{
        contador[1]=1;
    }
});
corazon3.addEventListener('click',(e)=>{
    e.preventDefault();
    corazon3.src="./assets/corazon.png";
    contador[2]++;
    if(contador[2]==2){ 
        corazon3.src="./assets/heartb.png";
    }else{
        contador[2]=1;
    }
});
corazon4.addEventListener('click',(e)=>{
    e.preventDefault();
    corazon4.src="./assets/corazon.png";
    contador[3]++;
    if(contador[3]==2){ 
        corazon4.src="./assets/heartb.png";
    }else{
        contador[3]=1;
    }
});
corazon5.addEventListener('click',(e)=>{
    e.preventDefault();
    corazon5.src="./assets/corazon.png";
    contador[4]++;
    if(contador[4]==2){ 
        corazon5.src="./assets/heartb.png";
    }else{
        contador[4]=1;
    }
});

boton.addEventListener("click",()=>{
    alert("Apunto de iniciar sesion")
})