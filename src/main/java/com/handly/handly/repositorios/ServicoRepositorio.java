package com.handly.handly.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.handly.handly.modelos.Servico;

@Repository
public interface ServicoRepositorio extends JpaRepository<Servico, Long> {

    // Spring Data JPA cria a query automaticamente
    Servico findByEmailAndSenha(String email, String senha);
}
