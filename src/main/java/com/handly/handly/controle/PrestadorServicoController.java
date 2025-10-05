package com.handly.handly.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;


import com.handly.handly.modelos.PrestadorServico;
import com.handly.handly.repositorios.PrestadorServicoRepositorio;

@Controller
public class PrestadorServicoController {

    @Autowired
    private PrestadorServicoRepositorio PrestadorServicoRepositorio;


    // Abre formulário de cadastro
    @GetMapping("/cadastroPrestadorServico")
    public ModelAndView cadastrar(PrestadorServico prestadorServico) {
        ModelAndView mv = new ModelAndView("cadastroPrestador"); // nome da view (cadastroPrestador.html)
        
        
        mv.addObject("prestadorServico", prestadorServico);
        return mv;
    }

    // Salva prestador de serviço
    @PostMapping("/salvarPrestadorServico")
    public ModelAndView salvar(PrestadorServico prestadorServico, BindingResult result) {
        if (result.hasErrors()) {
            return cadastrar(prestadorServico);
        }
        PrestadorServicoRepositorio.saveAndFlush(prestadorServico);
        return new ModelAndView("redirect:/home"); // depois do cadastro vai pra home
    }

    // Abre formulário de login
    @GetMapping("/loginPrestadorServico")
    public ModelAndView login() {
        return new ModelAndView("loginPrestadorServico"); // nome da view (loginPrestadorServico.html)
    }

    // Valida login
    @PostMapping("/logarPrestadorServico")
    public ModelAndView logar(@RequestParam String email, @RequestParam String senha) {
        PrestadorServico prestadorServico = PrestadorServicoRepositorio.findByEmailAndSenha(email, senha);
        if (prestadorServico != null) {
            return new ModelAndView("redirect:/home"); // se login OK, vai pra home
        } else {
            ModelAndView mv = new ModelAndView("loginPrestadorServico");
            mv.addObject("erro", "Usuário ou senha inválidos");
            return mv;
        }
    }
}
