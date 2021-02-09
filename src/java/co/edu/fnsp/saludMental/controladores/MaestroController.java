/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.fnsp.saludMental.controladores;

import co.edu.fnsp.saludMental.servicios.IServicioMaestro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 *
 * @author William
 */
@Controller
@RequestMapping(value = "/maestros")
public class MaestroController {
    
    @Autowired
    private IServicioMaestro servicioMaestro;

    

}

