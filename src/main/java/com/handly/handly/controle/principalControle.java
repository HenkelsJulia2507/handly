package com.handly.handly.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/principal")
public class principalControle {
/*caminho de pastas*/
    @GetMapping("/administrativo")
    public String acessarPrincipal() {
        return "administrativo/home";
    }
    
}
