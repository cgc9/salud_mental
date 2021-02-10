window.onload = function () {
    var data =
        "<div class='container' style='padding-left:50px'>" +
        "<div class='row'>" +
        "<div class='col-md-3'>" +
        "<img src='<c:url value='/resources/assets/img/logofnsp.png'/>' alt='Universidad de Antioquia - Facultad Nacional de Salud Pública' style='width: 230px;'>" +
        "</div>" +
        "<div class='col-md-5' align='right'>S&iacute;guenos:&nbsp;&nbsp;" +
        "<a class='fab fa-facebook-f circle facebook' data-toggle='tooltip' data-placement='bottom' title='Facebook'></a>" +
        "<a class='fab fa-twitter circle twitter' data-toggle='tooltip' data-placement='bottom' title='Twitter'></a>" +
        "<a class='fab fa-youtube circle youtube' data-toggle='tooltip' data-placement='bottom' title='Youtube'></a>" +
        "</div>" +
        "<div class='col-md-4' align='right'>" +
        "<form class='navbar-form navbar-left'>" +
        "<div class='form-group'>" +
        "<input type='text' class='form-control' id= 'inputbuscarh' placeholder='Escriba aquí su búsqueda'>" +
        "</div>" +
        "<button type='submit' style='margin-left:5px;' id= 'btnbuscarh'class='btn btn-success'>Buscar</button>" +
        "</form>" +
        "</div>" +
        "<div class='col-md-4'>" +
        "<div id='cssmenu'>" +
        "<ul>" +
        "<li class='active'><a href='#'>Ingresar</a>" +
        "<ul>" +
        "<li><a href='iniciarsesion.html'>Iniciar sesion</a></li>" +
        "<li><a href='#'>Registrarse</a></li>" +
        "<li><a href='#'>Obtener/ Recuperar</a></li>" +
        "</ul>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>"
    $('#custom-head').append(data);


    var footer =
        '<div class="col-xs-12 col-sm-3">' +
        '<h4>Oríentese</h4>' +
        '<div class="manlistas">' +
        '<HR>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/">Atención al ciudadano</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/canales-atencion/">Canales de atención al ciudadano</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/contdirectoriotelefonico/">directorio telefónico</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/notificaciones-judicales-aviso/!ut/p/z1/rVFdb4JAEPwt_gBye3zzSBCxVEBAFHgxJx72rIApqGl_fc-XNlqtMWGfdpOZyewMylGK8poc2YZ0rKnJjt9Zri51wxKxKcMkiOY6mGqcOL4TYkcFtLgCjEdngGwakhHg2MYof4oPr1gBM7Sn_iywpkNXfJL_F3Dmw50xAc1RZqHM0IeRHaIc5fuCrVGmUakAjKkAFIuCLGtUMIgIglRqBDS1XIklIPeRNx6e-OFZ3obLku5NYHXZoLRo6o7WbM1X0v4cbUXrA0rrpmMlK0jB46etsD2s-bHjGy-lbdBi-OsV89_zSwtO5FrcgmXaWjzHUQjXgBv1XAJ00Ec8_9nElhMPIFCuATcKehRxxivS7uekofjJ4P8X9NS-BaWeBW25b8F-Xx57rvK04L5KkuR9pX-eaArsZavsj1-zsqqWvi-QlQ4nczD4BsvHcTY!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?urile=wcm%3Apath%3A%2FPortalUdeA%2FasPortalUdeA%2FasHomeUdeA%2FasInstitucional%2FAtencion%20al%20ciudadano%2FAtenci!c3!b3n%20al%20ciudadano%2FContenido%2FasContenidosMenu%2Fnotificaciones-judicales-aviso">Notificaciones judiciales y por aviso</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/contpreguntasfrecuentes/">Preguntas frecuentes</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/normativa">Normativa</a></p>' +
        '<p><a  href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/transparencia/">Transparencia  y acceso a la información</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/mapa-sitio">Mapa del sitio</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/somos-udea/empleados/seguridad-personas-bienes/autorizaciones/contenido/asmenulateral/ingreso-salida-vehiculos/!ut/p/z1/1VVLc5swEP4rzsFHRsvDQI8EmxmnNnEdu8ZcMjIIWy1IBIFb59dXpGknTmo87uiQcGK1q293v30IxShCMcN7usU15QznUl7H9r37yTd0z4IJhOMheLa59BfjCQTXFlp1GQCYKD6tHvlO9_3WQXsfTnweoK8oRnHC6rLeoXXJqxrnTUpwH7A4lna8IH_-BS-4-C2QoswJTrnogyDbpqIpTnu4V5JKSAJE79DbUMKIVOOm5hV9xIlkppUTzmrCaMpbxIKwJsc1qXDeB8q2FRFcEziXcNqe7GjS5Fy0oZYJTdHaxQkMMqlLs42tWUmGNTcxHM1wbSC6bW9M5ww1LXfxZaX5rA_A-zKahYtbfza8Mc6XJu4yCYdOt8FTiF0GT-1xbOCCG8ggF5ORtZwC3A7eILzN4lyLrCUPzskg70x0d2FhugENQzWgrhpQdcpjUA2omsOxag69y1O-OTcsctnSbw8PsSc3WrtcftYoeu8rTcZsVFN_upVU4HqnUZZxFHX6RdGxXxT99StVL_2i6KTfzuoEc8X9E8wVj0zgWKoBddWAqlMObbUj075x_26__-injzh7ZbFcFq55oNr3-Wjugjko94-LrCjuw1DDm-eDCVl5s1dn0mg1PPzwrq5-AUfoKqU!/dz/d5/L2dBISEvZ0FBIS9nQSEh/?urile=wcm%3Apath%3A%2FPortalUdeA%2FasPortalUdeA%2FasHomeUdeA%2FasSomosUdeA%2FEmpleados%2FSeguridad%20a%20personas%20y%20bienes%2FAutorizaciones%2FContenido%2FasMenuLateral%2Fingreso-salida-vehiculos">Pico y placa en Ciudad Universitaria</a></p>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-3">' +
        '<h4>Servicios en línea</h4>' +
        '<div class="manlistas">' +
        '<HR>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/atencion-ciudadano/atencion-ciudadano/contenido/ascontenidosmenu/pqrs/!ut/p/z1/zVJNj4IwEP0revBIWihgORIWv1b8xg8uphbQbqSgVLPZX7_FRLOyusbEw_bU6bx5nXnzQADmIODkyNZEsJSTrYwXgbnElqOptg67_dEUQ9sc-81ec6g2TQhmJUCrUQB020JWXx27KgieqofvqgHtoTvoTfrO4K2jPVn_G1DUwzvHhmAKAhBQLjKxAYss3QuyPYQRqUGSX0ebNInOd8ZzwcSBnjSSDyLixb1CthXKDiEJCU_Pz1WKqitUztGUyywLC1h-CfIk4ocazHb7vGgroywEixihOtJXVIFqjBUdQ0Mhmh4pMTJJRDXVIpSCziOd5CK1ved4a0lLxEZhPE7B_PIzmJfbAPNTG7KOfex2gS1VKvKfQib-kUyzQqifozdHHUeO7thufTxVR0NYBtyw6DUAQ9yQHpx0Xd33IOwbZcANkz6y2ULatH5_P3UwfnLhfxN65qsJ0YsJXf3VhK8dueV1jKcJs8T3_QQjY7vGwmqztkJWGCIjO35N4iRZ9jy7-g1jDDgi/dz/d5/L2dBISEvZ0FBIS9nQSEh/?urile=wcm%3Apath%3A%2FPortalUdeA%2FasPortalUdeA%2FasHomeUdeA%2FasInstitucional%2FAtencion%20al%20ciudadano%2FAtenci!c3!b3n%20al%20ciudadano%2FContenido%2FasContenidosMenu%2Fpqrs">Peticiones,quejas, reclamos y sugerencias</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/registro-usuarios/registro-usuarios">Registro de usuarios externos</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/login">Iniciar sesión del Portal</a></p>' +
        '<p><a href="http://correo.udea.edu.co/">Consultar correo electrónico</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/generales/interna/!ut/p/z1/xVRNc4IwEP0tHnrMZPk0HBm0VkW0ClZycSJEpRWCQDttf32DbQ-WUccZZ5pT3uzbnfd2s8EULzDN2FuyYVUiMraTOKTmkliOqtg6uL3pwAHbdOxuezZ3VaLip2MCeP2OJGiB4_ddANAwPR0e9ZRG_lAxwH7sTjx_7Ew6A_Xa_AaBntc_xxTTKKvyaovDXBQV273GnN0BK4_RVqT8916KVJTfIC_Empei4GUdiERW8SyJxQHFvKxYxH5QnhRMRksUi4jLC4pYxeOC1QLyKIlxaBptolgsRvraiJDOTBOtgGiIcw1gZVgWJ-Sv4aaj2jCcODbIfHqup4eRHRMIkHs5E9_t6sEIYGw0KjSHdklFKF20T7oYK3h2ZVvOF9Th1gXVWxe8teXh9QoHl5ZF_gbJ835Pbbky9Ut_r_Dif3YmT4MgSIn2gV6mD5_-Ok2XnofYioBm7Dat1hc4she4/dz/d5/L2dBISEvZ0FBIS9nQSEh/?page=udea.generales.interna&urile=wcm%3Apath%3A%2FPortalUdeA%2FasPortalUdeA%2FasHomeUdeA%2FasSomosUdeA%2FProfesores%2FasContenidos%2FasDestacados%2Faspirantes-docente-catedra">Aspirantes a docente de cátedra</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/saluda/consultar-afiliados">Consultar afiliados al Programa de Salud UdeA</a></p>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-3">' +
        '<h4>Proyectos estratégicos</h4>' +
        '<div class="manlistas">' +
        '<HR>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/sistema-bibliotecas">Sistema de Bibliotecas</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/cultura/museo-universitario">Museo universitario</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/editorial">Editorial</a></p>' +
        '<p><a href="http://www.parquedelemprendimiento.com/">Parque E</a></p>' +
        '<p><a href="http://aprendeenlinea.udea.edu.co/">Aprende en línea</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/extension-UdeA/practicas">Prácticas</a></p>' +
        '<p><a href="http://parquedelavida.com/">Parque de la vida</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/donaciones">Fondo de donaciones</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/saluda">Programa de salud</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/salud-seguridad">Seguridad y salud en el trabajo</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/institucional/habilitacion-servicios-salud">Habilitación de servicios de salud</a></p>' +
        '</div>' +
        '</div>' +
        '<div class="col-xs-12 col-sm-2">' +
        '<h4><SPAN STYLE="font-size: 16px">Estudiar en la</SPAN> U de A</h4>' +
        '<div class="manlistas">' +
        '<HR>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/estudiar-udea/pregrado/oferta/">Pregrado</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/estudiar-udea/posgrado/oferta/">Posgrado</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/estudiar-udea/udea-educacion-virtual/">Ude@ Educación virtual</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/estudiar-udea/educacion-continua">Formación continua</a></p>' +
        '<p><a href="http://www.udea.edu.co/wps/portal/udea/web/inicio/estudiar-udea/otras-opciones">Otras opciones</a></p>' +
        '</div>' +
        '</div>'  
    $('#custom-foot').append(footer);




    $(".facebook").click(function () {
        window.open("https://www.facebook.com/facultadnacional.saludpublica/", "Facebook", "width=700,height=400");
    });
    $(".twitter").click(function () {
        window.open("https://twitter.com/FacNSaludPublic", "Twitter", "width=700,height=400");
    });
    $(".youtube").click(function () {
        window.open("https://www.youtube.com/channel/UCtC4nePZ_rYxLekd_qH0I7g", "YouTube", "width=700,height=400");
    });

    // $("#btnbuscarh").on("click",function(e)
    // {    e.preventDefault();   
    //     var buscar = $("#inputbuscarh");
    //     buscar.val(buscar.val().replace(/(\s+)/,"(<[^>]+>)*$1(<[^>]+>)*")); 
    //     var textarea = $('#body');    
    //     var enew = '';  
    //     if(buscar.val()!="")
    //     {
    //             enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
    //         textarea.html(enew);  
    //         var query = new RegExp("("+buscar.val()+")", "gi");    
    //         newtext= textarea.html().replace(query, "<mark>$1</mark>");    
    //         newtext= newtext.replace(/(<mark>[^<>]*)((<[^>]+>)+)([^<>]*<\/mark>)/,"</mark><mark>");    

    //         textarea.html(newtext); 
    //     }
    //     else
    //     {    
    //         enew = textarea.html().replace(/(<mark>|<\/mark>)/ig, "");    
    //         textarea.html(enew);
    //         location.reload();  
    //     }


        
        
    // });
    

    // $('#ocultaMain2').click(function () {

    //     if (n == '0') { //verifica si la opcion de N es igual a cero oculta el menu

    //         $(".manlistas").css("display", "none");
    //         document.getElementById("flefooter").className = "fa fa-angle-double-up";
    //         $("#footer").css("padding", "0");
    //         n = 1;
    //     } else {
    //         $(".manlistas").css("display", "block");
    //         document.getElementById("flefooter").className = "fa fa-angle-double-down";
    //         $("#footer").css("padding", "20px");

    //         n = 0;

    //     }
    // });


    var men =


        '<li class="dropdown">' +
        '<a style="color:white"  href="index.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inicio</a>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Apropiación social <span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="webinar.html"><i class=""></i>Webinars</a></li>' +
        '<li><a href="fonoteca.html"><i class=""></i>Fonotecas</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Salud mental online<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href=""><i class=""></i>Telesalud</a></li>' +
        '<li><a href=""><i class=""></i>Línea de la felicidad</a></li>' +
        '<li><a href=""><i class=""></i>App SAMU</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Educación<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href=""><i class=""></i>Educación no formal</a></li>' +
        '</ul>' +
        '</li>' +
        '</ul>' +
        '<ul class="nav navbar-nav navbar-right">' +
        '<li class="dropdown">' +
        '<a style="color:white"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Datos & software</a>' +
        '</li>' +
        '<li><a id="ocultaMain" style="color:aliceblue; " class="btn btn-sm-1" role="button" aria-haspopup="true" aria-expanded="false"><span id="abajo" class="fa fa-angle-double-up"></span></a></li>' 
     

    $('menu').append(men)


/*
    '<div class="container">' +
        '<nav class="navbar navbar-default navbar-expand-md ">' +
        '<div class="container-fluid">' +
        '<div class="navbar-header">' +
        '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '</button>' +
        '</div>' +
        '<div class="collapse navbar-collapse" style="padding-right:px;" id="myNavbar">' +

        '<ul class="nav navbar-nav ">' +
        '<li class="dropdown">' +
        '<a style="color:white"  href="index.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inicio</a>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Apropiación social <span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href="webinar.html"><i class=""></i>Webinars</a></li>' +
        '<li><a href="fonoteca.html"><i class=""></i>Fonotecas</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Salud mental online<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href=""><i class=""></i>Telesalud</a></li>' +
        '<li><a href=""><i class=""></i>Línea de la felicidad</a></li>' +
        '<li><a href=""><i class=""></i>App SAMU</a></li>' +
        '</ul>' +
        '</li>' +
        '<li class="dropdown">' +
        '<a style="color:white" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Educación<span class="caret"></span></a>' +
        '<ul class="dropdown-menu">' +
        '<li><a href=""><i class=""></i>Educación no formal</a></li>' +

        '</ul>' +
        '</li>' +


        // <!-- <li class="dropdown">
        //     <a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"
        //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Opción 4 <span class="caret"></span>
        //     </a>
        //     <ul class="dropdown-menu">
        //         <li><a href=""><i class=""></i>Op1</a></li>
        //     </ul>
        // </li>
        // <li class="dropdown">
        //     <a style="color:white" class="nav-link dropdown-toggle" href="#" role="button"
        //         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //         Opción 5 <span class="caret"></span>
        //     </a>
        //     <ul class="dropdown-menu">
        //         <li><a href=""><i class=""></i>Op1</a></li>
        //     </ul>
        // </li> -->
        '</ul>' +
        '<ul class="nav navbar-nav navbar-right">' +
        '<li class="dropdown">' +
        '<a style="color:white"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Datos & software</a>' +
        '</li>' +
        '<li><a id="ocultaMain" style="color:aliceblue; " class="btn btn-sm-1" role="button" aria-haspopup="true" aria-expanded="false"><span id="abajo" class="fa fa-angle-double-up"></span></a></li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '</nav>' +
        '</div>'*/

}






