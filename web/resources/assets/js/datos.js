$(document).ready(function () {
    var table = $('#datosTable').DataTable({
        "destroy": true,
        "language": {
            "sProcessing": "Procesando...",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "No se encontraron resultados",
            "sEmptyTable": "Ningún dato disponible en esta tabla",
            "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix": "",
            "sSearch": "Buscar:",
            "sUrl": "",
            "sInfoThousands": ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            }
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
    });

    $('#tipoinput').on('keyup', function () {
        table
            .columns(0)
            .search(this.value)
            .draw();
    });
    $('#temainput').on('keyup', function () {
        table
            .columns(1)
            .search(this.value)
            .draw();
    });
    $('#descripinput').on('keyup', function () {
        table
            .columns(2)
            .search(this.value)
            .draw();
    });
    $('#lineainput').on('keyup', function () {
        table
            .columns(3)
            .search(this.value)
            .draw();
    });
    $('#fechainput').on('keyup', function () {
        table
            .columns(4)
            .search(this.value)
            .draw();
    });
    $('#autorinput').on('keyup', function () {
        table
            .columns(5)
            .search(this.value)
            .draw();
    });

    $('#motorinput').on('keyup', function () {
        table
            .columns(6)
            .search(this.value)
            .draw();
    });
    $('#versioninput').on('keyup', function () {
        table
            .columns(7)
            .search(this.value)
            .draw();
    });

    $('#tabEventos a:first').on('click', function () {
        table
            .columns(0)
            .search("")
            .draw();
    });

    $('#tabEventos a:eq( 1 )').on('click', function () {
        table
            .columns(0)
            .search("Base de datos")
            .draw();
    });
    $('#tabEventos a:eq( 2 )').on('click', function () {
        table
            .columns(0)
            .search("Archivo")
            .draw();
    });

    $('#tabEventos a:last').on('click', function () {
        table
            .columns(0)
            .search("Aplicación móvil")
            .draw();
    });
    
});