const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const clos = document.getElementById('close')


bar.onclick = function(){
   nav.classList.add('active');
   
}
clos.onclick = function(){
   nav.classList.remove('active');
   
}