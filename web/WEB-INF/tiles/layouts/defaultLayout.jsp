<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Salud Mental</title>
        <link rel="icon" href='<c:url value="/resources/imagenes/udeaIco.png" />' type="image/png" />
        
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/style.css" /> '>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/dataTables.bootstrap4.min.css" /> '>
        <!-- CSS Bootstrap General -->
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/bootstrap.min.css" /> '>

        <!-- CSS Personalizado -->
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/morris.css" /> '>
        <!-- Fuentes de Iconos -->
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/jquery-ui.min.css" /> '>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/select2.min.css"  /> '> 

        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/fixedHeader.bootstrap.min.css" />'>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/jquery.datetimepicker.min.css" />'>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/buttons.dataTables.min.css" />'>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/fontawesome/css/all.css" />'>
        <link rel="stylesheet" type="text/css" href='<c:url value="/resources/css/responsive.bootstrap.min.css" />'> 

        <script src='<c:url value="/resources/js/jquery-3.2.1.js" />' ></script>
        <script src='<c:url value="/resources/js/jquery-ui.js" />' ></script>
        <script src='<c:url value="/resources/js/select2.min.js" />' ></script>
        <script src='<c:url value="/resources/js/jquery.form-validator.min.js" />' ></script>
        <script src='<c:url value="/resources/js/popper.min.js" />' ></script>  
        <script src='<c:url value="/resources/js/bootstrap.min.js" />' ></script>  
        <script src='<c:url value="/resources/js/knockout-3.5.1.js" />' ></script>
        <script src='<c:url value="/resources/js/jquery.formatCurrency-1.4.0.min.js" />' ></script>
        <script src='<c:url value="/resources/js/jquery.dataTables.min.js" />' ></script>
        <script src='<c:url value="/resources/js/dataTables.fixedHeader.min.js" />' ></script>
        <script src='<c:url value="/resources/js/dataTables.bootstrap4.min.js" />' ></script>
        <script src='<c:url value="/resources/js/dataTables.buttons.min.js" />' ></script>
        <script src='<c:url value="/resources/js/jquery.datetimepicker.full.js" />' ></script>
        <script src='<c:url value="/resources/js/buttons.html5.min.js" />' ></script>
        <script src='<c:url value="/resources/js/buttons.print.min.js" />' ></script>
        <script src='<c:url value="/resources/js/jszip.min.js" />' ></script>
        <script src='<c:url value="/resources/js/raphael-min.js" />' ></script>
        <script src='<c:url value="/resources/js/morris.js" />' ></script>
        <script src='<c:url value="/resources/js/chart.js" />' ></script>
        <script src='<c:url value="/resources/fontawesome/js/all.js" />' ></script>
        <script src='<c:url value="/resources/js/dataTables.responsive.min.js" />' ></script>
        <script src='<c:url value="/resources/js/responsive.bootstrap.min.js" />' ></script>
        <script src='<c:url value="/resources/js/moment.js" />' ></script>
    </head>
    <body>
        <div id="contenedorPpal">
            <header id="header">
                <div id="contenedorA">
                    <!-- inicio Menu Navegación-->
                    <div id='cssmenu'>
                        <ul>
                            <li>
                                <span class="imagenMenu">
                                    <img src='<c:url value="/resources/imagenes/logoUdeaLateral2.png"/> '>
                                </span> 
                            </li>
                            <!-- Inicio Link Home -->
                            <li>
                                <a href='${pageContext.request.contextPath}/index'>
                                    <i class="fas fa-user"></i>
                                    Home
                                </a>
                            </li>
                            <!-- Lin Link Home -->

                            <!-- Inicio Link Administrar/SubItems -->
                            <li class='active'>
                                <a href='#'><i class="fas fa-tachometer-alt"></i>
                                    Administrar
                                </a>
                                <ul>
                                    <li><a href='${pageContext.request.contextPath}/administracion/perfiles'>Perfiles</a></li>
                                    <li><a href='${pageContext.request.contextPath}/administracion/usuarios'>Usuarios</a></li>
                                    <li><a href='${pageContext.request.contextPath}/administracion/personas'>Personas</a></li>
                                </ul>
                            </li>
                            <!-- Fin Link Administrar/SubItems -->

                        </ul>
                    </div>
                    <!-- Fin Menu Navegación-->

                </div>
                <div id="contenedorB">

                    <div id="contenedorC">
                        <!-- notificaciones-->
                        <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i class="fa fa-user fa-fw"></i>
                            </a>
                            <!-- perfil-->
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="${pageContext.request.contextPath}/login/cambiarClave"><i class="fa fa-user ml-1 mr-1"></i>Cambiar Clave</a>
                                </li>
                                <li><a href="${pageContext.request.contextPath}/usuarios/editar"><i class="fas fa-user-edit ml-1 mr-1"></i>Actualizaci�n</a>
                                </li>
                                <li class="divider"></li>
                                <li><a href="${pageContext.request.contextPath}/logout"><i class="fas fa-sign-out-alt ml-1 mr-1"></i>Salir</a>
                                </li>
                            </ul>
                            <!-- /.dropdown-user -->
                        </li>
                    </div>
                </div>           
            </header>
            <section id="site-content">
                <tiles:insertAttribute name="body" />
            </section>
            <footer id="footer">
                <tiles:insertAttribute name="footer" />
            </footer>
        </div>
        <script type="text/javascript">
            function abrirOpcion(opcion) {
                window.location.href = '${pageContext.request.contextPath}' + opcion;
            }
        </script>    
        <script src='<c:url value="/resources/js/funciones.js" />' ></script>
    </body>
</html>