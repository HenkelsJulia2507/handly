package com.handly.handly.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.handly.handly.modelos.PrestadorServico;

@Repository
public interface PrestadorServicoRepositorio extends JpaRepository<PrestadorServico, Long> {

    PrestadorServico findByEmailAndSenha(String email, String senha);

}
