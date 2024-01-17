const navHeader = document.getElementById('navHeader');
const hamMenu = document.getElementById('hamMenu');
const closeMenuVar = document.getElementById('closeMenu');

addEventListener('scroll', ()=>{
  let scrolled = scrollY;
  if(scrolled > 50){
    navHeader.classList.add('scrolled');
  }
  else{
    navHeader.classList.remove('scrolled');
  }
})

if(navHeader.className === "nav-header"){
  closeMenuVar.style.display = "none";
}
else{
  hamMenu.style.display = "none";
}

function showMenu(){
  navHeader.className = "clicked";
  hamMenu.style.display = "none";
  closeMenuVar.style.display = "block";
}
function closeMenu(){
  navHeader.className = "nav-header";
  hamMenu.style.display = "block";
  closeMenuVar.style.display = "none";
}