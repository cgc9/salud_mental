/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.fnsp.saludMental.repositorios;


import co.edu.fnsp.saludMental.entidades.TipoIdentificacion;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

/**
 *
 * @author William
 */
@Repository("repositorioMaestro")
public class RepositorioMaestro implements IRepositorioMaestro {

    private SimpleJdbcCall obtenerTiposIdentificacion;


    @Autowired
    public void setDataSource(DataSource dataSource) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        jdbcTemplate.setResultsMapCaseInsensitive(true);

        this.obtenerTiposIdentificacion = new SimpleJdbcCall(jdbcTemplate).withProcedureName("obtenerTiposIdentificacion").
                returningResultSet("tiposIdentificacion", BeanPropertyRowMapper.newInstance(TipoIdentificacion.class));
    }

    @Override
    public List<TipoIdentificacion> obtenerTiposIdentificacion() {
        Map resultado = obtenerTiposIdentificacion.execute(new HashMap<>());
        List<TipoIdentificacion> tiposIdentificacion = (ArrayList<TipoIdentificacion>) resultado.get("tiposIdentificacion");

        return tiposIdentificacion;
    }
  
}
