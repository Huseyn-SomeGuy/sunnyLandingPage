let nav = document.getElementById("nav-elements");
let hamburger = document.getElementById("hamburger");
let navElement = document.querySelectorAll(".nav-element");
console.log(navElement);

hamburger.addEventListener("click", () =>{
   nav.classList.toggle("show");
})

for (let i = 0; i < navElement.length; i++) {
   const element = navElement[i];
   element.addEventListener("click", () =>{
      current = document.getElementsByClassName("active");
      if(current.length > 0){
         current[0] = current[0].classList.remove("active");
      }
      element.classList.add("active");
   })
}












