$(document).ready(function(){

    $("nav a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            },800, function(){
                window.location.hash = gato;
            });
        }
    });



    $(".container-fluid").click(function(){
        alert("Ingresa tus datos por favor!!")
    })

    /* Esto no funcionó */

    $(".container-fluid a").click(function(alert){
        if (this.hash !== "") {
            alert.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            },800, function(){
                window.location.hash = gato;
            });
        }
    });


    $('[data-toggle="popover"]').popover()
    
    /* Hide card-text  */
    $(".carta1 :button").click(function(){
        $(".carta1 .card-text" ).hide(600)
    });

    $(".carta2 :button").click(function(){
        $(".carta2 .card-text" ).hide(600)
    });

    $(".carta3 :button").click(function(){
        $(".carta3 .card-text" ).hide(600)
    });

    $(".carta4 :button").click(function(){
        $(".carta4 .card-text" ).hide(600)
    });

    $(".carta5 :button").click(function(){
        $(".carta5 .card-text" ).hide(600)
    });

    $(".carta7 :button").click(function(){
        $(".carta7 .card-text" ).hide(600)
    });

    

    /* Show Card-text  */
    $(".carta1 .card-body").click(function(){
        $(".carta1 .card-text").show(600)
    });

    $(".carta2 .card-body").click(function(){
        $(".carta2 .card-text").show(600)
    });

    $(".carta3 .card-body").click(function(){
        $(".carta3 .card-text").show(600)
    });

    $(".carta4 .card-body").click(function(){
        $(".carta4 .card-text").show(600)
    });

    $(".carta5 .card-body").click(function(){
        $(".carta5 .card-text").show(600)
    });

    $(".carta7 .card-body ").click(function(){
        $(".carta7 .card-text").show(600)
    });

   
});



