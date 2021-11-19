$(() => {

    $("nav").fadeOut("fast", function (){
        $("nav").fadeIn(3000);
    });

    $("#h1-banner").fadeOut("fast", function(){
    
        $("#h1-banner").fadeIn(3000);
    
       
    
    });

    $("#p-banner").fadeOut("fast", function(){
        
        $("#p-banner").slideToggle(3000);
    });
    
    $("#planes").on("click", function(){
        
        $("html, body").animate( {
                scrollTop: $("#formulario").offset().top
            
        });
    })
})
