const navHeader = document.getElementById('navHeader');

addEventListener('scroll', ()=>{
  let scrolled = scrollY;
  if(scrolled > 50){
    navHeader.classList.add('scrolled');
  }
  else{
    navHeader.classList.remove('scrolled');
  }
})