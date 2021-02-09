/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.fnsp.saludMental.servicios;

import co.edu.fnsp.saludMental.entidades.TipoIdentificacion;
import co.edu.fnsp.saludMental.repositorios.IRepositorioMaestro;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author William
 */

@Service("servicioMaestro")
public class ServicioMaestro implements IServicioMaestro {

    @Autowired
    private IRepositorioMaestro repositorioMaestro;
    
    @Override
    public List<TipoIdentificacion> obtenerTiposIdentificacion() {
        return repositorioMaestro.obtenerTiposIdentificacion();
    }

}
