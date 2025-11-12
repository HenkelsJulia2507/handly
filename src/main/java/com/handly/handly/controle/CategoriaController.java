package com.handly.handly.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import com.handly.handly.modelos.Categoria;

@Controller
public class CategoriaController {

    @Autowired
    private Categoria service;

    // Salva Categoria
    @PostMapping("/salvarCategoria")
    public ModelAndView salvar(Categoria Categoria, BindingResult result) {
        if (result.hasErrors()) {
            return categoriaRepositorio(Categoria);
        }
        service.salvarCategoria(Categoria);
        return new ModelAndView("redirect:/home"); // depois do cadastro vai pra home
    }

    private ModelAndView categoriaRepositorio(Categoria categoria) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'categoriaRepositorio'");
    }
}