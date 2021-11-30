$("#btn-plan").on("click", function(){
        
    $("html, body").animate( {
        scrollTop: $("#boton-banner").offset().top
    });
})

$("#btn-servicios").on("click", function(){
        
    $("html, body").animate( {
        scrollTop: $("#servicios").offset().top
    });
})

$("#btn-nosotros").on("click", function(){
        
    $("html, body").animate( {
        scrollTop: $("#footer").offset().top
    });
})