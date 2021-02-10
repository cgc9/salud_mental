$(document).ready(function () {
    var table = $('#tblvideo').DataTable({
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

    table.clear().draw();

    $('#fechinput').on('keyup', function () {
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
    $('#invinput').on('keyup', function () {
        table
            .columns(2)
            .search(this.value)
            .draw();
    });
    $('#btnmas').click(function () {
        $('#fecha_grab').val('');
        $('#intema').val('');
        $('#ininvitados').val('');
    });



    linksVideos = ["https://www.youtube.com/embed/xPWgGA8PXxM", "https://www.youtube.com/embed/drg_E9DNFJk"]
    fecha = ["Febrero 03 de 2017", "Enero 20 de 2019"]
    temas = ["La salud, el medio ambiente y enfermedades asociadas a la pobreza", "Conversatorio sobre salud mental"]
    invitados = ["Jose Pablo Escobar Vasco", "María Elena López"]
    for (i = 0; i < fecha.length; i++) {
        table.row.add([fecha[i], temas[i], invitados[i], '<a href="" id="btnVerVideo" class="btn btn-success" data-target="#md_video" data-toggle="modal"><iclass=""></i>Ver video</a>']).draw();
    }


    $('#tblvideo tbody').on("click", "td", function() {
         $('#frameVideo').attr('src', linksVideos[table
            .row( this )
            .index()]);
      });

 
     $('.close').on('click', () =>{
        $('#frameVideo').removeAttr('src');
      })

});