package com.handly.handly.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.handly.handly.modelos.Categoria;

@Repository
public interface CategoriaRepositorio extends JpaRepository<Categoria, Long> {

    // Spring Data JPA cria a query automaticamente
    Categoria findByEmailAndSenha(String email, String senha);
}

