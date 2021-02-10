$(document).ready(function() {
	var table =$('#tbdiplomado').DataTable({
                "destroy":true,
                "language":{
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscar:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"} 
            },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    } 
        });
$('#fechinput').on( 'keyup', function () {
                table
                .columns(0)
                .search( this.value )
                .draw();
            } );
  $('#temainput').on( 'keyup', function () {
                table
                .columns(1)
                .search( this.value )
                .draw();
            } );
		var tbcursopres =$('#tbcursopres').DataTable({
                "destroy":true,
                "language":{
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscar:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"} 
            },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    } 
        });$('#fechinput2').on( 'keyup', function () {
                tbcursopres
                .columns(0)
                .search( this.value )
                .draw();
            } );
  $('#temainput2').on( 'keyup', function () {
                tbcursopres
                .columns(1)
                .search( this.value )
                .draw();
            } );
        var tbcursoonline =$('#tbcursoonline').DataTable({
                "destroy":true,
                "language":{
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscar:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"} 
            },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    } 
        });$('#fechinput3').on( 'keyup', function () {
                tbcursoonline
                .columns(0)
                .search( this.value )
                .draw();
            } );
  $('#temainput3').on( 'keyup', function () {
                tbcursoonline
                .columns(1)
                .search( this.value )
                .draw();
            } );
        var tbmoocs =$('#tbmoocs').DataTable({
                "destroy":true,
                "language":{
                 "sProcessing":     "Procesando...",
                 "sLengthMenu":     "Mostrar _MENU_ registros",
                 "sZeroRecords":    "No se encontraron resultados",
                 "sEmptyTable":     "Ningún dato disponible en esta tabla",
                 "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                 "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                 "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                 "sInfoPostFix":    "",
                 "sSearch":         "Buscar:",
                 "sUrl":            "",
                 "sInfoThousands":  ",",
                 "sLoadingRecords": "Cargando...",
                 "oPaginate": {
                     "sFirst":    "Primero",
                     "sLast":     "Último",
                     "sNext":     "Siguiente",
                     "sPrevious": "Anterior"} 
            },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    } 
        });
        $('#fechinput4').on( 'keyup', function () {
                tbmoocs
                .columns(0)
                .search( this.value )
                .draw();
            } );
  $('#temainput4').on( 'keyup', function () {
                tbmoocs
                .columns(1)
                .search( this.value )
                .draw();
            } );

        $("#btndiplomado").click(function(){
            $(".content").css("height","100%");
            $("#pnldiplomado").css("display","block");
            $("#pnlcursopres").css("display","none");
            $("#pnlcursonline").css("display","none");
            $("#pnlmoocs").css("display","none");
        });
        $("#btncurpresen").click(function(){
            $(".content").css("height","100%");
            $("#pnldiplomado").css("display","none");
            $("#pnlcursopres").css("display","block");
            $("#pnlcursonline").css("display","none");
            $("#pnlmoocs").css("display","none");
        });
        $("#btncursonline").click(function(){
            $(".content").css("height","100%");
            $("#pnldiplomado").css("display","none");
            $("#pnlcursopres").css("display","none");
            $("#pnlcursonline").css("display","block");
            $("#pnlmoocs").css("display","none");
        });
        $("#btnmoocs").click(function(){
            $(".content").css("height","100%");
            $("#pnldiplomado").css("display","none");
            $("#pnlcursopres").css("display","none");
            $("#pnlcursonline").css("display","none");
            $("#pnlmoocs").css("display","block");
        });


		$("#btnaddpart").click(function(){
			var  nom= $("#lblnombres").val();
			var  ape= $("#lblapellidos").val();
			var  correo= $("#lblcorreo").val();
			var  rol= $("#sltrol").val();
			tbparticipante.row.add([nom+" "+ape,correo,rol,"<button class='btn btn-danger btn-sm btnborrar' type='button'><i class='fa fa-times' aria-hidden='true'></i></button>"]).draw(true);
			$("#md_participantes").modal("hide");
			$("#lblnombres").val("");
			$("#lblapellidos").val("");
			$("#lblcorreo").val("");
			$("#sltrol").val("").trigger("change.select2");
		});
		$('#tbparticipante').on('click','.btnborrar', function(){
		  tbparticipante.row($(this).parents('tr')).remove().draw(false);
		});
		

});