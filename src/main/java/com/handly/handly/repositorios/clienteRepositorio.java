package com.handly.handly.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.handly.handly.modelos.Cliente;

@Repository
public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {

    // Spring Data JPA cria a query automaticamente
    Cliente findByEmailAndSenha(String email, String senha);
}
