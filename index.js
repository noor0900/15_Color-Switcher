const gearButton = document.querySelector(".gear");
const colorcontainer = document.querySelector(".btndiv");
const colors = document.querySelectorAll(".color");
const h1 = document.querySelector("h1");
const li = document.querySelector("li");

// console.log(colors);

 const gearicone= document.querySelector(".fa-gear"); 

colors.forEach((color) => {
    color.addEventListener("click", (e) => {
        // console.log(e.target.value);
        document.querySelector("body").style.backgroundColor = e.target.value;
        h1.style.color = e.target.value;
        li.style.color = e.target.value;
        gearicone.style.color = e.target.value
      });

});



gearButton.onclick = () => {
    colorcontainer.classList.toggle("right")
}







// gearButton.onclick = () => {
//     gearButton.classList.add("right")
// }
// gearButton.onclick = () => {
//     gearButton.classList.remove("right")
// }

// gearButton.onclick = () => {
//     gearButton.classList.replace("right", "left")
// }