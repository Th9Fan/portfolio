
const swiper = new Swiper('.swiper', {

    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,
  
  });

const menu = document.querySelector(".menu");
const menu_link = menu.querySelectorAll(".menu-link");
const mobimenu = document.querySelector(".mobile-menu")

function changeactive (event){
  console.log(event.target)
  const target = event.target
  
  if (target.classList.contains('menu-link')){
    const preactive = menu.querySelector(".active");
    preactive.classList.remove("active")
    target.classList.add("active")
  }
}

function changeactive2 (event){
  console.log(event.target)
  const target = event.target
  
  if (target.classList.contains('mobile-menu')){
    const preactive = mobimenu.querySelector(".active");
    preactive.classList.remove("active")
    target.classList.add("active")
  }
}

mobimenu.onclick= changeactive2
menu.onclick= changeactive

window.onscroll = () => {
  const h = document.documentElement.clientHeight;
  let newactiv = null;
  if (window.scrollY >= h  * 4){
    newactiv = menu_link[4];
  }
  else if (window.scrollY >= h  * 3){
    newactiv = menu_link[3];
  }
  else if (window.scrollY >= h  * 2){
    newactiv = menu_link[2];
  }
  else if (window.scrollY >= h  ){
    newactiv = menu_link[1];
  }
  else{
    newactiv = menu_link[0];
  }
  const preactive = menu.querySelector(".active");
  preactive.classList.remove("active")
  newactiv.classList.add("active")

}

const menubtn = document.querySelector(".menu-button")



menubtn.onclick = ( ) => {
  mobimenu.classList.toggle("hide")
};