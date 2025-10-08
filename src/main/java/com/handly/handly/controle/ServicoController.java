package com.handly.handly.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import com.handly.handly.modelos.Servico;

@Controller
public class ServicoController {

    @Autowired
    private Servico service;

    // Salva Servico
    @PostMapping("/salvarServico")
    public ModelAndView salvar(Servico Servico, BindingResult result) {
        if (result.hasErrors()) {
            return servicoRepositorio(Servico);
        }
        service.salvarServico(Servico);
        return new ModelAndView("redirect:/home"); // depois do cadastro vai pra home
    }

    private ModelAndView servicoRepositorio(Servico servico) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'servicoRepositorio'");
    }

}
