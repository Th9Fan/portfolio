
const swiper = new Swiper('.swiper', {

    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,
  
  });

const menu = document.querySelector(".menu");
const menu_link = document.querySelector(".menu-link");

function changeactive (event){
  console.log(event.target)
  const target = event.target;
  if (target.classList.contains("menu-link")){
    console.log("button was klicked!")
            
    activeBtn.classList.remove("active");
    arget.classList.add("active");
    activeBtn = target
    uptate()
  }
  menu.onclick=function
}

menu_link.onclick= changeactive
