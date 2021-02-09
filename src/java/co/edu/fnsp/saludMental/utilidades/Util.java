/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.fnsp.saludMental.utilidades;


import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 *
 * @author William
 */
public class Util {

    private static final SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
    private static final SimpleDateFormat simpleDateTimeFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm");
    private static final SimpleDateFormat simpleTimeFormat = new SimpleDateFormat("HH:mm");
    private static final SimpleDateFormat simpleLongDateFormat = new SimpleDateFormat("dd 'de' MMMM 'de' yyyy", new Locale("es", "CO"));
    private static final DecimalFormat decimalFormat = new DecimalFormat("'$'###,###");

    public static String obtenerFechaFormateada(Date fecha) {
        if (fecha != null) {
            return simpleDateFormat.format(fecha);
        }

        return "";
    }

     public static String obtenerFechaHoraFormateada(Date fecha) {
        if (fecha != null) {
            return simpleDateTimeFormat.format(fecha);
        }

        return "";
    }
    
    public static String obtenerHoraFormateada(Date fecha) {
        if (fecha != null) {
            return simpleTimeFormat.format(fecha);
        }

        return "";
    }
    
    public static String obtenerFechaLargaFormateada(Date fecha) {
        if (fecha != null) {
            return simpleLongDateFormat.format(fecha);
        }

        return "";
    }
    
    public static Date obtenerFecha(String fecha) throws ParseException {
        return simpleDateFormat.parse(fecha);
    }

    public static Date obtenerFechaHora(String fecha) throws ParseException {
        return simpleDateTimeFormat.parse(fecha);
    }
    
    public static String obtenerNumeroFormatoMoneda(Long valor) {
        if (valor != null) {
            return decimalFormat.format(valor);
        }

        return "";
    }

    public static long obtenerNumero(String numero) throws ParseException {
        return (long) decimalFormat.parse(numero);
    }

}
