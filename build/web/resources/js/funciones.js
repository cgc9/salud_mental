// JavaScript Document
$(document).ready(function () {

    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Juv', 'Vie', 'Sáb'],
        dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $('[data-toggle="tooltip"]').tooltip();
    $(".js-select-basic-single").select2({placeholder: "Seleccione"});
    $('.fecha').datepicker();
    $('.fecha2').datepicker({
        yearRange: "-150:+0",
        changeMonth: true,
        changeYear: true
    });
    $('.fecha3').datepicker(
            {
                dateFormat: 'mm/dd/yy'
            });
    $('.fechahora').datetimepicker();
    
    $('#radioBtn a').on('click', function () {
        var sel = $(this).data('title');
        var tog = $(this).data('toggle');
        $('#' + tog).prop('value', sel);

        $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
        $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
    });

});


$(document).on('click', '#btnborrar', function (event) {
    event.preventDefault();
    $(this).closest('tr').remove();
});

$(".btnactivo").click(function () {
    var valor = $(this).val();

    if (valor === "activo")
    {
        $(this).find('i').removeClass('fa-unlock').addClass('fa-lock');
        $(this).val("inactivo");

    } else
    {
        $(this).find('i').removeClass('fa-lock').addClass('fa-unlock');
        $(this).val("activo");

    }

});

function obtenerValor(value) {
    if( !value) {
        return '';
    }
    
    return value;
}