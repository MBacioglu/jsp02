console.log("--- Page 3 ---");
// DOM Element
const input = document.querySelector(".txt-input");
const btn = document.querySelector(".btn-check");
 btn.addEventListener('click' , function() {
    if (input.value === '') {
        input.classList.add( 'shaker')
        
    }else{
        input.classList.remove('shaker')
        input.classList.add('bouncer')
    }
 });
