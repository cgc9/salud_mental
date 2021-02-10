    
$(document).ready(function () {
    /* encabezado*/

    // $('#md_video').modal('toggle')

    $(window).scroll(function (event) {

        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        if($(this).scrollTop()<$nav.height())
        {
            if($("#custom-head").css("display","none"))
            {
                $("#custom-head").css("display","block");
                $("#ocultaMain").find("span").removeClass().addClass("fa fa-angle-double-up");
            }
        }
    });

   $("#facebook").parent().addClass("facebook");
   $("#twitter").parent().addClass("twitter");
   $("#youtube").parent().addClass("youtube");
   $("#abajo").parent().attr("id","ocultaMain");

    var n = 0;
    $('#ocultaMain').click(function () {
        if (n == '0') {

            document.getElementById("custom-head").style.display = "none";
            $(this).find("span").removeClass().addClass("fa fa-angle-double-down");
            // $(".navbar-fixed-top").addClass('scrolled');
            $("#encabezado").css("margin-top", "50px");
            n = 1;
        } else {
            document.getElementById("custom-head").style.display = "block";
            // $(this).find("span").removeClass().addClass("fa fa-angle-double-up");
            // $(".navbar-fixed-top").removeClass('scrolled');
            $("#encabezado").css("margin-top", "0px");
            n = 0;

        }
    });


    $('#ocultaMain2').click(function () {

        if (n == '0') { //verifica si la opcion de N es igual a cero oculta el menu

             $(".manlistas").css("display", "none");
            
            document.getElementById("flefooter").className = "fa fa-angle-double-up";
             $("#footer").css("padding", "0");

            n = 1;
        } else {
            $(".manlistas").css("display", "block");
            
            document.getElementById("flefooter").className = "fa fa-angle-double-down";
             $("#footer").css("padding", "25px");
            
            n = 0;

        }
    });
    
    $(".facebook").click(function(){
        window.open("https://www.facebook.com/facultadnacional.saludpublica/","Facebook","width=700,height=400");
    });
    $(".twitter").click(function(){
        window.open("https://twitter.com/FacNSaludPublic","Twitter","width=700,height=400");
    });
    $(".youtube").click(function(){
        window.open("https://www.youtube.com/channel/UCtC4nePZ_rYxLekd_qH0I7g","YouTube","width=700,height=400");
    });



    $("#btnbuscar").on("click",function(e)
    {    e.preventDefault();   
        var buscar = $("#inpubus");
        buscar.val(buscar.val().replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*")); 
        var textarea = $('#formdocumentacion');    
        var enew = '';  
        if(buscar.val()!="")
        {
                enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
            textarea.html(enew);  
            var query = new RegExp("("+buscar.val()+")", "gi");    
            newtext= textarea.html().replace(query, "<mark>$1</mark>");    
            newtext= newtext.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"</mark><mark>");    

            textarea.html(newtext); 
        }
        else
        {    
            enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
            textarea.html(enew);
            location.reload();  
        }


        
        
    });
    

});






