(function clickBurgerMenu(){
  const burgerMenu = document.querySelector(".main-header__burger-menu");
  burgerMenu.addEventListener("click", ()=>{
      burgerMenu.classList.toggle("main-header__burger-menu--active")
      if (burgerMenu.classList.contains("main-header__burger-menu--active")){
        document.querySelector(".main-header__list").classList.add("main-header__list--active")
      }else{
        document.querySelector(".main-header__list").classList.remove("main-header__list--active")
      }
  })
}());