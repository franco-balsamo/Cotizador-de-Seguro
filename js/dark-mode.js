const btnSwitch = document.querySelector("#switch");

$("#switch").click( () => {
document.body.classList.toggle("dark");
btnSwitch.classList.toggle("active");

//Guardamos el modo en el local storage
    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
       }
});

//Obtenemos el modo actual del local storage
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
} else{
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}