/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.edu.fnsp.saludMental.utilidades;

import co.edu.fnsp.saludMental.entidades.OpcionMenu;
import co.edu.fnsp.saludMental.entidades.Usuario;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class SaludMentalInterceptor extends HandlerInterceptorAdapter {

    /**
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request,
            HttpServletResponse response, Object handler) throws Exception {

        if (SecurityContextHolder.getContext().getAuthentication() != null && SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof Usuario) {
            boolean existe = false;
            Usuario usuario = (Usuario) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            for (OpcionMenu opcionMenu : usuario.getOpcionesMenu()) {
                existe = false;
                if (opcionMenu.getUrl() != null && request.getRequestURI().toLowerCase().contains(opcionMenu.getUrl().toLowerCase())) {
                    existe = true;
                    break;
                }
            }
            if (!existe) {
                //response.sendRedirect(request.getContextPath() + "/index");
            }
        }

        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request,
            HttpServletResponse response,
            Object handler,
            ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request,
            HttpServletResponse response, Object handler,
            Exception ex) throws Exception {
    }
}
