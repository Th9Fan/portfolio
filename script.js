
const swiper = new Swiper('.swiper', {

    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,
  
  });

const menu = document.querySelector(".menu");
const menu_link = menu.querySelectorAll(".menu-link");
const mobimenu = document.querySelector(".mobile-menu")
const mobi_link = mobimenu.querySelectorAll(".menu-link")

function changeactive (event){
  console.log(event.target)
  const target = event.target
  
  if (target.classList.contains('menu-link')){
    const preactive = menu.querySelector(".active");
    preactive.classList.remove("active")
    target.classList.add("active")
  }
}

menu.onclick= changeactive

window.onscroll = () => {
  const h = document.documentElement.clientHeight;
  let newactiv = null;
  let newmobiel = null;
  if (window.scrollY >= h  * 4){
    newactiv = menu_link[4];
    newmobiel = mobi_link[4];
  }
  else if (window.scrollY >= h  * 3){
    newactiv = menu_link[3];
    newmobiel = mobi_link[3];
  }
  else if (window.scrollY >= h  * 2){
    newactiv = menu_link[2];
    newmobiel = mobi_link[2];
  }
  else if (window.scrollY >= h  ){
    newactiv = menu_link[1];
    newmobiel = mobi_link[1];
  }
  else{
    newactiv = menu_link[0];
    newmobiel = mobi_link[0];
  }
  const preactive = menu.querySelector(".active");
  preactive.classList.remove("active")
  newactiv.classList.add("active")
  const premobiel = mobimenu.querySelector(".active");
  premobiel.classList.remove("active")
  newmobiel.classList.add("active")

}

const menubtn = document.querySelector(".menu-button")



menubtn.onclick = ( ) => {
  mobimenu.classList.toggle("hide")
};