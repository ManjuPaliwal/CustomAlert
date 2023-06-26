let clickMe = document.querySelector('.clickMe');
let alerted = document.querySelector('.alert')
let cancle = document.querySelector('.cancle');
let agree = document.querySelector('.agree');
let accoutndel = document.querySelector('.accountdel');

clickMe.addEventListener('click',()=>{
alerted.style.display='flex';
console.log('hehre');
})
cancle.addEventListener('click',()=>{
    alerted.style.display='none'
})
agree.addEventListener('click',()=>{
    alert('Your being deleted');
    alerted.style.display='none'

    accoutndel.style.display='block';
clickMe.style.display='none'
setTimeout(()=>{
clickMe.style.display='block'
accoutndel.style.display='none';

},1000)
})