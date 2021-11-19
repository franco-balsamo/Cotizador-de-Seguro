$("#switch").on("click", function(){ 
    $("body").toggleClass("dark");
    $(this).toggleClass("active");

    //Guardamos el modo en el local storage

    if ($("body").contains("dark")){
        localStorage.setItem("dark-mode", "true");
    } else{
        localStorage.setItem("dark-mode", "false");
       }
});

//Obtenemos el modo actual del local storage

if (localStorage.getItem("dark-mode") === "true"){
    $("body").addClass("dark");
    $("#switch").addClass("active");
} else {
    $("body").removeClass("dark");
    $("#switch").removeClass("active");
}