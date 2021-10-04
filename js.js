const curentOne=document.getElementById('curentOne');
const curentTwo=document.getElementById('curentTwo');


const cValueOne=document.getElementById('currentValueOne');
const cValueTwo=document.getElementById('currentValueTwo');

const rate=document.getElementById('rate');
const swap=document.getElementById('swap');


curentOne.addEventListener('change',calculate);
curentTwo.addEventListener('change',calculate);

cValueOne.addEventListener('input', calculate);
cValueTwo.addEventListener('input', calculate);

function calculate(){
   
    const valueOne=curentOne.value;
    const valueTwo=curentTwo.value;
    
    console.log(valueOne,valueTwo);
    const ccOne=cValueOne.value;
    const ccTwo=cValueTwo.value;



   fetch(`https://v6.exchangerate-api.com/v6/f37ba6fb2bd4fa954d2e156a/latest/${valueOne}`)
   .then(response => response.json())
   .then(data=>{
       const rateCurrent=data["conversion_rates"][valueTwo];
       
       rate.innerHTML=`1 ${valueOne}: ${rateCurrent} ${valueTwo}`;


       cValueTwo.value=(ccOne*rateCurrent).toFixed(2);
       console.log(rateCurrent);
   })
   
}
swap.addEventListener('click',()=>{
    const tmp=cValueOne.value;
    cValueOne.value=cValueTwo.value;
    cValueTwo.value=tmp;
    
    const tmp2=curentOne.value;
    curentOne.value=curentTwo.value;
    curentTwo.value=tmp2;
    calculate();
})
