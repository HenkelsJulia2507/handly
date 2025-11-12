package com.handly.handly.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.handly.handly.modelos.Cliente;
import com.handly.handly.repositorios.ClienteRepositorio;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepositorio repositorio;

    @Transactional(readOnly = true)
    public Cliente getEmailAndSenha(String email, String senha) {
        return repositorio.findByEmailAndSenha(email, senha);
    }

    @Transactional
    public void salvarCliente(Cliente cliente) {
        repositorio.saveAndFlush(cliente);
    }
}
