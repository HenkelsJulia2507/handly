package com.handly.handly.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.handly.handly.modelos.Cliente;
import com.handly.handly.services.ClienteService;

@Controller
public class ClienteController {

    @Autowired
    private ClienteService service;

    // Abre formulário de cadastro
    @GetMapping("/cadastroCliente")
    public ModelAndView cadastrar(Cliente cliente) {
        ModelAndView mv = new ModelAndView("cadastroCliente"); // nome da view (cadastroCliente.html)
        mv.addObject("cliente", cliente);
        return mv;
    }

    // Salva cliente
    @PostMapping("/salvarCliente")
    public ModelAndView salvar(Cliente cliente, BindingResult result) {
        if (result.hasErrors()) {
            return cadastrar(cliente);
        }
        service.salvarCliente(cliente);
        return new ModelAndView("redirect:/loginCliente"); // depois do cadastro vai pro login
    }

    // Abre formulário de login
    @GetMapping("/loginCliente")
    public ModelAndView login() {
        return new ModelAndView("loginCliente"); // nome da view (loginCliente.html)
    }

    // Valida login
    @PostMapping("/logarCliente")
    public ModelAndView logar(@RequestParam String email, @RequestParam String senha) {
        Cliente cliente = service.getEmailAndSenha(email, senha);
        if (cliente != null) {
            return new ModelAndView("redirect:/home"); // se login OK, vai pra home
        } else {
            ModelAndView mv = new ModelAndView("loginCliente");
            mv.addObject("erro", "Usuário ou senha inválidos");
            return mv;
        }
    }
}
